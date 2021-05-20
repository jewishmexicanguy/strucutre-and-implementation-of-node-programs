// Create a CSV Processor 
  - this must be able to perform several major tasks:
    1) Reading CSV files 
      - Access the file path via the File System in Node.js
      - We need to store the file content inside of a variable.

        * What are the specific limits and boundaries pertaining to the contents of a CSV file?
          - Header Columns, the associated Rows of a particular column(s), the delimiters such as double quotations, comma seperated values, and line breaks.
        * What is a Header, what is a Column?
          - The Header is specifically the first row
          - A column is one item from the Header row.
            - Because a header can have more than one item, you could have more than one column.
        * What is a Row? Where is a Row?
          - It could be almost anywhere in the CSV file.
            * Where could the Row NOT be?
              - At the beginning of the CSV file because the first line is specifically the Header Row.
              - Everywhere else in the CSV file, there could be a row.
            * What could the Row NOT be?
              - 
        * What is a Cell? 
          - The point of intersection between the Column and Row.
        * Define the structure of a Row, a Header, and the Cell.
        * When reading a CSV file, be able to have the entire content of the file as multiple Javascript Objects.
          -

          
        

    2) Writing CSV files
    3) Manipulating CSV files in many different ways.
      - Adding and Deleting Rows, Columns, or Cells, whether in groups or solely as specific and individual cells.
////////////////////////////////

