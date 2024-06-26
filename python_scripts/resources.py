import random

female_names_part1 = [
    "Alice", "Beth", "Cara", "Diana", "Eva",
    "Fiona", "Grace", "Hannah", "Ivy", "Jade",
    "Kara", "Lara", "Mia", "Nina", "Olivia",
    "Paula", "Quinn", "Rita", "Sara", "Tina",
    "Naomi", "Oriana", "Penny", "Rosa", "Sophia",
    "Teresa", "Ursula", "Valeria", "Willow", "Ximena"
]

female_names_part2 = [
    "Uma", "Vera", "Wendy", "Xena", "Yara",
    "Zoe", "Amber", "Brenda", "Clara", "Daphne",
    "Evelyn", "Freya", "Gina", "Hilda", "Iris",
    "Julia", "Kendra", "Luna", "Mara", "Nora",
    "Ophelia", "Patricia", "Rebecca", "Selena", "Tiffany"
]

male_names_part1 = [
    "Aaron", "Ben", "Carl", "David", "Evan",
    "Frank", "George", "Henry", "Ian", "Jack",
    "Kyle", "Liam", "Mason", "Nate", "Oscar",
    "Paul", "Quincy", "Ryan", "Sam", "Tom",
    "Umar", "Victor", "Walter", "Xander", "Yusuf",
    "Zane", "Adam", "Brian", "Chris", "Derek"
]

male_names_part2 = [
    "Umar", "Victor", "Walter", "Xander", "Yusuf",
    "Zane", "Adam", "Brian", "Chris", "Derek",
    "Ethan", "Fred", "Gordon", "Harry", "Isaac",
    "James", "Kevin", "Leo", "Mark", "Noah"
]

emails = [
    "alice@example.com", "beth@example.com", "cara@example.com", "diana@example.com", "eva@example.com",
    "fiona@example.com", "grace@example.com", "hannah@example.com", "ivy@example.com", "jade@example.com",
    "kara@example.com", "lara@example.com", "mia@example.com", "nina@example.com", "olivia@example.com",
    "paula@example.com", "quinn@example.com", "rita@example.com", "sara@example.com", "tina@example.com",
    "uma@example.com", "vera@example.com", "wendy@example.com", "xena@example.com", "yara@example.com",
    "zoe@example.com", "amber@example.com", "brenda@example.com", "clara@example.com", "daphne@example.com",
    "evelyn@example.com", "freya@example.com", "gina@example.com", "hilda@example.com", "iris@example.com",
    "julia@example.com", "kendra@example.com", "luna@example.com", "mara@example.com", "nora@example.com",
    "naomi@example.com", "oriana@example.com", "penny@example.com", "rosa@example.com", "sophia@example.com",
    "teresa@example.com", "ursula@example.com", "valeria@example.com", "willow@example.com", "ximena@example.com",
    "ophelia@example.com", "patricia@example.com", "rebecca@example.com", "selena@example.com", "tiffany@example.com"
]

functions = random.sample([
    "Manager", "Engineer", "Developer", "Designer", "Analyst",
    "Consultant", "Director", "Administrator", "Coordinator", "Specialist",
    "Technician", "Supervisor", "Planner", "Assistant", "Clerk",
    "Advisor", "Agent", "Officer", "Executive", "Leader",
    "Strategist", "Instructor", "Architect", "Scientist", "Trainer",
    "Producer", "Controller", "Inspector", "Mechanic", "Operator"
], 12)

# Funcție pentru a alege și elimina un email din lista
def choose_email():
    email = random.choice(emails)
    emails.remove(email)
    return email
