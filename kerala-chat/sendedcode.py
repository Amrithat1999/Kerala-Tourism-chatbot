# from flask import Flask, render_template, request, jsonify
# import random
# import nltk
# import os
# import csv
# from nltk.tokenize import RegexpTokenizer
# from nltk.stem.wordnet import WordNetLemmatizer
# from nltk import pos_tag, ne_chunk
# from langdetect import detect
# from googletrans import Translator
# from nltk.corpus import stopwords
# from langdetect import detect
# from langdetect.lang_detect_exception import LangDetectException

# from nltk import pos_tag, ne_chunk
# from nltk.tokenize import word_tokenize

# app = Flask(__name__)

# # Load NLTK resources
# nltk.download('stopwords')
# nltk.download('punkt')
# nltk.download('wordnet')

# # Preprocessing functions
# def preprocess(sentence):
#     sentence = sentence.lower()
#     tokenizer = RegexpTokenizer(r'\w+')
#     tokens = tokenizer.tokenize(sentence)
#     tagged_tokens = pos_tag(tokens)
#     named_entities = ne_chunk(tagged_tokens)
#     # Exclude proper nouns from filtering
#     filtered_words = [word for word, tag in tagged_tokens if tag not in ['NNP', 'NNPS']]
#     return filtered_words


# def extract_features(text):
#     words = preprocess(text)
#     return [WordNetLemmatizer().lemmatize(word) for word in words]

# # Chatbot functions
# def train_and_classify(training_data, test_data):
#     classifier = nltk.classify.DecisionTreeClassifier.train(training_data, entropy_cutoff=0.6, support_cutoff=6)
#     training_set_accuracy = nltk.classify.accuracy(classifier, training_data)
#     test_set_accuracy = nltk.classify.accuracy(classifier, test_data)
#     return classifier, training_set_accuracy, test_set_accuracy

# tour = ['Munnar', 'Alleppey', 'Kochi', 'Wayanad', 'Varkala', 'Kumarakom',
#         'Vagamon', 'Kovalam', 'Periyar National Park', 'Poovar', 'Kollam',
#         'Idukki', 'Sabarimala', 'Kozhikode', 'Bekal', 'Thrissur',
#         'Palakkad', 'Thalassery', 'Trivandrum', 'Nelliyampathy', 'Vythiri',
#         'Nilambur', 'Ponmudi', 'Kalpetta', 'Malampuzha', 'Kannur',
#         'Kasaragod', 'Kottayam', 'Thekkady']

# # Chatbot functions
# def reply(input_sentence, classifier, input_lang='en'):
#     category = classifier.classify({word: True for word in extract_features(input_sentence)})
#     response = answers.get(category, "I'm sorry, I don't understand that.")
#     if category == 'best-places':
#         places = answers[category].split(',')
#         return ', '.join(random.sample(places, 5))
#     for place in tour:
#         if category == f'{place}-package':
#             items = answers[category].split("', '")
#             selected_items = random.sample(items, min(4, len(items)))
#             return ', '.join(selected_items)
#     for place in tour:
#         if category == f'{place}-restaurant':
#             items = answers[category].split("', '")
#             selected_items = random.sample(items, min(4, len(items)))
#             return ', '.join(selected_items)
#     for place in tour:
#         if category == f'{place}-Hotels':
#             items = answers[category].split("', '")
#             selected_items = random.sample(items, min(4, len(items)))
#             return ', '.join(selected_items)

#     return translate_response(answers[category], lang=input_lang)

# def translate_response(response, lang='en'):
#     # Translate the response to the specified language
#     if lang != 'en':
#         translator = Translator()
#         response = translator.translate(response, dest=lang).text
#     return response

# # Load data
# def get_content(filename):
#     doc = os.path.join(filename)
#     with open(doc, 'r') as content_file:
#         lines = csv.reader(content_file, delimiter='|')
#         data = [x for x in lines if len(x) == 3]
#         return data

# data = get_content('kerala_data_new.txt')

# # Preprocess data
# answers = {}
# features_data = []
# for text, category, answer in data:
#     features = extract_features(text)
#     feature_set = {word: True for word in features}
#     features_data.append((feature_set, category))
#     answers[category] = answer

# # Split data into training and testing sets
# random.shuffle(features_data)
# split_index = int(len(features_data) * 0.8)
# training_data = features_data[:split_index]
# test_data = features_data[split_index:]

# # Train classifier
# classifier = nltk.classify.DecisionTreeClassifier.train(training_data, entropy_cutoff=0.6, support_cutoff=6)


# # Flask routes
# @app.route('/')
# def index():
#     return render_template('index.html')

# preplace = []

# @app.route('/get_response', methods=['POST'])
# def get_response():
   
#     user_input = request.form['user_input']
#     # Detect the language of the user input

#     search_string = user_input
#     newstring = []

#     for place in tour:
#         place_lower = place.lower()

#         if place_lower in search_string.lower():
#             preplace.append(place_lower)
#             newstring.append(search_string)
#         else:
#             newstring.append(' '.join(preplace + [search_string]))  # Concatenate the list elements and search_string

