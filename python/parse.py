#! /usr/bin/env python
"""
Parse Input
"""
import csv
import sys


events = []


def main():
    for line in csv.reader(iter(sys.stdin.readline, '')):
        events.append(line)

    # Add your code here
    print(events)


if __name__ == "__main__":
    main()
