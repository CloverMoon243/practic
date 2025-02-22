from datetime import datetime
import calendar

def get_user_input():
    day = int(input("Введите день: "))
    month = int(input("Введите месяц: "))
    year = int(input("Введите год: "))
    return day, month, year

def get_weekday(day, month, year):
    return ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"][calendar.weekday(year, month, day)]

def is_leap(year):
    return "високосный" if calendar.isleap(year) else "не високосный"

def calculate_age(day, month, year):
    today = datetime.now()
    age = today.year - year - ((today.month, today.day) < (month, day))
    return age

def display_date_in_stars(day, month, year):
    digit_map = {
        '0': [" *** ", "*   *", "*   *", "*   *", " *** "],
        '1': ["  *  ", " **  ", "  *  ", "  *  ", " *** "],
        '2': [" *** ", "    *", " *** ", "*    ", " *** "],
        '3': [" *** ", "    *", " *** ", "    *", " *** "],
        '4': ["*   *", "*   *", " *** ", "    *", "    *"],
        '5': [" *** ", "*    ", " *** ", "    *", " *** "],
        '6': [" *** ", "*    ", " *** ", "*   *", " *** "],
        '7': [" *** ", "    *", "   * ", "  *  ", "  *  "],
        '8': [" *** ", "*   *", " *** ", "*   *", " *** "],
        '9': [" *** ", "*   *", " *** ", "    *", " *** "]
    }
    date_str = f"{day:02d} {month:02d} {year}"
    for row in range(5):
        print("  ".join("".join(digit_map[c][row]) for c in date_str if c != " "))

def main():
    day, month, year = get_user_input()
    print(f"\nДата рождения: {day:02d}.{month:02d}.{year}")
    print(f"День недели: {get_weekday(day, month, year)}")
    print(f"Год рождения: {is_leap(year)}")
    print(f"Возраст: {calculate_age(day, month, year)} лет\n")
    print("Дата рождения в формате звездочек:")
    display_date_in_stars(day, month, year)

if __name__ == "__main__":
    main()