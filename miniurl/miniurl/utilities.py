import random
import string
import environ

env = environ.Env()
environ.Env.read_env()

LIVE_FRONTEND_SERVER_URL = env("LIVE_FRONTEND_SERVER_URL")


def generate_random_string(length):
    '''
    this returns a randomly generated 
    string(consist of characters and numbers) of given length
    '''
    all_character = [character for character in string.ascii_lowercase] + \
        [character for character in string.ascii_uppercase] + \
        [str(character) for character in range(10)]
    random_string = []
    for _ in range(length):
        random_character = random.choice(all_character)
        random_string.append(random_character)
    return "".join(random_string)
