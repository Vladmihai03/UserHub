import random

female_names_part1 = [
    "Alice", "Beth", "Cara", "Diana", "Eva",
    "Fiona", "Grace", "Hannah", "Ivy", "Jade",
    "Kara", "Lara", "Mia", "Nina", "Olivia",
    "Paula", "Quinn", "Rita", "Sara", "Tina",
    "Naomi", "Oriana", "Penny", "Rosa", "Sophia",
    "Teresa", "Ursula", "Valeria", "Willow", "Ximena",
    "Uma", "Vera", "Wendy", "Xena", "Yara",
    "Zoe", "Amber", "Brenda", "Clara", "Daphne"
]

female_names_part2 = [
    "Evelyn", "Freya", "Gina", "Hilda", "Iris",
    "Julia", "Kendra", "Luna", "Mara", "Nora",
    "Ophelia", "Patricia", "Rebecca", "Selena", "Tiffany",
    "Uma", "Vera", "Wendy", "Xena", "Yara",
    "Zoe", "Amber", "Brenda", "Clara", "Daphne",
    "Alice", "Beth", "Cara", "Diana", "Eva",
    "Fiona", "Grace", "Hannah", "Ivy", "Jade"
]


male_names_part1 = [
    "Aaron", "Ben", "Carl", "David", "Evan",
    "Frank", "George", "Henry", "Ian", "Jack",
    "Kyle", "Liam", "Mason", "Nate", "Oscar",
    "Paul", "Quincy", "Ryan", "Sam", "Tom",
    "Umar", "Victor", "Walter", "Xander", "Yusuf",
    "Zane", "Adam", "Brian", "Chris", "Derek",
    "Ethan", "Fred", "Gordon", "Harry", "Isaac",
    "James", "Kevin", "Leo", "Mark", "Noah"
]

male_names_part2 = [
    "Ethan", "Fred", "Gordon", "Harry", "Isaac",
    "James", "Kevin", "Leo", "Mark", "Noah",
    "Oliver", "Patrick", "Quentin", "Richard", "Steven",
    "Tim", "Ulysses", "Vincent", "Wayne", "Xavier",
    "Yosef", "Zachary", "Alfred", "Brett", "Cody",
    "Dylan", "Edward", "Floyd", "Garrett", "Howard",
    "Ivan", "John", "Kirk", "Louis", "Michael",
    "Nick", "Omar", "Peter", "Roger", "Stan"
]


emails = [
    "adam@example.com", "ben@example.com", "charlie@example.com", "dan@example.com", "ed@example.com",
    "frank@example.com", "george@example.com", "henry@example.com", "ian@example.com", "jack@example.com",
    "kevin@example.com", "leo@example.com", "matt@example.com", "nate@example.com", "oliver@example.com",
    "paul@example.com", "quincy@example.com", "ray@example.com", "sam@example.com", "tom@example.com",
    "ulric@example.com", "victor@example.com", "walt@example.com", "xander@example.com", "yves@example.com",
    "zane@example.com", "aaron@example.com", "brian@example.com", "chris@example.com", "derek@example.com",
    "ethan@example.com", "felix@example.com", "gavin@example.com", "harry@example.com", "isaac@example.com",
    "jon@example.com", "kyle@example.com", "luke@example.com", "mark@example.com", "nick@example.com",
    "owen@example.com", "peter@example.com", "quentin@example.com", "russ@example.com", "steve@example.com",
    "trent@example.com", "urs@example.com", "vince@example.com", "wayne@example.com", "xavier@example.com",
    "yuri@example.com", "zach@example.com", "alicea@example.com", "bella@example.com", "candice@example.com",
    "diana@example.com", "elena@example.com", "fay@example.com", "gemma@example.com", "heather@example.com",
    "ivy@example.com", "jane@example.com", "kate@example.com", "lara@example.com", "maria@example.com",
    "nina@example.com", "olivia@example.com", "pat@example.com", "queen@example.com", "rosa@example.com",
    "susan@example.com", "tina@example.com", "uma@example.com", "vera@example.com", "wendy@example.com",
    "xena@example.com", "yara@example.com", "zoe@example.com", "amber@example.com", "brenda@example.com",
    "claire@example.com", "daphne@example.com", "evelyn@example.com", "faith@example.com", "gina@example.com",
    "hilda@example.com", "iris@example.com", "julia@example.com", "kendra@example.com", "luna@example.com",
    "mara@example.com", "nora@example.com", "naomi@example.com", "oriana@example.com", "penny@example.com",
    "rebecca@example.com", "selena@example.com", "tiffany@example.com", "ursula@example.com", "valerie@example.com",
    "willow@example.com", "ximena@example.com", "yvette@example.com", "zoey@example.com"
]

functions = random.sample([
    "Manager", "Engineer", "Developer", "Designer", "Analyst",
    "Consultant", "Director", "Administrator", "Coordinator", "Specialist",
    "Technician", "Supervisor", "Planner", "Assistant", "Clerk",
    "Advisor", "Agent", "Officer", "Executive", "Leader",
    "Strategist", "Instructor", "Architect", "Scientist", "Trainer",
    "Producer", "Controller", "Inspector", "Mechanic", "Operator"
], 10)

# Funcție pentru a alege și elimina un email din lista
def choose_email():
    email = random.choice(emails)
    emails.remove(email)
    return email
