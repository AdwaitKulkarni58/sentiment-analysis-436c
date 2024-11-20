import pymysql
import json
import os
from collections import Counter
import re

def lambda_handler(event, context):
    try:
        output = {}
        connection = pymysql.connect(
            host=os.getenv('DB_HOST'),
            user=os.getenv('DB_USER'),
            password=os.getenv('DB_PASSWORD'),
            database=os.getenv('DB_NAME'),
            connect_timeout=120,
            cursorclass=pymysql.cursors.DictCursor
        )

        with connection.cursor() as cursor:
            query = """
                SELECT sentiment, COUNT(*) as count
                FROM Sentiment
                WHERE course = %s
                GROUP BY sentiment;
            """
            course = event['queryStringParameters']['course']
            cursor.execute(query, (course))
            result = cursor.fetchall()
            print(course)
            print(result)

            sentiment_counts = {'POSITIVE': 0, 'NEGATIVE': 0, 'NEUTRAL': 0}
            for row in result:
                sentiment_counts[row['sentiment']] = row['count']
            print(sentiment_counts)
            output['pie_chart_data'] = sentiment_counts

            #get the score
            postive_score = sentiment_counts['POSITIVE'] * 5
            neutral_score = sentiment_counts['NEUTRAL'] * 3
            negative_score = sentiment_counts['NEGATIVE'] * 1

            total_counts = sentiment_counts['POSITIVE'] + sentiment_counts['NEUTRAL'] + sentiment_counts['NEGATIVE']

            #avg them
            score_out_of_five = (postive_score + neutral_score + negative_score) / total_counts
            score_out_of_five = round(score_out_of_five, 1)  # Rounds to 1 decimal place
            print(f"Score out of 5: {score_out_of_five}")

            output['score_data'] = score_out_of_five

            #get the word count data
            query2 = """
                SELECT review
                FROM Reviews
                WHERE course=%s
            """
            cursor.execute(query2, (course))
            result2 = cursor.fetchall() #will have format [{'review': 'all review concatenated'}]
            print(result2)

            reviews_text = result2[0]['review']
            words_list = re.findall(r'\w+', reviews_text.lower())
            stopwords = ['the', 'of', 'and', 'is','to','in','a','from','by','that', 'with', 'this', 'as', 'an',
                          'are','its', 'at', 'for', 'course', 'class', 'was']
            words_without_stopwords = [ word for word in words_list if word not in stopwords ]

            output['word_cloud_data'] = Counter(words_without_stopwords).most_common(20)
            print(output)


            cursor.execute("select * from Reviews")
            return {
                'statusCode': 200,
                'body': json.dumps(output),
                'headers': {
                    'Content-Type': 'application/json', 
                    'Access-Control-Allow-Origin': '*'  
                }
            }

    except Exception as e:
        print(f"Error: {e}")
        return {
            'statusCode': 500,
            'body': f"Error fetching data: {e}"
        }

    finally:
        if connection:
            connection.close()
