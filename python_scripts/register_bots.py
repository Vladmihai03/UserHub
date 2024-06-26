from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import random
import string
import time
from resources import (
    female_names_part1, female_names_part2,
    male_names_part1, male_names_part2,
    choose_email, functions, emails
)

# Funcție pentru a alege un nume aleatoriu în funcție de gen
def choose_name(gender):
    if gender == 'female':
        first_name = random.choice(female_names_part1)
        last_name = random.choice(female_names_part2)
    elif gender == 'male':
        first_name = random.choice(male_names_part1)
        last_name = random.choice(male_names_part2)
    else:
        raise ValueError("Genul trebuie să fie 'female' sau 'male'")
    return f"{first_name} {last_name}"

# Funcție pentru a genera o parolă complexă
def generate_complex_password():
    special_chars = '!@#$%^&*()_+-=[]{}|;:,.<>?'
    password_length = random.randint(10, 15)  # Alege o lungime aleatoare între 10 și 15 caractere

    password_charset = string.ascii_letters + string.digits + special_chars
    password = ''.join(random.choice(password_charset) for _ in range(password_length))
    return password

# Funcție pentru a alege un salariu aleatoriu între 10000 și 50000
def choose_salary():
    return random.randint(10000, 50000)

# Configurăm opțiunile pentru Chrome
chrome_options = Options()
chrome_options.add_argument("--incognito")  # Deschidem în mod incognito

# Inițializăm driver-ul Chrome cu opțiunile definite
driver = webdriver.Chrome(options=chrome_options)
url = "http://localhost:3000/"
driver.get(url)
count = 0
try:
    while emails:
        # Așteptăm ca butonul de înregistrare să fie clicabil
        register_btn = WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.CLASS_NAME, "register"))
        )

        # Facem clic pe butonul de înregistrare
        register_btn.click()

        # Alege random genul
        gender = random.choice(['female', 'male'])

        # Alege numele în funcție de gen
        name = choose_name(gender)

        # Alege email-ul și îl elimină din lista de emailuri
        email = choose_email()

        # Generăm parola complexă
        password = generate_complex_password()

        # Alege funcția random din lista
        func = random.choice(functions)


        # Alege salariul random
        salary = choose_salary()

        # Complează câmpul de nume
        name_input = driver.find_element(By.NAME, "name")
        name_input.send_keys(name)

        # Complează câmpul de email
        email_input = driver.find_element(By.NAME, "email")
        email_input.send_keys(email)

        # Complează câmpul de parolă
        password_input = driver.find_element(By.NAME, "password")
        password_input.send_keys(password)

        # Complează câmpul de salariu
        salary_input = driver.find_element(By.NAME, "salary")
        salary_input.send_keys(str(salary))  # Convertim salariul la șir de caractere

        # Complează câmpul de funcție
        func_input = driver.find_element(By.NAME, "func")
        func_input.send_keys(func)

        # Selectează genul
        gender_radio = driver.find_element(By.XPATH, f"//input[@name='gender' and @value='{gender}']")
        gender_radio.click()

        # Trimiterea formularului
        submit_button = driver.find_element(By.XPATH, "//button[text()='Register']")
        submit_button.click()
        count +=1
        print(count)


finally:
    driver.quit()
