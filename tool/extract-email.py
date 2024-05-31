import re
import sys

def extract_emails(file_path):
    # Expression régulière pour correspondre aux adresses e-mail
    email_regex = r'[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+'
    
    # Lire le contenu du fichier
    with open(file_path, 'r') as file:
        content = file.read()
    
    # Trouver toutes les adresses e-mail dans le contenu
    emails = re.findall(email_regex, content)
    
    return emails

def main():
    if len(sys.argv) != 2:
        print("Usage: python extract_emails.py <file_path>")
        sys.exit(1)
    
    file_path = sys.argv[1]
    
    try:
        emails = extract_emails(file_path)
        if emails:
            print("Found the following email addresses:")
            for email in emails:
                print(email)
        else:
            print("No email addresses found.")
    except FileNotFoundError:
        print(f"Error: The file '{file_path}' does not exist.")
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    main()