#     search_string = ''
#     user_input = newstring[0]
#     print('user_input',user_input)
#     try:
#         lang = detect(user_input)
#     except LangDetectException:
#         lang = 'en'  # Set default language to English in case of an exception

#     # Translate user input to English if it's not in English
#     if lang != 'en':
#         translator = Translator()
#         user_input = translator.translate(user_input, src=lang, dest='en').text

#     # Get response in English
#     response = reply(user_input, classifier)
#     response = response.replace('->', '-').replace("'", '').replace("â",'₹')
#     response = response.split(', ')

#     random.shuffle(response)
#     response = response[:4]
#     if lang == 'en':
#         return jsonify({'response': response})
#     else:
#         # Translate the response back to the detected language
#         translated_response = [translate_response(r, lang) for r in response]

#     print(translated_response)
#     return jsonify({'response': translated_response})

    
# if __name__ == '__main__':
#     app.run(debug=True,port=5002)




from flask import Flask, render_template, request, jsonify
import random
import nltk
import os
import csv
from nltk.tokenize import RegexpTokenizer
from nltk.stem.wordnet import WordNetLemmatizer
from nltk import pos_tag, ne_chunk
from langdetect import detect
from googletrans import Translator
from nltk.corpus import stopwords
from langdetect import detect
from langdetect.lang_detect_exception import LangDetectException

from nltk import pos_tag, ne_chunk
from nltk.tokenize import word_tokenize

app = Flask(__name__)

# Load NLTK resources
nltk.download('stopwords')
nltk.download('punkt')
nltk.download('wordnet')

# Preprocessing functions
def preprocess(sentence):
    sentence = sentence.lower()
    tokenizer = RegexpTokenizer(r'\w+')
    tokens = tokenizer.tokenize(sentence)
    tagged_tokens = pos_tag(tokens)
    named_entities = ne_chunk(tagged_tokens)
    # Exclude proper nouns from filtering
    filtered_words = [word for word, tag in tagged_tokens if tag not in ['NNP', 'NNPS']]
    return filtered_words


def extract_features(text):
    words = preprocess(text)
    return [WordNetLemmatizer().lemmatize(word) for word in words]

# Chatbot functions
def train_and_classify(training_data, test_data):
    classifier = nltk.classify.DecisionTreeClassifier.train(training_data, entropy_cutoff=0.6, support_cutoff=6)
    training_set_accuracy = nltk.classify.accuracy(classifier, training_data)
    test_set_accuracy = nltk.classify.accuracy(classifier, test_data)
    return classifier, training_set_accuracy, test_set_accuracy

tour = ['Munnar', 'Alleppey', 'Kochi', 'Wayanad', 'Varkala', 'Kumarakom',
        'Vagamon', 'Kovalam', 'Periyar National Park', 'Poovar', 'Kollam',
        'Idukki', 'Sabarimala', 'Kozhikode', 'Bekal', 'Thrissur',
        'Palakkad', 'Thalassery', 'Trivandrum', 'Nelliyampathy', 'Vythiri',
        'Nilambur', 'Ponmudi', 'Kalpetta', 'Malampuzha', 'Kannur',
        'Kasaragod', 'Kottayam', 'Thekkady']

# Chatbot functions
def reply(input_sentence, classifier, input_lang='en'):
    category = classifier.classify({word: True for word in extract_features(input_sentence)})
    response = answers.get(category, "I'm sorry, I don't understand that.")
    if category == 'best-places':
        places = answers[category].split(',')
        return ', '.join(random.sample(places, 5))
    for place in tour:
        if category == f'{place}-package':
            items = answers[category].split("', '")
            selected_items = random.sample(items, min(4, len(items)))
            return ', '.join(selected_items)
    for place in tour:
        if category == f'{place}-restaurant':
            items = answers[category].split("', '")
            selected_items = random.sample(items, min(4, len(items)))
            return ', '.join(selected_items)
    for place in tour:
        if category == f'{place}-Hotels':
            items = answers[category].split("', '")
            selected_items = random.sample(items, min(4, len(items)))
            return ', '.join(selected_items)

    return answers[category]



# Load data
def get_content(filename):
    doc = os.path.join(filename)
    with open(doc, 'r') as content_file:
        lines = csv.reader(content_file, delimiter='|')
        data = [x for x in lines if len(x) == 3]
        return data

data = get_content('data.txt')

# Preprocess data
answers = {}
features_data = []
for text, category, answer in data:
    features = extract_features(text)
    feature_set = {word: True for word in features}
    features_data.append((feature_set, category))
    answers[category] = answer

# Split data into training and testing sets
random.shuffle(features_data)
split_index = int(len(features_data) * 0.8)
training_data = features_data[:split_index]
test_data = features_data[split_index:]

# Train classifier
classifier = nltk.classify.DecisionTreeClassifier.train(training_data, entropy_cutoff=0.6, support_cutoff=6)


# Flask routes
@app.route('/')
def index():
    return render_template('index.html')

preplace = []

def translate(text, target_language='en'):
    return Translator().translate(text, dest=target_language).text

def detect_lang(text):
    try:
        return detect(text)
    except:
        return None