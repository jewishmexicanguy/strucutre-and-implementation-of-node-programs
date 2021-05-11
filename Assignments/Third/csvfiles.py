# Reading and Writing Comma Seperated Value files with Python
import csv

# TODO : list the dialects that are available to use
print(csv.list_dialects())

# TODO : Open a CSV file and read each row of data 
def readerSample():
  with open("StockQuotes.csv") as datafile:
    reader = csv.reader(datafile)
    for row in reader:
      print(row)

# TODO : Use the CSV module Sniffer to see what dialect of CSV this is
def useSniffer():
  with open("StockQuotes.csv") as csvfile:
    dialect = csv.Sniffer().sniff(csvfile.read(1024))
    csvfile.seek(0)
    hasHeader = csv.Sniffer().has_header(csvfile.read(1024))
    csvfile.seek(0)
    print("Headers found: " + str(hasHeader))
    print(dialect.delimiter)
    print(dialect.escapechar)
    print(dialect.quotechar)

# TODO : Write data to a CSV file
def writerSample():
  with open("SampleData.csv", mode="w") as csvfile:
    csvwriter = csv.writer(csvfile)
    csvwriter.writerow(["Name", "Department", "Location"])
    csvwriter.writerow(["John Doe", "Accounting", "San Francisco"])
    csvwriter.writerow(["Jane Dae", "Engineering", "Seattle"])
    csvwriter.writerow(["Jim Due", "Human Resources", "New York"])

# Exerise the samples
# readerSample()
# useSniffer()
# writerSample()