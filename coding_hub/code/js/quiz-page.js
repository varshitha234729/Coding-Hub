const params = new URLSearchParams(window.location.search);
    const language = params.get('language');
    const subtopic = params.get('subtopic');
const quizData = {
      'Java': {
        'Variables': [
  {
    question: 'Which keyword is used to declare a variable in Java?',
    options: ['let', 'var', 'int', 'define'],
    answer: 2,
    explanation: 'In Java, variables are declared using data types like int, float, etc.'
  },
  {
    question: 'Which of the following is a valid variable name in Java?',
    options: ['1var', 'var_1', 'var-1', 'var 1'],
    answer: 1,
    explanation: 'Variable names cannot start with digits or contain spaces/hyphens.'
  },
  {
    question: 'What is the default value of an instance variable of type int?',
    options: ['0', 'null', 'undefined', 'NaN'],
    answer: 0,
    explanation: 'Instance variables of primitive types get default values, and for int, it is 0.'
  },
  {
    question: 'Which keyword is used to make a variable constant in Java?',
    options: ['const', 'final', 'static', 'constant'],
    answer: 1,
    explanation: 'The final keyword is used to create constants.'
  },
  {
    question: 'What is the scope of a local variable?',
    options: ['Entire class', 'Method only', 'Across all methods', 'Global'],
    answer: 1,
    explanation: 'Local variables are only accessible within the method they are declared.'
  },
  {
    question: 'Can you declare multiple variables of the same type in a single line?',
    options: ['Yes', 'No', 'Only if static', 'Only in loops'],
    answer: 0,
    explanation: 'Yes, you can declare like int a = 1, b = 2;'
  },
  {
    question: 'Which of the following is NOT a valid variable declaration?',
    options: ['int x = 10;', 'float y = 2.5f;', 'char c = "A";', 'boolean flag = true;'],
    answer: 2,
    explanation: 'char values must be enclosed in single quotes, not double quotes.'
  },
  {
    question: 'What is a class variable in Java?',
    options: ['Instance variable', 'Local variable', 'Static variable', 'Final variable'],
    answer: 2,
    explanation: 'A class variable is declared with static and shared among all instances.'
  },
  {
    question: 'Which modifier makes a variable accessible only within its own class?',
    options: ['public', 'private', 'protected', 'default'],
    answer: 1,
    explanation: 'private restricts access to the variable within the class only.'
  },
  {
    question: 'Which type of variable is shared across all instances of a class?',
    options: ['Instance', 'Local', 'Static', 'Global'],
    answer: 2,
    explanation: 'Static variables are shared across all instances of a class.'
  }
],
'Datatypes': [
  {
    question: 'Which of the following is a primitive data type in Java?',
    options: ['String', 'ArrayList', 'int', 'Scanner'],
    answer: 2,
    explanation: 'int is one of the eight primitive data types in Java.'
  },
  {
    question: 'What is the size of a byte data type in Java?',
    options: ['8 bits', '16 bits', '32 bits', '64 bits'],
    answer: 0,
    explanation: 'byte is an 8-bit signed two’s complement integer.'
  },
  {
    question: 'Which data type should be used to store a true or false value?',
    options: ['int', 'boolean', 'char', 'String'],
    answer: 1,
    explanation: 'boolean is used to represent true/false values.'
  },
  {
    question: 'What is the default value of a boolean data type in Java?',
    options: ['0', 'true', 'false', 'null'],
    answer: 2,
    explanation: 'The default value of a boolean is false.'
  },
  {
    question: 'Which of these can store a single 16-bit Unicode character?',
    options: ['String', 'char', 'byte', 'short'],
    answer: 1,
    explanation: 'char stores a single 16-bit Unicode character.'
  },
  {
    question: 'Which data type is used to store decimal numbers in Java?',
    options: ['int', 'boolean', 'double', 'char'],
    answer: 2,
    explanation: 'double is used to store floating-point numbers (decimals).'
  },
  {
    question: 'Which data type can hold the largest value?',
    options: ['int', 'long', 'double', 'float'],
    answer: 2,
    explanation: 'double can store a wider range of values than float, int, or long.'
  },
  {
    question: 'What is the default value of a reference (non-primitive) type?',
    options: ['0', 'null', 'undefined', '""'],
    answer: 1,
    explanation: 'Reference types default to null in Java.'
  },
  {
    question: 'Which of these is not a valid data type in Java?',
    options: ['int', 'float', 'real', 'boolean'],
    answer: 2,
    explanation: 'real is not a valid data type in Java.'
  },
  {
    question: 'What is the output of the following code?\n\nbyte b = 127;\nb++;\nSystem.out.println(b);',
    options: ['128', '-128', '127', 'Compile Error'],
    answer: 1,
    explanation: 'byte overflows at 127 and wraps to -128.'
  }
],
'Literals': [
  {
    question: 'Which of the following is a valid integer literal in Java?',
    options: ['012', '0x12', '12L', 'All of the above'],
    answer: 3,
    explanation: '012 (octal), 0x12 (hex), and 12L (long) are all valid integer literals.'
  },
  {
    question: 'What is the output of: int a = 010; System.out.println(a);',
    options: ['10', '8', 'Compile Error', '0'],
    answer: 1,
    explanation: '010 is an octal literal which equals 8 in decimal.'
  },
  {
    question: 'Which of these is a character literal?',
    options: ['"a"', "'a'", 'a', "'abc'"],
    answer: 1,
    explanation: "'a' is a character literal. \"a\" is a string."
  },
  {
    question: 'What kind of literal is 3.14f in Java?',
    options: ['Double', 'Float', 'Integer', 'Long'],
    answer: 1,
    explanation: '3.14f is a float literal, specified with the suffix f.'
  },
  {
    question: 'Which of these literals represent boolean values?',
    options: ['1 and 0', 'true and false', 'Yes and No', 'T and F'],
    answer: 1,
    explanation: 'Only true and false are valid boolean literals in Java.'
  },
  {
    question: 'Which of the following is NOT a valid literal?',
    options: ['0xFACE', '0777', '0b1010', '0c1234'],
    answer: 3,
    explanation: '0c1234 is not a valid literal; c-prefixed literals don’t exist in Java.'
  },
  {
    question: 'What is the value of the literal 0b1011 in decimal?',
    options: ['11', '10', '9', '7'],
    answer: 0,
    explanation: '0b1011 is binary literal and equals 11 in decimal.'
  },
  {
    question: 'Which suffix is used to denote a long literal in Java?',
    options: ['L', 'l', 'Both A and B', 'No suffix'],
    answer: 2,
    explanation: 'Both L and l can be used, but L is preferred to avoid confusion.'
  },
  {
    question: 'What is the result of: double d = 1.0e3;',
    options: ['1.0', '100.0', '1000.0', '10000.0'],
    answer: 2,
    explanation: '1.0e3 means 1.0 × 10^3 = 1000.0'
  },
  {
    question: 'Which of the following string literals is valid?',
    options: ['"Hello', 'Hello"', '"Hello"', "'Hello'"],
    answer: 2,
    explanation: '"Hello" is the correct string literal. Others are either incomplete or incorrect types.'
  }
],
'Type Conversion': [
  {
    question: 'What is type conversion in Java?',
    options: ['Converting a variable to String', 'Changing access modifier', 'Assigning one data type to another', 'None of the above'],
    answer: 2,
    explanation: 'Type conversion refers to assigning a value of one data type to a variable of another type.'
  },
  {
    question: 'Which of the following is an example of implicit type conversion?',
    options: ['int a = 10; double d = a;', 'double d = 10.5; int a = d;', 'int a = (int) 10.5;', 'String s = (String) 123;'],
    answer: 0,
    explanation: 'Java automatically converts int to double (widening conversion).'
  },
  {
    question: 'What is the output of: int a = (int) 3.7; System.out.println(a);',
    options: ['3.7', '4', '3', 'Error'],
    answer: 2,
    explanation: 'Type casting a double to int truncates the decimal part, so result is 3.'
  },
  {
    question: 'Which of the following conversions requires explicit casting?',
    options: ['int to long', 'byte to int', 'double to int', 'char to int'],
    answer: 2,
    explanation: 'double to int is a narrowing conversion and needs explicit cast.'
  },
  {
    question: 'What is the result of: byte b = (byte) 130;',
    options: ['130', '-126', 'Compile Error', '0'],
    answer: 1,
    explanation: '130 overflows the byte range; it wraps around to -126.'
  },
  {
    question: 'Which of these conversions is not possible, even with casting?',
    options: ['int to byte', 'int to char', 'int to String using (String)', 'char to int'],
    answer: 2,
    explanation: 'You cannot cast primitive int to String using (String); use String.valueOf().'
  },
  {
    question: 'What is the result of: char ch = (char) 65;',
    options: ['A', '65', 'Error', 'char'],
    answer: 0,
    explanation: '65 is the ASCII code for the character A.'
  },
  {
    question: 'Which statement correctly converts a String "123" to an int?',
    options: ['int a = "123";', 'int a = Integer.valueOf("123");', 'int a = Integer.parseInt("123");', 'int a = (int) "123";'],
    answer: 2,
    explanation: 'Integer.parseInt("123") correctly converts String to int.'
  },
  {
    question: 'What is widening conversion in Java?',
    options: ['Smaller to larger type', 'Larger to smaller type', 'String to int', 'Invalid type conversion'],
    answer: 0,
    explanation: 'Widening conversion happens automatically from smaller to larger types.'
  },
  {
    question: 'What will be the output of: int x = 10; long y = x; System.out.println(y);',
    options: ['Compile Error', 'Runtime Error', '10', '0'],
    answer: 2,
    explanation: 'This is an implicit widening conversion. Output is 10.'
  }
],
'Operators': [
  {
    question: 'Which of the following is a logical operator in Java?',
    options: ['+', '&&', '=', '%'],
    answer: 1,
    explanation: '&& is a logical AND operator used in boolean expressions.'
  },
  {
    question: 'What is the output of: int a = 5; int b = 2; System.out.println(a % b);',
    options: ['2', '1', '3', '0'],
    answer: 1,
    explanation: '5 % 2 gives the remainder 1.'
  },
  {
    question: 'Which operator has the highest precedence in Java?',
    options: ['+', '*', '()', '&&'],
    answer: 2,
    explanation: 'Parentheses have the highest precedence in Java operator hierarchy.'
  },
  {
    question: 'What is the result of: System.out.println(10 + 20 + "Java");',
    options: ['30Java', '1020Java', 'Java30', 'Java1020'],
    answer: 0,
    explanation: '10 + 20 = 30 is evaluated first, then concatenated with "Java".'
  },
  {
    question: 'Which operator is used to compare two values for equality?',
    options: ['=', '==', '!=', 'equals()'],
    answer: 1,
    explanation: '== is used for comparison; = is for assignment.'
  },
  {
    question: 'What will be the output of: int x = 5; System.out.println(x++);',
    options: ['5', '6', 'Error', '0'],
    answer: 0,
    explanation: 'Post-increment returns the value before incrementing, so prints 5.'
  },
  {
    question: 'Which of the following is the bitwise AND operator in Java?',
    options: ['&&', '|', '&', '^'],
    answer: 2,
    explanation: '& is the bitwise AND operator; && is logical AND.'
  },
  {
    question: 'What is the result of this expression: 5 + 2 * 3?',
    options: ['21', '11', '15', '10.5'],
    answer: 1,
    explanation: 'Multiplication has higher precedence, so 2*3 = 6, then 5+6 = 11.'
  },
  {
    question: 'What does the >>> operator do in Java?',
    options: ['Bitwise AND', 'Unsigned right shift', 'Logical OR', 'Bitwise XOR'],
    answer: 1,
    explanation: '>>> is the unsigned right shift operator, fills with zeros.'
  },
  {
    question: 'Which of the following is a ternary operator in Java?',
    options: ['if', 'switch', '?:', '??'],
    answer: 2,
    explanation: 'The ternary operator `?:` evaluates a condition and returns one of two values.'
  }
],
'Control statements': [
  {
    question: 'Which control statement is used to exit a loop prematurely?',
    options: ['continue', 'return', 'exit', 'break'],
    answer: 3,
    explanation: '`break` exits the loop immediately when encountered.'
  },
  {
    question: 'What is the output?\nint i = 0;\nwhile (i < 3) {\n  System.out.print(i);\n  i++;\n}',
    options: ['012', '123', '01', 'Infinite loop'],
    answer: 0,
    explanation: 'The loop runs while i < 3, printing 0, 1, 2.'
  },
  {
    question: 'Which of these is not a loop control structure in Java?',
    options: ['for', 'do-while', 'repeat-until', 'while'],
    answer: 2,
    explanation: '`repeat-until` is not a Java loop structure; it is used in other languages.'
  },
  {
    question: 'What is the output?\nfor (int i = 0; i < 5; i++) {\n  if (i == 3) break;\n  System.out.print(i);\n}',
    options: ['0123', '012', '01234', '123'],
    answer: 1,
    explanation: 'The loop breaks when i == 3, so it prints 0, 1, 2.'
  },
  {
    question: 'What is the output?\nfor (int i = 0; i < 3; i++) {\n  if (i == 1) continue;\n  System.out.print(i);\n}',
    options: ['012', '02', '01', '123'],
    answer: 1,
    explanation: 'When i == 1, `continue` skips the print. So, 0 and 2 are printed.'
  },
  {
    question: 'Which statement allows selection among multiple options?',
    options: ['for', 'switch', 'while', 'if'],
    answer: 1,
    explanation: '`switch` allows multiple branches based on case values.'
  },
  {
    question: 'What is the output?\nint x = 5;\nif (x > 2)\n  System.out.print("Hi");\nelse\n  System.out.print("Bye");',
    options: ['Hi', 'Bye', 'HiBye', 'Nothing'],
    answer: 0,
    explanation: 'Since x > 2, the condition is true, so "Hi" is printed.'
  },
  {
    question: 'Which keyword is used to skip the current iteration in a loop?',
    options: ['break', 'continue', 'exit', 'return'],
    answer: 1,
    explanation: '`continue` skips the remaining loop body and proceeds to the next iteration.'
  },
  {
    question: 'What is the output of:\nint x = 10;\nif (x < 5)\n  System.out.print("A");\nelse if (x < 15)\n  System.out.print("B");\nelse\n  System.out.print("C");',
    options: ['A', 'B', 'C', 'Nothing'],
    answer: 1,
    explanation: 'x = 10 satisfies the second condition (x < 15), so "B" is printed.'
  },
  {
    question: 'Which loop is guaranteed to execute at least once?',
    options: ['for', 'while', 'do-while', 'None'],
    answer: 2,
    explanation: 'The `do-while` loop executes the block before checking the condition.'
  }
],
'Class and Object': [
  {
    question: 'Which keyword is used to create a class in Java?',
    options: ['class', 'Class', 'struct', 'define'],
    answer: 0,
    explanation: 'In Java, `class` is used to declare a class.'
  },
  {
    question: 'What is the output?\nclass Test {\n  int x = 5;\n  public static void main(String[] args) {\n    Test obj = new Test();\n    System.out.print(obj.x);\n  }\n}',
    options: ['5', '0', 'Error', 'null'],
    answer: 0,
    explanation: 'An object `obj` is created and x = 5 is printed.'
  },
  {
    question: 'What is the term for combining data and behavior in one unit in Java?',
    options: ['Polymorphism', 'Encapsulation', 'Abstraction', 'Inheritance'],
    answer: 1,
    explanation: 'Encapsulation is achieved by combining data and methods in a class.'
  },
  {
    question: 'Which of the following correctly creates an object of class A?',
    options: ['A obj = new A();', 'A obj();', 'A = new obj();', 'object A = new A();'],
    answer: 0,
    explanation: 'The syntax `A obj = new A();` correctly creates an object.'
  },
  {
    question: 'What is the default access modifier for a class variable?',
    options: ['private', 'protected', 'default (package-private)', 'public'],
    answer: 2,
    explanation: 'If no access modifier is specified, it defaults to package-private.'
  },
  {
    question: 'Can we create multiple objects of the same class in Java?',
    options: ['Yes', 'No', 'Only one', 'Depends on constructor'],
    answer: 0,
    explanation: 'You can create as many objects of a class as needed.'
  },
  {
    question: 'Which of the following best describes a class in Java?',
    options: ['Instance of an object', 'Blueprint for objects', 'Running program', 'Data type'],
    answer: 1,
    explanation: 'A class is a blueprint from which objects are created.'
  },
  {
    question: 'What is the output?\nclass A {\n  int a = 10;\n}\nclass B {\n  public static void main(String[] args) {\n    A obj = new A();\n    System.out.print(obj.a);\n  }\n}',
    options: ['10', '0', 'Error', 'null'],
    answer: 0,
    explanation: 'The class A has variable `a = 10` which is accessed via object `obj`.'
  },
  {
    question: 'Which of these is not true about objects?',
    options: ['Objects are instances of classes', 'Objects occupy memory', 'Objects can be created without classes', 'Objects can have methods and fields'],
    answer: 2,
    explanation: 'Objects must be created from a class; cannot exist independently.'
  },
  {
    question: 'Tricky: Which statement is true?\nclass X {}\nclass Y {}\nX obj1 = new X();\nY obj2 = obj1;',
    options: ['Compiles fine', 'Runtime error', 'Compile-time error', 'Syntax error'],
    answer: 2,
    explanation: 'Incompatible types: `Y` cannot be assigned from `X` without inheritance.'
  }
],
'Methods': [
  {
    question: 'What is a method in Java?',
    options: ['A variable', 'A class', 'A block of code that performs a task', 'A data type'],
    answer: 2,
    explanation: 'A method is a block of code that performs a specific task when called.'
  },
  {
    question: 'Which keyword is used to define a method in Java?',
    options: ['define', 'void', 'method', 'function'],
    answer: 1,
    explanation: '`void` is used to define a method that doesn’t return any value.'
  },
  {
    question: 'What is the return type of a method that does not return a value?',
    options: ['null', 'int', 'void', 'empty'],
    answer: 2,
    explanation: '`void` specifies that the method does not return a value.'
  },
  {
    question: 'What is the output?\nclass A {\n  static void greet() {\n    System.out.print("Hello");\n  }\n  public static void main(String[] args) {\n    greet();\n  }\n}',
    options: ['Hello', 'Error', 'greet', 'Nothing'],
    answer: 0,
    explanation: 'The `greet()` method is called from the main method and prints "Hello".'
  },
  {
    question: 'What will be the output?\nint sum(int a, int b) {\n  return a + b;\n}\nSystem.out.print(sum(2, 3));',
    options: ['2+3', '5', 'sum(2, 3)', 'Error'],
    answer: 3,
    explanation: 'This code causes an error because the `sum` method is not declared as static.'
  },
  {
    question: 'Which of the following is the correct way to declare a method in Java?',
    options: ['function add() : int', 'int add() {}', 'int add = function() {}', 'method int add()'],
    answer: 1,
    explanation: 'Methods are declared using return type, name, and parameter list: `int add() {}`'
  },
  {
    question: 'Which of these is not true about methods in Java?',
    options: ['Methods can have parameters', 'Methods can return values', 'Methods cannot be overloaded', 'Methods can be static'],
    answer: 2,
    explanation: 'Methods **can** be overloaded; this statement is false.'
  },
  {
    question: 'What is method signature in Java?',
    options: ['Method name only', 'Name + return type', 'Name + parameters', 'Return type + body'],
    answer: 2,
    explanation: 'Method signature includes method name and parameter list.'
  },
  {
    question: 'Tricky: What is the result?\nclass A {\n  int show() {\n    return 5;\n  }\n  double show() {\n    return 6.0;\n  }\n}',
    options: ['5', '6.0', 'Compile-time error', 'Runtime error'],
    answer: 2,
    explanation: 'Compile-time error due to same method name with only return type change, which is not allowed.'
  },
  {
    question: 'What is method overloading?',
    options: ['Writing same method in two classes', 'Using one method in multiple files', 'Defining multiple methods with same name but different parameters', 'Calling a method from another class'],
    answer: 2,
    explanation: 'Method overloading allows multiple methods with the same name but different parameter types or counts.'
  }
],
'MethodOverloading and MethodOverriding': [
  {
    question: 'What is method overloading in Java?',
    options: [
      'Creating multiple methods with the same name and same parameters',
      'Creating multiple methods with the same name but different parameter lists',
      'Redefining a method in a subclass',
      'Calling a method from another class'
    ],
    answer: 1,
    explanation: 'Method overloading allows methods with the same name but different parameters in the same class.'
  },
  {
    question: 'What is method overriding in Java?',
    options: [
      'Creating a method in the same class',
      'Using the same method name with different return type',
      'Redefining a superclass method in a subclass',
      'Overwriting a variable'
    ],
    answer: 2,
    explanation: 'Method overriding means redefining a method from a superclass in a subclass.'
  },
  {
    question: 'Which keyword is used to indicate method overriding in Java?',
    options: ['this', 'extends', 'super', '@Override'],
    answer: 3,
    explanation: '@Override is an annotation used to ensure a method is correctly overriding a superclass method.'
  },
  {
    question: 'Which of the following is true about method overloading?',
    options: [
      'Overloaded methods must have the same number of parameters',
      'Overloaded methods must have different return types',
      'Overloaded methods must have different parameter types or counts',
      'Overloaded methods cannot be static'
    ],
    answer: 2,
    explanation: 'In method overloading, the method name is the same, but parameters must differ in number or type.'
  },
  {
    question: 'Tricky: What will be the output?\nclass Test {\n  void show(int a) { System.out.println("int"); }\n  void show(double a) { System.out.println("double"); }\n  public static void main(String[] args) {\n    new Test().show(5.5f);\n  }\n}',
    options: ['int', 'double', 'float', 'Error'],
    answer: 1,
    explanation: 'float is implicitly converted to double, so "double" is printed.'
  },
  {
    question: 'Can a static method be overridden?',
    options: ['Yes', 'No', 'Only in interfaces', 'Only final methods can be overridden'],
    answer: 1,
    explanation: 'Static methods cannot be overridden, they can only be hidden.'
  },
  {
    question: 'What is the output?\nclass A {\n  void display() { System.out.println("A"); }\n}\nclass B extends A {\n  void display() { System.out.println("B"); }\n}\npublic class Test {\n  public static void main(String[] args) {\n    A obj = new B();\n    obj.display();\n  }\n}',
    options: ['A', 'B', 'AB', 'Compile Error'],
    answer: 1,
    explanation: 'Dynamic method dispatch leads to calling B’s overridden display method.'
  },
  {
    question: 'What happens if you change only the return type while overloading methods?',
    options: ['It works', 'It causes runtime error', 'It causes compile-time error', 'It overrides the method'],
    answer: 2,
    explanation: 'Changing only the return type is not valid for overloading; compile-time error occurs.'
  },
  {
    question: 'Can private methods be overridden in Java?',
    options: ['Yes', 'No', 'Only if declared final', 'Only in the same package'],
    answer: 1,
    explanation: 'Private methods are not visible to subclasses, so they cannot be overridden.'
  },
  {
    question: 'Tricky: What is the output?\nclass A {\n  void test() { System.out.println("A"); }\n}\nclass B extends A {\n  void test(int a) { System.out.println("B"); }\n}\npublic class Main {\n  public static void main(String[] args) {\n    new B().test();\n  }\n}',
    options: ['A', 'B', 'Error', 'Nothing'],
    answer: 0,
    explanation: 'Method test() in A is inherited in B. test(int) is overloaded, not overridden.'
  }
],
'Static Keyword': [
  {
    question: 'What does the `static` keyword mean in Java?',
    options: [
      'It creates a new instance of a class',
      'It allows a method or variable to belong to the class rather than an instance',
      'It prevents a method from being overridden',
      'It makes a variable constant'
    ],
    answer: 1,
    explanation: 'Static methods and variables belong to the class, not instances of the class.'
  },
  {
    question: 'Which of the following can be declared as static?',
    options: ['Local variable', 'Class', 'Constructor', 'Method'],
    answer: 3,
    explanation: 'Methods can be declared static to be called without creating an object.'
  },
  {
    question: 'Can a static method access instance variables directly?',
    options: ['Yes', 'No', 'Only if final', 'Only with this keyword'],
    answer: 1,
    explanation: 'Static methods cannot access instance variables directly because they do not belong to any object.'
  },
  {
    question: 'What is the output?\nclass Test {\n  static int count = 0;\n  Test() { count++; }\n  public static void main(String[] args) {\n    new Test(); new Test();\n    System.out.println(Test.count);\n  }\n}',
    options: ['0', '1', '2', 'Compilation error'],
    answer: 2,
    explanation: 'The static variable count is shared across all instances. It is incremented twice.'
  },
  {
    question: 'Can a constructor be static in Java?',
    options: ['Yes', 'No', 'Only in abstract classes', 'Only in inner classes'],
    answer: 1,
    explanation: 'Constructors cannot be static because they are used to create objects.'
  },
  {
    question: 'Can a static method be overridden?',
    options: ['Yes', 'No', 'Only if final', 'Only in abstract class'],
    answer: 1,
    explanation: 'Static methods are not overridden; they are hidden if re-declared in a subclass.'
  },
  {
    question: 'Tricky: What will be the output?\nclass A {\n  static void display() { System.out.println("Static A"); }\n}\nclass B extends A {\n  static void display() { System.out.println("Static B"); }\n}\npublic class Test {\n  public static void main(String[] args) {\n    A obj = new B();\n    obj.display();\n  }\n}',
    options: ['Static A', 'Static B', 'Compile Error', 'Runtime Error'],
    answer: 0,
    explanation: 'Static methods are resolved at compile time based on reference type, not object type.'
  },
  {
    question: 'What happens if you try to use `this` in a static method?',
    options: ['It works normally', 'It refers to the class object', 'Compile-time error', 'Runtime exception'],
    answer: 2,
    explanation: '`this` refers to an object. Static methods are not associated with objects.'
  },
  {
    question: 'Can a static method call a non-static method directly?',
    options: ['Yes', 'No', 'Only if private', 'Only if final'],
    answer: 1,
    explanation: 'A static method cannot call a non-static method directly as it lacks an instance reference.'
  },
  {
    question: 'Tricky: What is the output?\nclass Test {\n  static int x = 10;\n  static { x += 5; }\n  public static void main(String[] args) {\n    System.out.println("x = " + x);\n  }\n}',
    options: ['x = 10', 'x = 5', 'x = 15', 'Compile Error'],
    answer: 2,
    explanation: 'Static block executes before the main method, modifying the static variable.'
  }
],
'This Keyword': [
  {
    question: 'What does the `this` keyword refer to in Java?',
    options: [
      'The parent class',
      'The current class',
      'The current object',
      'A global variable'
    ],
    answer: 2,
    explanation: '`this` refers to the current object instance of the class.'
  },
  {
    question: 'Which of the following is a valid use of `this` keyword?',
    options: [
      'To refer to a global variable',
      'To call another constructor in the same class',
      'To access static methods',
      'To create an object'
    ],
    answer: 1,
    explanation: 'The `this()` syntax can be used to call another constructor in the same class.'
  },
  {
    question: 'Can `this` be used inside static methods?',
    options: ['Yes', 'No', 'Only if final', 'Only in inner classes'],
    answer: 1,
    explanation: '`this` cannot be used in static methods because they don’t belong to any object.'
  },
  {
    question: 'Tricky: What is the output?\nclass A {\n  int x = 10;\n  void display() {\n    int x = 20;\n    System.out.println(this.x);\n  }\n  public static void main(String[] args) {\n    new A().display();\n  }\n}',
    options: ['10', '20', '0', 'Compile-time error'],
    answer: 0,
    explanation: '`this.x` refers to the instance variable x, not the local one.'
  },
  {
    question: 'What is the purpose of using `this.variableName` in constructors?',
    options: [
      'To call another constructor',
      'To distinguish between local and instance variables',
      'To call superclass methods',
      'To define new variables'
    ],
    answer: 1,
    explanation: '`this.variableName` differentiates instance variables from constructor parameters with same names.'
  },
  {
    question: 'Can `this` be passed as a parameter to a method?',
    options: ['Yes', 'No', 'Only to static methods', 'Only to final methods'],
    answer: 0,
    explanation: 'Yes, `this` can be passed as an argument in method or constructor calls.'
  },
  {
    question: 'What is the output?\nclass Test {\n  Test get() { return this; }\n  void msg() { System.out.println("Hello"); }\n  public static void main(String[] args) {\n    new Test().get().msg();\n  }\n}',
    options: ['Hello', 'Compile error', 'Runtime error', 'Nothing prints'],
    answer: 0,
    explanation: '`this` returns the current object; hence `msg()` can be chained and executed.'
  },
  {
    question: 'Tricky: What will happen?\nclass Demo {\n  Demo() {\n    System.out.println(this);\n  }\n  public static void main(String[] args) {\n    Demo obj = new Demo();\n    System.out.println(obj);\n  }\n}',
    options: ['Different references printed', 'Same reference printed twice', 'Null printed', 'Compile error'],
    answer: 1,
    explanation: '`this` in constructor and the object reference refer to the same memory address.'
  },
  {
    question: 'What is the output?\nclass Demo {\n  int a;\n  Demo(int a) {\n    this.a = a;\n  }\n  void show() {\n    System.out.println(a);\n  }\n  public static void main(String[] args) {\n    new Demo(5).show();\n  }\n}',
    options: ['0', '5', 'Compile Error', 'Null'],
    answer: 1,
    explanation: 'Constructor uses `this.a` to set the value of the instance variable correctly.'
  },
  {
    question: 'Tricky: What is the output?\nclass Test {\n  void m1(Test obj) {\n    System.out.println("m1 method called");\n  }\n  void m2() {\n    m1(this);\n  }\n  public static void main(String[] args) {\n    new Test().m2();\n  }\n}',
    options: ['Compile Error', 'Runtime Error', 'm1 method called', 'Nothing prints'],
    answer: 2,
    explanation: 'The `this` keyword is passed as an argument, calling `m1()` method successfully.'
  }
],
'Constructor': [
  {
    question: 'Which of the following is true about constructors in Java?',
    options: [
      'Constructors must have a return type',
      'Constructors are called explicitly',
      'Constructors can be overloaded',
      'Constructors are inherited'
    ],
    answer: 2,
    explanation: 'Constructors can be overloaded to have different parameter lists.'
  },
  {
    question: 'What is the purpose of a constructor in Java?',
    options: [
      'To destroy an object',
      'To initialize an object',
      'To copy an object',
      'To import a package'
    ],
    answer: 1,
    explanation: 'Constructors are used to initialize objects when they are created.'
  },
  {
    question: 'Which of these is the default constructor?',
    options: [
      'Test(int a)',
      'void Test()',
      'Test()',
      'static Test()'
    ],
    answer: 2,
    explanation: 'Test() with no parameters and no return type is the default constructor.'
  },
  {
    question: 'Tricky: What will be the output?\nclass A {\n  A() {\n    System.out.println("A Constructor");\n  }\n  public static void main(String[] args) {\n    A obj = new A();\n  }\n}',
    options: ['Compile error', 'Runtime error', 'No output', 'A Constructor'],
    answer: 3,
    explanation: 'The default constructor prints "A Constructor" when the object is created.'
  },
  {
    question: 'What happens if no constructor is defined in a Java class?',
    options: [
      'Compiler throws an error',
      'Object can’t be created',
      'Compiler provides a default constructor',
      'Object is abstract'
    ],
    answer: 2,
    explanation: 'The compiler provides a default no-argument constructor if none is defined.'
  },
  {
    question: 'Can a constructor be private?',
    options: ['Yes', 'No', 'Only in abstract classes', 'Only in static classes'],
    answer: 0,
    explanation: 'Constructors can be private to restrict object creation (e.g., Singleton pattern).'
  },
  {
    question: 'Tricky: What is the output?\nclass Test {\n  Test() {\n    this(5);\n  }\n  Test(int x) {\n    System.out.println("x = " + x);\n  }\n  public static void main(String[] args) {\n    new Test();\n  }\n}',
    options: ['x = 5', 'Compile error', 'x = 0', 'Nothing'],
    answer: 0,
    explanation: 'The no-arg constructor calls the parameterized one using `this(5)`, printing x = 5.'
  },
  {
    question: 'Can constructors be overloaded in Java?',
    options: ['Yes', 'No', 'Only static constructors can be overloaded', 'Only default constructors can be overloaded'],
    answer: 0,
    explanation: 'Yes, constructors can be overloaded with different parameter types or counts.'
  },
  {
    question: 'Which statement is used to call another constructor from a constructor in the same class?',
    options: ['super()', 'this()', 'new()', 'call()'],
    answer: 1,
    explanation: '`this()` is used to call another constructor within the same class.'
  },
  {
    question: 'Tricky: What happens if `this()` is not the first statement in a constructor?',
    options: ['Compiler moves it automatically', 'It causes a compile-time error', 'It is ignored', 'It works normally'],
    answer: 1,
    explanation: '`this()` must be the first statement in a constructor; otherwise, it causes a compile-time error.'
  }
],
'Inheritance': [
  {
    question: 'Which keyword is used to inherit a class in Java?',
    options: ['this', 'super', 'extends', 'implements'],
    answer: 2,
    explanation: 'The `extends` keyword is used to inherit a class in Java.'
  },
  {
    question: 'What type of inheritance is not supported in Java?',
    options: ['Single', 'Multilevel', 'Hierarchical', 'Multiple'],
    answer: 3,
    explanation: 'Java does not support multiple inheritance with classes to avoid ambiguity.'
  },
  {
    question: 'Which class is the parent of all classes in Java?',
    options: ['Object', 'System', 'Main', 'Base'],
    answer: 0,
    explanation: 'All classes in Java implicitly inherit from the `Object` class.'
  },
  {
    question: 'Tricky: What is the output?\nclass A {\n  A() { System.out.println("A"); }\n}\nclass B extends A {\n  B() { System.out.println("B"); }\n}\nclass Test {\n  public static void main(String[] args) {\n    new B();\n  }\n}',
    options: ['B', 'A B', 'AB', 'Error'],
    answer: 1,
    explanation: 'Superclass constructor is called first, so output is "A B".'
  },
  {
    question: 'What is method overriding in inheritance?',
    options: [
      'Changing return type of parent method',
      'Creating a new method in child',
      'Providing specific implementation in child class',
      'Using method with same name and parameters in unrelated class'
    ],
    answer: 2,
    explanation: 'Method overriding allows a subclass to provide a specific implementation of a method already defined in its superclass.'
  },
  {
    question: 'Which keyword is used to access superclass methods and constructors?',
    options: ['this', 'super', 'parent', 'base'],
    answer: 1,
    explanation: 'The `super` keyword is used to call superclass methods and constructors.'
  },
  {
    question: 'Can a subclass access private members of the parent class?',
    options: ['Yes', 'No', 'Only in same package', 'Only with public modifier'],
    answer: 1,
    explanation: 'Private members are not accessible directly in the subclass.'
  },
  {
    question: 'Tricky: What is the output?\nclass A {\n  int x = 10;\n}\nclass B extends A {\n  int x = 20;\n  void print() {\n    System.out.println(super.x);\n  }\n  public static void main(String[] args) {\n    new B().print();\n  }\n}',
    options: ['10', '20', '0', 'Compile error'],
    answer: 0,
    explanation: '`super.x` refers to the superclass variable `x` which is 10.'
  },
  {
    question: 'What is true about constructors in inheritance?',
    options: [
      'Child class constructor is called first',
      'Only parent constructor is invoked',
      'Parent constructor is called before child constructor',
      'Constructors are not called automatically'
    ],
    answer: 2,
    explanation: 'The parent constructor is always called first before the child constructor.'
  },
  {
    question: 'Tricky: Which of the following is an example of hierarchical inheritance?',
    options: [
      'A -> B -> C',
      'A -> B, A -> C',
      'A -> B, B -> C',
      'A -> A',
    ],
    answer: 1,
    explanation: 'Hierarchical inheritance means one class is inherited by multiple subclasses.'
  }
],
'Packages': [
  {
    question: 'What is a package in Java?',
    options: [
      'A type of interface',
      'A collection of classes and interfaces',
      'A Java keyword',
      'An IDE feature'
    ],
    answer: 1,
    explanation: 'A package is a namespace that organizes a set of related classes and interfaces.'
  },
  {
    question: 'Which keyword is used to define a package?',
    options: ['package', 'import', 'namespace', 'module'],
    answer: 0,
    explanation: 'The `package` keyword is used to declare the package a class belongs to.'
  },
  {
    question: 'What is the default package in Java?',
    options: ['java.lang', 'user defined', 'unnamed package', 'system package'],
    answer: 2,
    explanation: 'When no package is specified, the class belongs to the unnamed (default) package.'
  },
  {
    question: 'Tricky: Which import statement is correct to import all classes from a package?',
    options: [
      'import java.util.*;',
      'import java.util.all;',
      'include java.util.*;',
      'use java.util.*;'
    ],
    answer: 0,
    explanation: '`import java.util.*;` imports all public classes and interfaces from the `java.util` package.'
  },
  {
    question: 'What happens if two packages have classes with the same name?',
    options: [
      'Compilation error',
      'Runtime error',
      'Need to use fully qualified name',
      'Java will auto-resolve conflict'
    ],
    answer: 2,
    explanation: 'When class names conflict, we must use the fully qualified class name (e.g., `package1.ClassA`).'
  },
  {
    question: 'Tricky: What is the output?\npackage p1;\nclass A { void show() { System.out.println("A"); } }\npackage p2;\nimport p1.*;\nclass B { public static void main(String[] args) { new A().show(); } }',
    options: ['A', 'Compile error', 'Runtime error', 'No output'],
    answer: 1,
    explanation: 'Packages must be declared at the top of the file and file structure must match. Also, classes should be public to access from another package.'
  },
  {
    question: 'What is the access level of classes in the same package without any modifier?',
    options: ['private', 'public', 'protected', 'default'],
    answer: 3,
    explanation: 'Classes with no access modifier have default access, meaning they are accessible only within the same package.'
  },
  {
    question: 'Which package is automatically imported in every Java program?',
    options: ['java.io', 'java.util', 'java.lang', 'java.net'],
    answer: 2,
    explanation: 'The `java.lang` package is automatically imported in all Java programs.'
  },
  {
    question: 'Can we create our own packages in Java?',
    options: ['Yes', 'No', 'Only in JDK', 'Only using IDE'],
    answer: 0,
    explanation: 'Yes, developers can create their own custom packages using the `package` keyword.'
  },
  {
    question: 'Tricky: Which of the following is the correct way to compile a class in a package?',
    options: [
      'javac MyClass.java',
      'javac -d . MyClass.java',
      'java MyClass',
      'javac -package MyClass.java'
    ],
    answer: 1,
    explanation: 'The `-d` option in `javac -d . MyClass.java` creates the directory structure matching the package declaration.'
  }
],
'Final Keyword': [
  {
    question: 'What is the use of the `final` keyword in Java?',
    options: [
      'To define a method that can be overridden',
      'To prevent inheritance',
      'To allow runtime polymorphism',
      'To declare static variables'
    ],
    answer: 1,
    explanation: 'The `final` keyword is used to prevent method overriding and inheritance when used with classes or methods.'
  },
  {
    question: 'What happens when you declare a variable as `final`?',
    options: [
      'It can’t be initialized',
      'Its value can’t be changed once assigned',
      'It becomes static',
      'It can only be used in main method'
    ],
    answer: 1,
    explanation: '`final` variables become constants after initialization and cannot be reassigned.'
  },
  {
    question: 'Can a final method be overridden?',
    options: ['Yes', 'No', 'Only in subclasses', 'Only if it’s abstract'],
    answer: 1,
    explanation: 'Final methods cannot be overridden by subclasses.'
  },
  {
    question: 'Tricky: What is the result of the following code?\nfinal int x = 10;\nx = 20;',
    options: ['20', '10', 'Compile-time error', 'Runtime exception'],
    answer: 2,
    explanation: 'Reassigning a final variable causes a compile-time error.'
  },
  {
    question: 'Can a constructor be declared final in Java?',
    options: ['Yes', 'No', 'Only static constructors', 'Only with abstract class'],
    answer: 1,
    explanation: 'Constructors cannot be declared final because they are never inherited.'
  },
  {
    question: 'What does it mean if a class is declared final?',
    options: [
      'It cannot be instantiated',
      'It cannot be extended',
      'It must be abstract',
      'It must have a main method'
    ],
    answer: 1,
    explanation: 'A final class cannot be subclassed, ensuring its methods cannot be overridden.'
  },
  {
    question: 'Tricky: What will be the output?\nclass A {\n final int x;\n A() {\n x = 5;\n }\n}',
    options: ['Compile-time error', 'x = 0', 'x = 5', 'Runtime exception'],
    answer: 2,
    explanation: 'Final variables can be initialized in constructors, so this code is valid.'
  },
  {
    question: 'Can a final variable be initialized in a static block?',
    options: ['Yes', 'No', 'Only for strings', 'Only in interfaces'],
    answer: 0,
    explanation: 'Final variables can be initialized in a static block if they are static themselves.'
  },
  {
    question: 'Can a blank final variable be assigned multiple times?',
    options: ['Yes', 'No', 'Only in static block', 'Only in constructor'],
    answer: 1,
    explanation: 'A blank final variable can only be assigned once, either in the constructor or a static block.'
  },
  {
    question: 'What is the result of trying to inherit a final class?',
    options: [
      'Compilation error',
      'Runtime exception',
      'The subclass will work but without overriding',
      'The final keyword will be ignored'
    ],
    answer: 0,
    explanation: 'Trying to inherit a final class results in a compile-time error.'
  }
],
'Abstract Keyword': [
  {
    question: 'What is the purpose of the `abstract` keyword in Java?',
    options: [
      'To define a constant value',
      'To prevent inheritance',
      'To define a method without implementation',
      'To overload methods'
    ],
    answer: 2,
    explanation: 'The `abstract` keyword is used to define methods without implementation and classes that cannot be instantiated.'
  },
  {
    question: 'Can we create an object of an abstract class?',
    options: ['Yes', 'No', 'Only using static methods', 'Only using reflection'],
    answer: 1,
    explanation: 'Abstract classes cannot be instantiated directly.'
  },
  {
    question: 'What happens if a class has an abstract method but is not declared abstract?',
    options: [
      'It compiles normally',
      'It throws a runtime error',
      'It causes a compile-time error',
      'It becomes a final class automatically'
    ],
    answer: 2,
    explanation: 'If a class contains an abstract method, it must be declared abstract.'
  },
  {
    question: 'Tricky: Can an abstract class have a constructor?',
    options: ['Yes', 'No', 'Only static constructors', 'Only private constructors'],
    answer: 0,
    explanation: 'Abstract classes can have constructors which are called when a subclass object is created.'
  },
  {
    question: 'Can abstract classes contain implemented methods?',
    options: ['Yes', 'No', 'Only in static methods', 'Only if marked final'],
    answer: 0,
    explanation: 'Abstract classes can have both abstract and non-abstract methods.'
  },
  {
    question: 'What will happen if you don’t implement all abstract methods in a subclass?',
    options: [
      'The subclass becomes abstract',
      'The program throws an exception',
      'Compilation fails',
      'The methods are inherited automatically'
    ],
    answer: 0,
    explanation: 'If not all abstract methods are implemented, the subclass must also be declared abstract.'
  },
  {
    question: 'Which of these is true about abstract classes?',
    options: [
      'They can be instantiated directly',
      'They cannot have instance variables',
      'They can have static methods',
      'They cannot inherit other classes'
    ],
    answer: 2,
    explanation: 'Abstract classes can have static methods like any other class.'
  },
  {
    question: 'Tricky: Which of these is valid?\nabstract class A {\n abstract void show();\n void display() {}\n}',
    options: ['Valid', 'Invalid - abstract must not have implemented methods', 'Invalid - abstract method must have body', 'Invalid - must be final'],
    answer: 0,
    explanation: 'Abstract classes can have both abstract and concrete (implemented) methods.'
  },
  {
    question: 'Can an abstract method be static?',
    options: ['Yes', 'No', 'Only in final classes', 'Only with interface'],
    answer: 1,
    explanation: 'Abstract methods cannot be static because static methods belong to the class and cannot be overridden.'
  },
  {
    question: 'Tricky: What happens if we declare a class abstract but don’t include any abstract methods?',
    options: [
      'Compile-time error',
      'It becomes an interface',
      'It compiles and works as an abstract class',
      'It throws an exception at runtime'
    ],
    answer: 2,
    explanation: 'It is valid to declare a class abstract even without abstract methods.'
  }
],
'Interface': [
  {
    question: 'What is the purpose of an interface in Java?',
    options: [
      'To implement multiple inheritance',
      'To create private methods',
      'To implement constructors',
      'To prevent overriding'
    ],
    answer: 0,
    explanation: 'Interfaces allow multiple inheritance by letting a class implement multiple interfaces.'
  },
  {
    question: 'Can an interface have implemented methods in Java?',
    options: ['No', 'Yes, from Java 8 onwards', 'Only in abstract classes', 'Only if static'],
    answer: 1,
    explanation: 'From Java 8, interfaces can have default and static methods with implementations.'
  },
  {
    question: 'What is the default modifier for interface methods before Java 8?',
    options: ['private', 'protected', 'abstract', 'static'],
    answer: 2,
    explanation: 'All interface methods were implicitly abstract and public before Java 8.'
  },
  {
    question: 'Can an interface extend another interface?',
    options: ['No', 'Yes, but only one', 'Yes, multiple', 'Only abstract interfaces'],
    answer: 2,
    explanation: 'Interfaces can extend multiple interfaces.'
  },
  {
    question: 'Can an interface extend a class in Java?',
    options: ['Yes', 'No', 'Only abstract classes', 'Only final classes'],
    answer: 1,
    explanation: 'An interface can only extend another interface, not a class.'
  },
  {
    question: 'Tricky: What is the result of this?\ninterface A { void show(); }\nclass B implements A { }\n',
    options: [
      'Compile error: class B must be abstract',
      'Compile error: method show() not defined',
      'Compiles successfully',
      'Runtime error'
    ],
    answer: 1,
    explanation: 'Class B must implement the method show() from interface A or be declared abstract.'
  },
  {
    question: 'Which of these can be included in a Java interface?',
    options: ['Instance variables', 'Constructors', 'Static methods (Java 8+)', 'Private methods only'],
    answer: 2,
    explanation: 'From Java 8 onwards, interfaces can include static methods.'
  },
  {
    question: 'Which keyword is used to implement an interface?',
    options: ['extends', 'inherits', 'implements', 'interface'],
    answer: 2,
    explanation: 'The keyword `implements` is used by a class to implement an interface.'
  },
  {
    question: 'Tricky: What is the output?\ninterface A { default void test() { System.out.println("Test"); } }\nclass B implements A {}\nnew B().test();',
    options: ['Error', 'No output', 'Test', 'NullPointerException'],
    answer: 2,
    explanation: 'From Java 8 onwards, default methods can be called directly using implementing class instances.'
  },
  {
    question: 'Which of the following is false about interfaces?',
    options: [
      'Interfaces can be used to achieve abstraction',
      'Interfaces can have private methods from Java 9',
      'Interfaces can be instantiated directly',
      'A class can implement multiple interfaces'
    ],
    answer: 2,
    explanation: 'Interfaces cannot be instantiated directly.'
  }
],
'Exception Handling': [
  {
    question: 'Which class is the superclass of all exceptions in Java?',
    options: ['Throwable', 'Exception', 'Error', 'RuntimeException'],
    answer: 0,
    explanation: 'Throwable is the superclass of all errors and exceptions in Java.'
  },
  {
    question: 'What is the difference between checked and unchecked exceptions?',
    options: [
      'Checked exceptions are ignored by the compiler',
      'Unchecked exceptions must be declared in the method signature',
      'Checked exceptions are checked at compile time',
      'Unchecked exceptions can only occur in loops'
    ],
    answer: 2,
    explanation: 'Checked exceptions are checked at compile time, while unchecked are not.'
  },
  {
    question: 'Which keyword is used to manually throw an exception in Java?',
    options: ['throws', 'throw', 'try', 'catch'],
    answer: 1,
    explanation: 'The `throw` keyword is used to explicitly throw an exception.'
  },
  {
    question: 'Which block is always executed whether an exception is thrown or not?',
    options: ['try', 'catch', 'throw', 'finally'],
    answer: 3,
    explanation: 'The `finally` block always executes after try or catch, even if an exception occurs.'
  },
  {
    question: 'What happens if an exception is not caught in Java?',
    options: [
      'It is silently ignored',
      'It causes a syntax error',
      'It terminates the program',
      'It’s converted into a warning'
    ],
    answer: 2,
    explanation: 'An uncaught exception will terminate the program.'
  },
  {
    question: 'Tricky: What will be the output?\ntry {\n  int x = 5 / 0;\n} catch (ArithmeticException e) {\n  System.out.println("Error");\n} finally {\n  System.out.println("Finally");\n}',
    options: ['Error', 'Finally', 'ErrorFinally', 'Compilation Error'],
    answer: 2,
    explanation: 'Both the catch and finally blocks will execute.'
  },
  {
    question: 'Which exception is thrown when an array is accessed with an illegal index?',
    options: ['IllegalArgumentException', 'IndexOutOfBoundsException', 'NullPointerException', 'ArrayStoreException'],
    answer: 1,
    explanation: 'IndexOutOfBoundsException is thrown when accessing an array with an invalid index.'
  },
  {
    question: 'What does the "throws" keyword indicate?',
    options: [
      'That a method handles exceptions',
      'That a method may throw exceptions',
      'That the JVM handles exceptions',
      'None of the above'
    ],
    answer: 1,
    explanation: '`throws` keyword is used to declare exceptions a method might throw.'
  },
  {
    question: 'Tricky: What is the output?\ntry {\n  return;\n} finally {\n  System.out.println("Finally");\n}',
    options: ['Nothing', 'Return', 'Finally', 'Compilation Error'],
    answer: 2,
    explanation: 'Even if return is called, finally will still execute.'
  },
  {
    question: 'Can we catch multiple exceptions in a single catch block?',
    options: ['No', 'Only in Java 6', 'Yes, from Java 7 onwards using |', 'Only for unchecked exceptions'],
    answer: 2,
    explanation: 'From Java 7, we can catch multiple exceptions in a single catch block using the pipe (|) symbol.'
  }
],
'Thread Concept': [
  {
    question: 'Which interface must be implemented to create a thread in Java?',
    options: ['Runnable', 'Threadable', 'Callable', 'Executor'],
    answer: 0,
    explanation: 'Runnable is the functional interface that should be implemented to define a thread’s task.'
  },
  {
    question: 'Which method is used to start a thread execution?',
    options: ['run()', 'execute()', 'start()', 'init()'],
    answer: 2,
    explanation: 'The `start()` method creates a new call stack and starts the thread.'
  },
  {
    question: 'What will happen if we call the run() method directly instead of start()?',
    options: [
      'Thread will not execute',
      'It runs like a normal method, not a thread',
      'It throws an exception',
      'Creates a new thread'
    ],
    answer: 1,
    explanation: 'Calling run() directly will execute it in the current thread like a normal method.'
  },
  {
    question: 'Which method makes a thread wait for another thread to finish?',
    options: ['sleep()', 'yield()', 'join()', 'wait()'],
    answer: 2,
    explanation: 'join() causes the current thread to pause until the target thread completes.'
  },
  {
    question: 'Which method temporarily pauses a thread for a given time?',
    options: ['pause()', 'stop()', 'sleep()', 'wait()'],
    answer: 2,
    explanation: 'sleep() pauses the thread for the specified number of milliseconds.'
  },
  {
    question: 'Tricky: What is the output?\nThread t = new Thread(() -> System.out.print("A"));\nt.run();\nt.start();',
    options: ['AA', 'A', 'Compilation Error', 'Exception at runtime'],
    answer: 0,
    explanation: 'run() executes normally and start() starts a new thread – both will print "A".'
  },
  {
    question: 'What is thread synchronization in Java?',
    options: [
      'Allowing multiple threads to access all methods',
      'Preventing thread execution',
      'Controlling access to shared resources',
      'Disabling all threads'
    ],
    answer: 2,
    explanation: 'Synchronization ensures that only one thread can access a shared resource at a time.'
  },
  {
    question: 'Which keyword is used to define a synchronized method or block?',
    options: ['sync', 'threadsafe', 'synchronized', 'lock'],
    answer: 2,
    explanation: 'The `synchronized` keyword is used to control access to critical sections.'
  },
  {
    question: 'What is the difference between sleep() and wait()?',
    options: [
      'wait() releases the lock, sleep() does not',
      'sleep() releases the lock, wait() does not',
      'Both are same',
      'sleep() works only with synchronized blocks'
    ],
    answer: 0,
    explanation: 'wait() releases the monitor lock while sleep() retains it.'
  },
  {
    question: 'Which method causes the currently executing thread to temporarily pause and allow other threads to execute?',
    options: ['sleep()', 'yield()', 'join()', 'wait()'],
    answer: 1,
    explanation: 'yield() pauses the current thread and gives a chance to other threads of the same priority.'
  }
],
'Swing Components': [
  {
    question: 'Which class is the base class for all Swing components in Java?',
    options: ['Component', 'JComponent', 'Container', 'Window'],
    answer: 1,
    explanation: 'JComponent is the base class for all lightweight Swing components.'
  },
  {
    question: 'Which package contains the Swing classes?',
    options: ['java.awt', 'java.swing', 'javax.awt', 'javax.swing'],
    answer: 3,
    explanation: 'Swing components are part of the javax.swing package.'
  },
  {
    question: 'What is the purpose of the JFrame class in Swing?',
    options: ['To draw graphics', 'To represent a window with a title bar', 'To store layout', 'To handle events'],
    answer: 1,
    explanation: 'JFrame is used to create a top-level window with a title bar and close/minimize options.'
  },
  {
    question: 'Tricky: Which method is required to make a Swing window visible?',
    options: ['setSize()', 'pack()', 'setVisible(true)', 'open()'],
    answer: 2,
    explanation: 'setVisible(true) is necessary to display the window on the screen.'
  },
  {
    question: 'Which component is used to create a button in Swing?',
    options: ['JLabel', 'JButton', 'JField', 'JCheckBox'],
    answer: 1,
    explanation: 'JButton is used to create clickable buttons in Swing.'
  },
  {
    question: 'What does the `pack()` method do in a Swing application?',
    options: [
      'Sets the frame visible',
      'Disposes the frame',
      'Automatically sizes the frame to fit its components',
      'Adds components to frame'
    ],
    answer: 2,
    explanation: 'pack() sizes the frame so that all its contents are at or above their preferred sizes.'
  },
  {
    question: 'Tricky: Which layout manager places components in a single row or column?',
    options: ['GridLayout', 'BorderLayout', 'FlowLayout', 'BoxLayout'],
    answer: 3,
    explanation: 'BoxLayout arranges components either vertically or horizontally.'
  },
  {
    question: 'What is the role of the `JPanel` in Swing?',
    options: [
      'To create a main window',
      'To display text',
      'To group other components together',
      'To handle window closing'
    ],
    answer: 2,
    explanation: 'JPanel is a generic container used to group components inside a JFrame.'
  },
  {
    question: 'Which of these is a lightweight component?',
    options: ['JButton', 'Canvas', 'Frame', 'Dialog'],
    answer: 0,
    explanation: 'Swing components like JButton are lightweight because they are not directly dependent on native GUI.'
  },
  {
    question: 'Tricky: What happens if we call `setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE)`?',
    options: [
      'Closes the window only',
      'Closes the JVM when the window is closed',
      'Minimizes the window',
      'Throws exception if no component inside'
    ],
    answer: 1,
    explanation: 'EXIT_ON_CLOSE terminates the application when the window is closed.'
  }
],
'Event Handling': [
  {
    question: 'Which package provides interfaces and classes for event handling in Java?',
    options: ['java.io', 'java.util', 'java.awt.event', 'javax.swing.event'],
    answer: 2,
    explanation: 'The java.awt.event package provides the core classes and interfaces for event handling.'
  },
  {
    question: 'Which interface must be implemented to handle action events like button clicks?',
    options: ['ActionEvent', 'ActionListener', 'MouseListener', 'WindowListener'],
    answer: 1,
    explanation: 'ActionListener is used to handle action events like button clicks.'
  },
  {
    question: 'Tricky: What is the method inside ActionListener that is called when an event occurs?',
    options: ['run()', 'perform()', 'actionPerformed()', 'clicked()'],
    answer: 2,
    explanation: 'The actionPerformed() method is triggered when an action event occurs.'
  },
  {
    question: 'Which event is generated when a window is closed?',
    options: ['ActionEvent', 'WindowEvent', 'KeyEvent', 'MouseEvent'],
    answer: 1,
    explanation: 'WindowEvent is generated for window-level actions such as closing or opening.'
  },
  {
    question: 'Which listener is used for handling mouse click events?',
    options: ['MouseMotionListener', 'MouseAdapter', 'MouseListener', 'KeyListener'],
    answer: 2,
    explanation: 'MouseListener handles mouse click, press, release, enter, and exit events.'
  },
  {
    question: 'Tricky: What is the advantage of using adapter classes like MouseAdapter?',
    options: [
      'They improve performance',
      'They simplify code by allowing overriding only required methods',
      'They are faster than listeners',
      'They replace event listeners completely'
    ],
    answer: 1,
    explanation: 'Adapter classes provide default implementations, so only necessary methods can be overridden.'
  },
  {
    question: 'Which method is called when a key is typed in a KeyListener?',
    options: ['keyTyped()', 'keyPressed()', 'keyReleased()', 'keyDown()'],
    answer: 0,
    explanation: 'keyTyped() is invoked when a key is typed (a combination of press and release).'
  },
  {
    question: 'Tricky: What does `e.getSource()` return inside an event handler?',
    options: [
      'The event type',
      'The source object (e.g., the button) that generated the event',
      'The class name',
      'The method invoked'
    ],
    answer: 1,
    explanation: 'e.getSource() returns the object that triggered the event.'
  },
  {
    question: 'Which of these is **not** a valid listener in Java event handling?',
    options: ['ItemListener', 'KeyListener', 'FrameListener', 'FocusListener'],
    answer: 2,
    explanation: 'There is no FrameListener in Java; others are valid event listener interfaces.'
  },
  {
    question: 'Program: What is the output of the following code?\n\n```java\nJButton btn = new JButton(\"Click\");\nbtn.addActionListener(e -> System.out.println(\"Clicked!\"));\nbtn.doClick();\n```\n',
    options: ['Nothing', 'Clicked!', 'Error', 'Button created'],
    answer: 1,
    explanation: 'doClick() programmatically triggers a button click, and the ActionListener prints "Clicked!".'
  }
]
},
'Python':{
  'List': [
  {
    question: 'What is the difference between a list and a tuple in Python?',
    options: ['List is immutable', 'Tuple is mutable', 'List is mutable', 'Both are immutable'],
    answer: 2,
    explanation: 'Lists are mutable, while tuples are immutable in Python.'
  },
  {
    question: 'What is the output of the following code?\n\nlst = [1, 2, 3]\nlst[1:2] = [4, 5]\nprint(lst)',
    options: ['[1, 2, 3]', '[1, 4, 5, 3]', '[1, 2, 4, 5, 3]', '[1, 4, 5]'],
    answer: 1,
    explanation: 'The slice assignment replaces index 1 with [4, 5].'
  },
  {
    question: 'Which method adds an element at the end of a list?',
    options: ['append()', 'insert()', 'extend()', 'add()'],
    answer: 0,
    explanation: 'append() adds a single element to the end of the list.'
  },
  {
    question: 'What is the output of the following?\n\nx = [1, 2, 3]\nprint(x * 2)',
    options: ['[1, 2, 3, 1, 2, 3]', '[2, 4, 6]', '[1, 2, 3, 2]', 'Error'],
    answer: 0,
    explanation: 'The * operator duplicates the list.'
  },
  {
    question: 'How can you create a list of 5 zeros?',
    options: ['[0]*5', '[0+0+0+0+0]', 'zeros(5)', '[5]*0'],
    answer: 0,
    explanation: '[0]*5 creates a list of 5 zeroes.'
  },
  {
    question: 'Which method would you use to remove an item by value?',
    options: ['pop()', 'remove()', 'del', 'discard()'],
    answer: 1,
    explanation: 'remove() deletes the first matching value.'
  },
  {
    question: 'What is the result of list("abc")?',
    options: [['a', 'b', 'c'], 'abc', ['abc'], '[a,b,c]'],
    answer: 0,
    explanation: 'The list() constructor splits the string into characters.'
  },
  {
    question: 'What is the output of:\n\nlst = [1, 2, 3]\nlst.pop(0)\nprint(lst)',
    options: ['[1, 2]', '[2, 3]', '[3]', '[1]'],
    answer: 1,
    explanation: 'pop(0) removes the element at index 0.'
  },
  {
    question: 'Which one creates a shallow copy of a list?',
    options: ['list.copy()', 'list[:]', 'copy.copy(list)', 'All of the above'],
    answer: 3,
    explanation: 'All mentioned methods create a shallow copy.'
  },
  {
    question: 'What does the following code do?\n\nx = [1, 2]\ny = x\ny.append(3)\nprint(x)',
    options: ['[1, 2]', '[1, 2, 3]', '[3]', 'Error'],
    answer: 1,
    explanation: 'y and x refer to the same list in memory.'
  }
],
'Tuple and Set': [
  {
    question: 'Which of the following is true about tuples in Python?',
    options: ['Tuples are mutable', 'Tuples can be nested', 'Tuples use curly braces', 'Tuples are slower than lists'],
    answer: 1,
    explanation: 'Tuples can contain other tuples or lists, making them nestable.'
  },
  {
    question: 'What will be the output?\n\nt = (1, 2, 3)\nt[1] = 4\nprint(t)',
    options: ['(1, 4, 3)', '(1, 2, 3)', 'Error', '[1, 4, 3]'],
    answer: 2,
    explanation: 'Tuples are immutable, so assignment will raise a TypeError.'
  },
  {
    question: 'Which method is used to add an item to a set?',
    options: ['add()', 'append()', 'insert()', 'extend()'],
    answer: 0,
    explanation: 'add() is used to insert elements in a set.'
  },
  {
    question: 'Which of the following statements about sets is true?',
    options: ['Sets are ordered', 'Sets allow duplicate values', 'Sets are immutable', 'Sets are unordered and do not allow duplicates'],
    answer: 3,
    explanation: 'Sets are unordered collections of unique elements.'
  },
  {
    question: 'What is the output?\n\ns = {1, 2, 3}\ns.add(2)\nprint(s)',
    options: ['{1, 2, 3, 2}', '{1, 2, 3}', 'Error', '{1, 2}'],
    answer: 1,
    explanation: 'Since 2 is already present, the set remains unchanged.'
  },
  {
    question: 'What is the output?\n\nt = (1, 2, 3)\nprint(t[-1])',
    options: ['3', '2', '1', 'Error'],
    answer: 0,
    explanation: 'Negative indexing works in tuples just like lists.'
  },
  {
    question: 'How do you convert a list to a tuple?',
    options: ['tuple(list)', 'list(tuple)', 'convert(list)', 'set(list)'],
    answer: 0,
    explanation: 'tuple(list) converts a list to a tuple.'
  },
  {
    question: 'What will this code print?\n\nset1 = {1, 2}\nset2 = {2, 3}\nprint(set1 & set2)',
    options: ['{1, 2, 3}', '{2}', '{1}', '[]'],
    answer: 1,
    explanation: '& operator returns the intersection of two sets.'
  },
  {
    question: 'Which operation removes all elements from a set?',
    options: ['clear()', 'remove()', 'del', 'discard()'],
    answer: 0,
    explanation: 'clear() removes all elements from the set.'
  },
  {
    question: 'What will be the output?\n\nt = (1, 2, [3, 4])\nt[2][0] = 5\nprint(t)',
    options: ['(1, 2, [5, 4])', '(1, 2, [3, 4])', 'Error', 'None'],
    answer: 0,
    explanation: 'Although tuples are immutable, mutable elements inside them (like lists) can be modified.'
  }
],
'Dictionary': [
  {
    question: 'Which of the following is the correct way to create a dictionary in Python?',
    options: ['d = (1: "a", 2: "b")', 'd = {1: "a", 2: "b"}', 'd = [1: "a", 2: "b"]', 'd = {1 = "a", 2 = "b"}'],
    answer: 1,
    explanation: 'Dictionaries are created using curly braces and key-value pairs.'
  },
  {
    question: 'What will be the output?\n\nd = {"a": 1, "b": 2}\nprint(d["c"])',
    options: ['None', '0', 'Error', 'c'],
    answer: 2,
    explanation: 'Accessing a non-existing key raises a KeyError.'
  },
  {
    question: 'Which method is used to get all the keys from a dictionary?',
    options: ['keys()', 'values()', 'items()', 'getkeys()'],
    answer: 0,
    explanation: 'The keys() method returns a view of all the keys.'
  },
  {
    question: 'What is the output?\n\nd = {"x": 10, "y": 20}\nd["x"] = d.get("x", 0) + 5\nprint(d["x"])',
    options: ['10', '15', '5', '20'],
    answer: 1,
    explanation: 'd["x"] becomes 10 + 5 = 15.'
  },
  {
    question: 'Which of these statements will safely access a key that might not exist?',
    options: ['d["key"]', 'd.get("key")', 'd.key', 'd["key"]?'],
    answer: 1,
    explanation: 'get() avoids KeyError if the key doesn’t exist.'
  },
  {
    question: 'What is the output?\n\nd = {"a": 1, "b": 2}\nd.update({"c": 3})\nprint(d)',
    options: ['{"a": 1, "b": 2}', '{"c": 3}', '{"a": 1, "b": 2, "c": 3}', 'Error'],
    answer: 2,
    explanation: 'update() adds or updates key-value pairs in the dictionary.'
  },
  {
    question: 'How can you check if a key exists in a dictionary?',
    options: ['"key" in d', 'd.has("key")', 'd.contains("key")', '"key" exists d'],
    answer: 0,
    explanation: 'The `in` keyword checks for key presence in a dictionary.'
  },
  {
    question: 'What will this code print?\n\nd = {}\nd[[]] = "test"\nprint(d)',
    options: ['{}', 'Error', '{"[]": "test"}', 'None'],
    answer: 1,
    explanation: 'Lists are unhashable and cannot be used as dictionary keys.'
  },
  {
    question: 'Which method removes all items from the dictionary?',
    options: ['clear()', 'remove()', 'pop()', 'discard()'],
    answer: 0,
    explanation: 'clear() removes all key-value pairs from the dictionary.'
  },
  {
    question: 'Tricky: What is the output?\n\nd = {1: "one", True: "truth"}\nprint(d)',
    options: ['{1: "truth"}', '{1: "one", True: "truth"}', '{True: "truth"}', '{True: "one"}'],
    answer: 0,
    explanation: 'In Python, True is equal to 1, so the key is overwritten.'
  }
],
'Number System Conversion': [
  {
    question: 'Which function converts a decimal number to a binary string in Python?',
    options: ['bin()', 'binary()', 'dec_to_bin()', 'format()'],
    answer: 0,
    explanation: 'bin() is the built-in function to convert decimal to binary.'
  },
  {
    question: 'What is the output of `bin(10)`?',
    options: ['"1010"', '"0b1010"', '1010', '0xA'],
    answer: 1,
    explanation: 'bin(10) returns a string starting with "0b" followed by binary digits.'
  },
  {
    question: 'Which of the following converts binary "1010" to decimal?',
    options: ['int("1010", 2)', 'binary("1010")', 'bin(1010)', 'int("1010")'],
    answer: 0,
    explanation: 'int("1010", 2) converts binary string to decimal.'
  },
  {
    question: 'What is the hexadecimal representation of decimal 255?',
    options: ['0xff', '255h', '0x255', 'ff'],
    answer: 0,
    explanation: 'hex(255) returns "0xff".'
  },
  {
    question: 'What will `oct(8)` return?',
    options: ['"10"', '"08"', '"0o10"', '"0x8"'],
    answer: 2,
    explanation: 'oct() returns octal representation with a "0o" prefix.'
  },
  {
    question: 'Which function is used to convert decimal to hexadecimal?',
    options: ['hex()', 'dec2hex()', 'int()', 'to_hex()'],
    answer: 0,
    explanation: 'hex() returns hexadecimal string prefixed with "0x".'
  },
  {
    question: 'What is the output?\n`int("F", 16)`',
    options: ['15', '16', 'F', 'Error'],
    answer: 0,
    explanation: 'F in base-16 is 15 in decimal.'
  },
  {
    question: 'Tricky: What is the result of `int("0b110", 2)`?',
    options: ['6', '0b110', '110', 'Error'],
    answer: 0,
    explanation: 'int() with base 2 ignores the "0b" prefix and converts to decimal.'
  },
  {
    question: 'What will this code print?\n`format(15, "b")`',
    options: ['0b1111', '15', '1111', 'b1111'],
    answer: 2,
    explanation: 'format(15, "b") returns binary string without prefix.'
  },
  {
    question: 'Programmatic: Convert decimal 123 to binary, octal, and hexadecimal.',
    options: ['bin(123), oct(123), hex(123)', 'str(123)', 'int(123, 10)', 'convert(123)'],
    answer: 0,
    explanation: 'bin(), oct(), hex() are built-in conversion functions.'
  }
],
'User input in Python': [
  {
    question: 'Which function is used to get input from the user in Python?',
    options: ['input()', 'scan()', 'get()', 'read()'],
    answer: 0,
    explanation: 'input() reads a line from input and returns it as a string.'
  },
  {
    question: 'What will be the type of data returned by `input()`?',
    options: ['str', 'int', 'float', 'bool'],
    answer: 0,
    explanation: 'input() always returns data as a string.'
  },
  {
    question: 'What will be the output of:\n`x = input("Enter: "); print(type(x))` if you type 10?',
    options: ['<class "int">', '<class "str">', '10', 'Error'],
    answer: 1,
    explanation: 'Even if you enter a number, input() returns a string.'
  },
  {
    question: 'Which function is used to convert a string to an integer?',
    options: ['int()', 'str()', 'float()', 'eval()'],
    answer: 0,
    explanation: 'int() is used to convert a string to an integer.'
  },
  {
    question: 'Tricky: What is the output of `input() + input()` if user types 2 and 3?',
    options: ['5', '23', '6', 'Error'],
    answer: 1,
    explanation: 'input() returns strings, so "2" + "3" is "23".'
  },
  {
    question: 'How do you take integer input from the user?',
    options: ['int(input())', 'input(int())', 'getInt()', 'scanInt()'],
    answer: 0,
    explanation: 'Wrap input() in int() to get integer input.'
  },
  {
    question: 'What happens if user enters a non-numeric value in `int(input())`?',
    options: ['Returns string', 'Returns 0', 'Raises ValueError', 'Ignores input'],
    answer: 2,
    explanation: 'int(input()) raises a ValueError if conversion fails.'
  },
  {
    question: 'Programmatic: What does this print?\n`a = input(); b = input(); print(a + b)`\nUser enters: 5 and 7',
    options: ['12', '57', 'Error', 'None'],
    answer: 1,
    explanation: 'String concatenation: "5" + "7" = "57".'
  },
  {
    question: 'How do you take space-separated integers in a single line?',
    options: ['map(int, input().split())', 'input().int().split()', 'int(input().split())', 'input().split(int)'],
    answer: 0,
    explanation: 'Use map() with int and split().'
  },
  {
    question: 'Programmatic: What will this code output?\n`x, y = input().split(); print(x, y)` if input is "10 20"',
    options: ['10 20', '10,20', '(10,20)', 'Error'],
    answer: 0,
    explanation: 'input().split() returns strings, and x, y unpack the values.'
  }
],
'Pass': [
  {
    question: 'What is the use of the `pass` statement in Python?',
    options: ['To pause the program', 'To exit a loop', 'As a placeholder', 'To return from function'],
    answer: 2,
    explanation: '`pass` is used as a placeholder when no action is required.'
  },
  {
    question: 'Which of the following will not cause an IndentationError?',
    options: [
      'if True:\n  pass',
      'while True:\n  ',
      'def fun():\n  # comment',
      'for i in range(5):'
    ],
    answer: 0,
    explanation: 'Only the first has valid block code using `pass` as a placeholder.'
  },
  {
    question: 'Where can the `pass` statement be used?',
    options: ['Inside functions', 'Inside classes', 'Inside loops', 'All of the above'],
    answer: 3,
    explanation: 'The `pass` statement can be used anywhere a statement is syntactically required.'
  },
  {
    question: 'What is the output of the following?\n`for i in range(3):\n  pass\nprint("Done")`',
    options: ['0 1 2 Done', 'Done', 'Error', 'None'],
    answer: 1,
    explanation: '`pass` does nothing, so only "Done" is printed.'
  },
  {
    question: 'Choose the correct use case of `pass`.',
    options: [
      'To break out of loop',
      'To do nothing temporarily',
      'To raise error',
      'To continue loop'
    ],
    answer: 1,
    explanation: '`pass` is used when a statement is syntactically required but no action is needed.'
  },
  {
    question: 'Tricky: What will happen?\n`if False:\n  pass\nelse:\n  print("Hi")`',
    options: ['pass', 'Hi', 'False', 'Error'],
    answer: 1,
    explanation: 'The `else` block is executed since `if False` is not executed.'
  },
  {
    question: 'Which of these can be used as a temporary code block?',
    options: ['break', 'return', 'pass', 'yield'],
    answer: 2,
    explanation: '`pass` is a good choice for temporary code blocks.'
  },
  {
    question: 'What is the difference between `pass` and `continue`?',
    options: [
      '`pass` exits loop, `continue` doesn’t',
      '`continue` skips the rest of the loop body, `pass` does nothing',
      'Both are same',
      '`pass` skips iteration, `continue` ends loop'
    ],
    answer: 1,
    explanation: '`continue` skips the current iteration; `pass` simply does nothing.'
  },
  {
    question: 'Programmatic: Which code is correct?',
    options: [
      'def foo():\n  # work later',
      'class A:\n  ',
      'for i in range(3):\n  pass',
      'if True\n  pass'
    ],
    answer: 2,
    explanation: 'Only third option is syntactically valid without error.'
  },
  {
    question: 'What is the output?\n`def temp():\n  pass\nprint(temp())`',
    options: ['None', 'pass', '0', 'Error'],
    answer: 0,
    explanation: 'Function has no return, so returns `None`.'
  }
],
'Patterns in python': [
  {
    question: 'Which loop structure is most commonly used for printing patterns in Python?',
    options: ['while loop', 'for loop', 'do-while loop', 'if-else'],
    answer: 1,
    explanation: 'for loops are commonly used due to their control over iteration ranges.'
  },
  {
    question: 'What does the following code print?\nfor i in range(1, 4):\n  print("*" * i)',
    options: ['* * *', '*\n**\n***', '***\n**\n*', 'Syntax Error'],
    answer: 1,
    explanation: 'The `*` operator repeats the string i times.'
  },
  {
    question: 'Which of the following will print a right-angled triangle pattern?',
    options: [
      'for i in range(5): print(i * "*")',
      'for i in range(1, 6): print("*" * i)',
      'print("*" * 5)',
      'for i in range(5, 0, -1): print(i)'
    ],
    answer: 1,
    explanation: 'Only the second option prints increasing stars per line.'
  },
  {
    question: 'How do you print a square pattern of 5x5 asterisks?',
    options: [
      'for i in range(5): print("*")',
      'for i in range(5): print("*" * 5)',
      'print("*" * 25)',
      'while True: print("*")'
    ],
    answer: 1,
    explanation: 'Repeating "*" 5 times for each of 5 lines gives a square.'
  },
  {
    question: 'Programmatic: What pattern is this?\nfor i in range(5, 0, -1): print("*" * i)',
    options: [
      'Increasing triangle',
      'Square',
      'Decreasing triangle',
      'Pyramid'
    ],
    answer: 2,
    explanation: 'Starts with 5 stars, decreasing each line.'
  },
  {
    question: 'Tricky: What will this print?\nfor i in range(3):\n  print(" " * (2 - i) + "*" * (2 * i + 1))',
    options: [
      'Centered triangle', 'Square', 'Diamond', 'Reverse triangle'
    ],
    answer: 0,
    explanation: 'This is the formula for a centered pyramid/triangle.'
  },
  {
    question: 'Which of the following is a key idea in pattern printing?',
    options: [
      'Using string multiplication',
      'Using recursion only',
      'Using `import pattern` module',
      'Using random module'
    ],
    answer: 0,
    explanation: 'String multiplication is core to efficient pattern generation.'
  },
  {
    question: 'What does the following code print?\nfor i in range(1, 4):\n  for j in range(i):\n    print("*", end=" ")\n  print()',
    options: [
      '*\n* *\n* * *',
      '***',
      '* * *',
      '1 2 3'
    ],
    answer: 0,
    explanation: 'Nested loop prints increasing number of stars.'
  },
  {
    question: 'Which pattern is printed by this code?\nfor i in range(5):\n  print(" " * i + "*")',
    options: [
      'Diagonal line (right)',
      'Vertical line',
      'Centered pyramid',
      'None'
    ],
    answer: 0,
    explanation: 'Spaces before star create a diagonal pattern from top-left to bottom-right.'
  },
  {
    question: 'What will this print?\nfor i in range(5):\n  for j in range(5):\n    print("*", end="")\n  print()',
    options: [
      '5 rows of 5 stars',
      '1 row of 25 stars',
      'Pyramid',
      'Nothing'
    ],
    answer: 0,
    explanation: 'Nested loop prints 5 stars in each of 5 lines.'
  }
],
'Matrix': [
  {
    question: 'How can you represent a matrix in Python?',
    options: ['Using a single list', 'Using a dictionary', 'Using a list of lists', 'Using a set'],
    answer: 2,
    explanation: 'A matrix is commonly represented as a list of lists in Python.'
  },
  {
    question: 'What will be the output of:\nmatrix = [[1,2],[3,4]]\nprint(matrix[1][0])',
    options: ['2', '3', '[3,4]', '1'],
    answer: 1,
    explanation: 'matrix[1][0] refers to the first element of the second row, which is 3.'
  },
  {
    question: 'Which module is used for advanced matrix operations in Python?',
    options: ['math', 'numpy', 'random', 'collections'],
    answer: 1,
    explanation: 'numpy is used for efficient numerical and matrix operations.'
  },
  {
    question: 'What will be the output?\nmatrix = [[1]*3]*3\nmatrix[0][0] = 5\nprint(matrix)',
    options: [
      '[[5,1,1],[1,1,1],[1,1,1]]',
      '[[5,1,1],[5,1,1],[5,1,1]]',
      '[[5,5,5],[5,5,5],[5,5,5]]',
      '[[5,1,1],[1,1,1],[1,1,1]]'
    ],
    answer: 1,
    explanation: 'All rows reference the same list, so modifying one affects all.'
  },
  {
    question: 'How to initialize a 3x3 zero matrix using list comprehension?',
    options: [
      '[[0]*3]*3',
      '[[0 for j in range(3)] for i in range(3)]',
      '[0]*3*3',
      'list(0,3,3)'
    ],
    answer: 1,
    explanation: 'This creates independent sublists with zeros.'
  },
  {
    question: 'Tricky: What’s wrong with the following matrix code?\nm = [[0]*3]*3\nm[0][1] = 5\nprint(m)',
    options: [
      'Nothing is wrong',
      'It creates shallow copies',
      'It throws an error',
      'It prints only one row'
    ],
    answer: 1,
    explanation: 'It creates shallow copies of the same row, which leads to unintended updates.'
  },
  {
    question: 'Programmatic: How do you transpose a matrix in Python without using NumPy?',
    options: [
      'Use zip(*matrix)', 
      'Use reversed()', 
      'Use matrix[::-1]', 
      'Use matrix.sort()'
    ],
    answer: 0,
    explanation: 'zip(*matrix) effectively transposes the rows and columns.'
  },
  {
    question: 'How can you access the diagonal elements of a square matrix?',
    options: [
      'matrix[i][i] in a loop', 
      'matrix[i][j+1]', 
      'matrix[j][i]', 
      'matrix[i+i]'
    ],
    answer: 0,
    explanation: 'matrix[i][i] gives diagonal elements.'
  },
  {
    question: 'Which of the following correctly multiplies two 2D matrices using nested loops?',
    options: [
      'Using 2 loops',
      'Using 3 nested loops',
      'Using a single loop',
      'Using while loop only'
    ],
    answer: 1,
    explanation: 'Matrix multiplication requires 3 nested loops: two for iteration and one for dot product.'
  },
  {
    question: 'What will be the result of:\nmatrix = [[1,2],[3,4]]\nprint(sum(matrix[0]))',
    options: ['3', '6', '10', '1'],
    answer: 1,
    explanation: 'sum(matrix[0]) adds the first row elements: 1+2 = 3.'
  }
],
'Arguments': [
  {
    question: 'What are the two main types of arguments in Python functions?',
    options: ['Local and Global', 'Positional and Keyword', 'Required and Optional', 'Formal and Actual'],
    answer: 1,
    explanation: 'Python functions accept positional and keyword arguments.'
  },
  {
    question: 'What will be the output?\ndef func(a, b=5): return a + b\nprint(func(2))',
    options: ['7', '5', 'Error', '2'],
    answer: 0,
    explanation: 'b has a default value of 5, so func(2) = 2 + 5 = 7.'
  },
  {
    question: 'What does *args allow you to do in a function?',
    options: ['Accept keyword arguments', 'Accept a variable number of positional arguments', 'Return multiple values', 'Create a generator'],
    answer: 1,
    explanation: '*args allows you to pass a variable number of non-keyword arguments.'
  },
  {
    question: 'What does **kwargs allow you to do?',
    options: ['Accept all arguments', 'Accept default arguments', 'Accept variable number of keyword arguments', 'Ignore extra arguments'],
    answer: 2,
    explanation: '**kwargs collects extra keyword arguments into a dictionary.'
  },
  {
    question: 'Tricky: What will this print?\ndef f(a, b, c=3): print(a, b, c)\nf(1, c=4, b=2)',
    options: ['1 2 3', '1 3 4', '1 2 4', 'Error'],
    answer: 2,
    explanation: 'You can pass keyword arguments in any order as long as all are provided.'
  },
  {
    question: 'Which of the following is the correct order of parameters?',
    options: ['*args, **kwargs, default', 'default, *args, **kwargs', '**kwargs, *args, default', 'default, **kwargs, *args'],
    answer: 1,
    explanation: 'The correct order is: positional, default, *args, **kwargs.'
  },
  {
    question: 'Program: What is the output?\ndef f(*args): print(sum(args))\nf(1,2,3)',
    options: ['1', '6', '(1,2,3)', 'Error'],
    answer: 1,
    explanation: 'sum(1+2+3) = 6. *args collects arguments as a tuple.'
  },
  {
    question: 'What will happen if you call a function with more arguments than defined?',
    options: ['Error', 'Ignores extra arguments', 'Depends on the function', 'Works only if *args or **kwargs is used'],
    answer: 3,
    explanation: 'You must use *args or **kwargs to handle extra arguments.'
  },
  {
    question: 'What will be printed?\ndef func(a, *args, **kwargs): print(a, args, kwargs)\nfunc(1,2,3,x=4,y=5)',
    options: ["1 (2, 3) {'x': 4, 'y': 5}", "1 [2,3] {x:4, y:5}", "1 2 3 4 5", "Error"],
    answer: 0,
    explanation: 'args are captured as a tuple, kwargs as a dictionary.'
  },
  {
    question: 'Which of the following is true about default arguments?',
    options: [
      'They must be placed before non-default arguments',
      'They can be placed anywhere in the function',
      'They must be placed after non-default arguments',
      'They cannot be used with *args'
    ],
    answer: 2,
    explanation: 'Default arguments must be after non-default arguments.'
  }
],
'Filter,Map and Reduce': [
  {
    question: 'What does the `map()` function do in Python?',
    options: [
      'Filters values based on a condition',
      'Applies a function to each element of an iterable',
      'Combines two lists',
      'Sorts an iterable'
    ],
    answer: 1,
    explanation: 'map() applies a given function to each item in an iterable.'
  },
  {
    question: 'What is the output?\nlist(map(lambda x: x * 2, [1, 2, 3]))',
    options: ['[2, 4, 6]', '[1, 2, 3]', '[1, 4, 9]', '[2, 2, 2]'],
    answer: 0,
    explanation: 'The lambda doubles each number: 1→2, 2→4, 3→6.'
  },
  {
    question: 'What does `filter()` return?',
    options: [
      'List of all elements',
      'Filtered values based on condition',
      'Sorted values',
      'True or False'
    ],
    answer: 1,
    explanation: 'filter() returns elements where the function returns True.'
  },
  {
    question: 'Tricky: What is the result?\nlist(filter(None, [0, 1, False, 2, "", 3]))',
    options: ['[1, 2, 3]', '[0, 1, False, 2, "", 3]', '[0, False, ""]', '[1, False, 2, 3]'],
    answer: 0,
    explanation: 'filter(None, ...) removes all falsy values like 0, False, "".'
  },
  {
    question: 'Which module contains `reduce()` in Python 3?',
    options: ['functools', 'collections', 'itertools', 'math'],
    answer: 0,
    explanation: 'reduce() was moved to the functools module in Python 3.'
  },
  {
    question: 'What is the output?\nfrom functools import reduce\nreduce(lambda x, y: x + y, [1, 2, 3, 4])',
    options: ['10', '[10]', '1234', 'Error'],
    answer: 0,
    explanation: 'reduce applies the lambda cumulatively: 1+2+3+4 = 10.'
  },
  {
    question: 'Which of the following returns only even numbers from a list?',
    options: [
      'map(lambda x: x % 2 == 0, list)',
      'filter(lambda x: x % 2 == 0, list)',
      'reduce(lambda x, y: x + y, list)',
      'list(map(x % 2 == 0))'
    ],
    answer: 1,
    explanation: 'filter is used to keep values matching the condition.'
  },
  {
    question: 'Program: What is the result?\nlist(map(str, [1, 2, 3]))',
    options: ["['1', '2', '3']", '[1, 2, 3]', '123', "['str', 'str', 'str']"],
    answer: 0,
    explanation: 'map applies str() to each number: 1 → "1", etc.'
  },
  {
    question: 'Which is faster for simple transformations on lists?',
    options: ['for loop', 'map()', 'filter()', 'reduce()'],
    answer: 1,
    explanation: 'map() is generally faster and more concise than for loop.'
  },
  {
    question: 'Which of the following is **not true** about reduce()?',
    options: [
      'It applies a binary function cumulatively',
      'It reduces an iterable to a single value',
      'It returns a list',
      'It is imported from functools'
    ],
    answer: 2,
    explanation: 'reduce() returns a single result, not a list.'
  }
],
'Abstract class and Abstract method': [
  {
    question: 'Which module provides support for abstract classes in Python?',
    options: ['abc', 'abstract', 'abstractbase', 'classutils'],
    answer: 0,
    explanation: 'The `abc` module allows defining Abstract Base Classes (ABCs).'
  },
  {
    question: 'What happens if you try to instantiate an abstract class directly?',
    options: [
      'It creates an object',
      'It raises a TypeError',
      'It returns None',
      'It compiles but gives a warning'
    ],
    answer: 1,
    explanation: 'Instantiating an abstract class with abstract methods raises a TypeError.'
  },
  {
    question: 'What decorator is used to declare an abstract method?',
    options: ['@abstractmethod', '@abstract', '@classmethod', '@staticmethod'],
    answer: 0,
    explanation: 'You declare abstract methods using the `@abstractmethod` decorator.'
  },
  {
    question: 'Which of the following statements is correct?',
    options: [
      'An abstract class must have at least one abstract method',
      'An abstract class must implement all methods',
      'An abstract class can’t have constructors',
      'An abstract class cannot have concrete methods'
    ],
    answer: 0,
    explanation: 'Having at least one abstract method makes a class abstract.'
  },
  {
    question: 'Tricky: Can an abstract class have a constructor?',
    options: ['Yes', 'No', 'Only in Python 2', 'Only if no abstract methods'],
    answer: 0,
    explanation: 'Abstract classes can have constructors and concrete methods.'
  },
  {
    question: 'What is the output?\n```python\nfrom abc import ABC, abstractmethod\nclass A(ABC):\n  @abstractmethod\n  def foo(self): pass\nclass B(A):\n  pass\nB()\n```',
    options: ['Object created', 'TypeError', 'None', 'Compilation error'],
    answer: 1,
    explanation: 'B does not implement the abstract method, so TypeError is raised.'
  },
  {
    question: 'Which of the following is true for abstract methods?',
    options: [
      'They must have a body',
      'They can be left unimplemented',
      'They can only exist in concrete classes',
      'They must raise an exception'
    ],
    answer: 1,
    explanation: 'Abstract methods are meant to be overridden in subclasses.'
  },
  {
    question: 'Code: Which class will work correctly?\n```python\nfrom abc import ABC, abstractmethod\nclass A(ABC):\n  @abstractmethod\n  def show(self): pass\nclass B(A):\n  def show(self): print("Hi")\nB().show()\n```',
    options: ['Compiles and prints "Hi"', 'Raises Error', 'Does nothing', 'Prints nothing'],
    answer: 0,
    explanation: 'B implements the abstract method, so it works fine.'
  },
  {
    question: 'Can abstract methods have arguments?',
    options: ['Yes', 'No', 'Only default arguments', 'Only keyword arguments'],
    answer: 0,
    explanation: 'Abstract methods can have any kind of arguments.'
  },
  {
    question: 'Why use abstract classes in Python?',
    options: [
      'To allow multiple inheritance',
      'To prevent class instantiation',
      'To define a common interface for subclasses',
      'To improve speed of execution'
    ],
    answer: 2,
    explanation: 'Abstract classes help define a common interface or structure for child classes.'
  }
],
'Iterator and Generators': [
  {
    question: 'What does an iterator in Python implement?',
    options: ['__iter__()', '__next__()', 'Both __iter__() and __next__()', '__getitem__()'],
    answer: 2,
    explanation: 'An iterator must implement both __iter__() and __next__() methods.'
  },
  {
    question: 'Which function is used to get the next item from an iterator?',
    options: ['next()', 'iter()', 'advance()', 'get()'],
    answer: 0,
    explanation: 'The built-in next() function is used to retrieve the next item.'
  },
  {
    question: 'What happens if next() is called after the iterator is exhausted?',
    options: ['Returns None', 'Starts again', 'Raises StopIteration', 'Raises ValueError'],
    answer: 2,
    explanation: 'When exhausted, next() raises a StopIteration exception.'
  },
  {
    question: 'What is the purpose of a generator function in Python?',
    options: [
      'To return a list of values',
      'To yield values lazily using yield',
      'To iterate a dictionary',
      'To execute faster loops'
    ],
    answer: 1,
    explanation: 'Generators yield values one by one using the yield keyword.'
  },
  {
    question: 'Tricky: What is the output of the following code?\n```python\ndef gen():\n  yield 1\n  return\n  yield 2\nprint(list(gen()))\n```',
    options: ['[1, 2]', '[1]', '[]', '[2]'],
    answer: 1,
    explanation: 'The generator yields only 1 before hitting the return statement.'
  },
  {
    question: 'Which of these keywords is used to make a function generator?',
    options: ['yield', 'return', 'generator', 'continue'],
    answer: 0,
    explanation: '`yield` turns a normal function into a generator function.'
  },
  {
    question: 'Can a generator be reused after it is exhausted?',
    options: ['Yes', 'No', 'Only once', 'Only inside loops'],
    answer: 1,
    explanation: 'Generators can only be iterated once. After that, they’re exhausted.'
  },
  {
    question: 'What will be the output?\n```python\ndef g():\n  for i in range(3):\n    yield i*i\ng1 = g()\nprint(next(g1), next(g1))\n```',
    options: ['0 1', '0 2', '1 4', '0 0'],
    answer: 0,
    explanation: 'It yields 0 then 1 as it squares 0 and 1 respectively.'
  },
  {
    question: 'Which method converts an iterable to an iterator?',
    options: ['iter()', 'next()', 'list()', 'map()'],
    answer: 0,
    explanation: 'The iter() function turns an iterable into an iterator.'
  },
  {
    question: 'What is the main advantage of generators over lists?',
    options: [
      'They are faster to create',
      'They consume less memory',
      'They can return multiple values',
      'They are easier to debug'
    ],
    answer: 1,
    explanation: 'Generators are memory-efficient as they yield items one at a time.'
  }
],
'Searching Algorithms': [
  {
    question: 'Which of the following is the best-case time complexity for linear search?',
    options: ['O(n)', 'O(log n)', 'O(1)', 'O(n log n)'],
    answer: 2,
    explanation: 'In the best case, the target element is the first item, so time complexity is O(1).'
  },
  {
    question: 'Which algorithm is more efficient for sorted arrays?',
    options: ['Linear Search', 'Binary Search', 'Breadth-First Search', 'DFS'],
    answer: 1,
    explanation: 'Binary Search is much faster on sorted arrays due to O(log n) complexity.'
  },
  {
    question: 'What is the worst-case time complexity of Binary Search?',
    options: ['O(1)', 'O(n)', 'O(log n)', 'O(n log n)'],
    answer: 2,
    explanation: 'Binary Search divides the array in half each time, resulting in O(log n).'
  },
  {
    question: 'Tricky: What will be the result of this binary search implementation?\n```python\ndef binary_search(arr, x):\n  low, high = 0, len(arr) - 1\n  while low <= high:\n    mid = (low + high) // 2\n    if arr[mid] == x:\n      return mid\n    elif arr[mid] < x:\n      low = mid + 1\n    else:\n      high = mid - 1\n  return -1\nprint(binary_search([1, 3, 5, 7, 9], 4))\n```',
    options: ['2', '-1', '3', 'None'],
    answer: 1,
    explanation: '4 is not present in the list, so the function returns -1.'
  },
  {
    question: 'Which searching algorithm works on divide and conquer strategy?',
    options: ['Linear Search', 'Binary Search', 'Depth First Search', 'Breadth First Search'],
    answer: 1,
    explanation: 'Binary Search repeatedly divides the search interval in half.'
  },
  {
    question: 'In which condition binary search cannot be applied?',
    options: ['Unsorted array', 'Sorted array', 'Array with duplicates', 'String array'],
    answer: 0,
    explanation: 'Binary Search only works on sorted data.'
  },
  {
    question: 'What is the average-case time complexity of linear search?',
    options: ['O(1)', 'O(n)', 'O(log n)', 'O(n^2)'],
    answer: 1,
    explanation: 'On average, linear search checks half the elements: O(n).'
  },
  {
    question: 'Tricky: What happens if you use binary search on an unsorted list?',
    options: ['It still works', 'It gives wrong result', 'It throws an error', 'It works slowly'],
    answer: 1,
    explanation: 'Binary search assumes a sorted list; on unsorted lists, results are unreliable.'
  },
  {
    question: 'Which built-in Python module provides functions like bisect.bisect for binary search?',
    options: ['heapq', 'bisect', 'collections', 'math'],
    answer: 1,
    explanation: 'The bisect module helps maintain sorted lists and binary search.'
  },
  {
    question: 'Program: What is the output?\n```python\nimport bisect\narr = [1, 3, 5, 7]\nprint(bisect.bisect_left(arr, 4))\n```',
    options: ['1', '2', '3', '4'],
    answer: 1,
    explanation: '4 should be inserted at index 2 to maintain the sorted order.'
  }
],
'Sorting Methods': [
  {
    question: 'Which of the following sorting algorithms has the best average-case performance?',
    options: ['Bubble Sort', 'Merge Sort', 'Selection Sort', 'Insertion Sort'],
    answer: 1,
    explanation: 'Merge Sort has an average-case time complexity of O(n log n), better than the others listed.'
  },
  {
    question: 'What is the worst-case time complexity of Quick Sort?',
    options: ['O(n log n)', 'O(n^2)', 'O(n)', 'O(log n)'],
    answer: 1,
    explanation: 'Quick Sort has worst-case complexity O(n^2), especially on already sorted arrays without good pivot selection.'
  },
  {
    question: 'Which sorting method is considered stable?',
    options: ['Selection Sort', 'Bubble Sort', 'Heap Sort', 'Quick Sort'],
    answer: 1,
    explanation: 'Bubble Sort maintains the relative order of equal elements, making it stable.'
  },
  {
    question: 'Which sorting algorithm is best for nearly sorted data?',
    options: ['Bubble Sort', 'Insertion Sort', 'Merge Sort', 'Heap Sort'],
    answer: 1,
    explanation: 'Insertion Sort performs efficiently on nearly sorted data with O(n) time.'
  },
  {
    question: 'Tricky: What does this return?\n```python\narr = [3, 1, 4, 2]\narr.sort(reverse=True)\nprint(arr)\n```',
    options: ['[1, 2, 3, 4]', '[4, 3, 2, 1]', '[1, 3, 2, 4]', 'Error'],
    answer: 1,
    explanation: 'The reverse=True flag sorts the list in descending order.'
  },
  {
    question: 'Which of the following algorithms is not comparison-based?',
    options: ['Bubble Sort', 'Quick Sort', 'Merge Sort', 'Counting Sort'],
    answer: 3,
    explanation: 'Counting Sort uses a different technique, not based on element comparisons.'
  },
  {
    question: 'What is the space complexity of Merge Sort?',
    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n^2)'],
    answer: 2,
    explanation: 'Merge Sort uses O(n) additional space for merging.'
  },
  {
    question: 'Program: What is the output?\n```python\narr = [4, 2, 9, 1]\nprint(sorted(arr))\nprint(arr)\n```',
    options: ['[1, 2, 4, 9] and [1, 2, 4, 9]', '[1, 2, 4, 9] and [4, 2, 9, 1]', 'Error', 'None'],
    answer: 1,
    explanation: 'sorted() returns a new sorted list; original remains unchanged.'
  },
  {
    question: 'Which sort is preferred when memory usage is a concern?',
    options: ['Merge Sort', 'Bubble Sort', 'Heap Sort', 'Counting Sort'],
    answer: 2,
    explanation: 'Heap Sort is in-place and does not require additional memory like Merge Sort.'
  },
  {
    question: 'Tricky: What will this code output?\n```python\narr = [3, 5, 2, 1, 4]\nprint(sorted(arr, key=lambda x: -x))\n```',
    options: ['[1, 2, 3, 4, 5]', '[5, 4, 3, 2, 1]', '[3, 5, 2, 1, 4]', 'Error'],
    answer: 1,
    explanation: 'The key returns negative values, effectively sorting in descending order.'
  }
],
'Zip function': [
  {
    question: 'What does the zip() function in Python do?',
    options: [
      'Combines two or more iterables element-wise into tuples',
      'Compresses a folder',
      'Creates a list of lists',
      'Returns sorted elements from multiple lists'
    ],
    answer: 0,
    explanation: 'zip() aggregates elements from multiple iterables into tuples.'
  },
  {
    question: 'What is the output of:\n```python\nlist(zip([1,2], [3,4]))\n```',
    options: ['[(1, 3), (2, 4)]', '[1, 2, 3, 4]', '[(1, 2), (3, 4)]', '[(1, 4), (2, 3)]'],
    answer: 0,
    explanation: 'zip() pairs elements by index from both lists.'
  },
  {
    question: 'What happens if zip() is called on iterables of unequal length?',
    options: [
      'Raises an error',
      'Fills missing values with None',
      'Stops at the shortest iterable',
      'Repeats the shorter list elements'
    ],
    answer: 2,
    explanation: 'zip() stops at the shortest iterable by default.'
  },
  {
    question: 'Program Output:\n```python\nx = [1, 2, 3]\ny = ["a", "b"]\nprint(list(zip(x, y)))\n```',
    options: ['[(1, "a"), (2, "b")]', '[(1, "a"), (2, "b"), (3, None)]', 'Error', '[(1, "b"), (2, "a")]'],
    answer: 0,
    explanation: 'Pairs (1, "a") and (2, "b"); third element is ignored as y is shorter.'
  },
  {
    question: 'How can we zip multiple lists in Python?',
    options: [
      'zip(list1 + list2)',
      'zip(list1, list2)',
      'zip([list1, list2])',
      'zip(*list1, *list2)'
    ],
    answer: 1,
    explanation: 'zip() accepts multiple iterables as separate arguments.'
  },
  {
    question: 'Tricky: What does this return?\n```python\nprint(list(zip("abc", [1,2,3], [True, False])))\n```',
    options: [
      "[('a', 1, True), ('b', 2, False), ('c', 3, True)]",
      "[('a', 1, True), ('b', 2, False)]",
      "[('a', 1), ('b', 2), ('c', 3)]",
      "Error"
    ],
    answer: 1,
    explanation: 'zip stops at the shortest iterable, which is the Boolean list of length 2.'
  },
  {
    question: 'How to unzip a list of tuples created using zip?',
    options: [
      'Using zip(*zipped)',
      'Using unzip() function',
      'Using a for loop',
      'Using reversed(zip())'
    ],
    answer: 0,
    explanation: 'zip(*zipped) unpacks the zipped tuples into separate iterables.'
  },
  {
    question: 'Program Output:\n```python\nnames = ["Alice", "Bob"]\nages = [25, 30]\nfor name, age in zip(names, ages):\n    print(name, age)\n```',
    options: [
      'Alice 25 Bob 30',
      '25 Alice 30 Bob',
      '["Alice", "Bob"] [25, 30]',
      'Error'
    ],
    answer: 0,
    explanation: 'zip() unpacks name and age pairs for printing.'
  },
  {
    question: 'What is the result of this code?\n```python\nx = [10, 20]\ny = ["x", "y"]\nz = zip(x, y)\nprint(next(z))\nprint(next(z))\n```',
    options: [
      '(10, "x") then (20, "y")',
      '(10, "x") then Error',
      '[10, "x"] then [20, "y"]',
      'Error'
    ],
    answer: 0,
    explanation: 'zip returns an iterator, and next() fetches elements one by one.'
  },
  {
    question: 'Can zip() be used with more than 2 iterables?',
    options: ['Yes', 'No', 'Only with strings', 'Only with equal lengths'],
    answer: 0,
    explanation: 'zip() can combine any number of iterables.'
  }
],
'Data types ': [
  {
    question: 'Which of the following is an immutable data type in Python?',
    options: ['list', 'dict', 'tuple', 'set'],
    answer: 2,
    explanation: 'Tuples are immutable, meaning their contents cannot be changed after creation.'
  },
  {
    question: 'What is the output of type(5.0)?',
    options: ['<class "int">', '<class "float">', '<class "double">', '<class "number">'],
    answer: 1,
    explanation: '5.0 is a floating-point number, so its type is float.'
  },
  {
    question: 'Which of these types is unordered?',
    options: ['list', 'tuple', 'dict', 'set'],
    answer: 3,
    explanation: 'Sets are unordered collections of unique elements.'
  },
  {
    question: 'What is the result of:\n```python\ntype(True)\n```',
    options: ['bool', 'int', 'str', 'NoneType'],
    answer: 0,
    explanation: 'True is a Boolean value of type bool.'
  },
  {
    question: 'Tricky: What is the output of:\n```python\nisinstance(True, int)\n```',
    options: ['True', 'False', 'Error', 'None'],
    answer: 0,
    explanation: 'In Python, bool is a subclass of int, so True is an instance of int.'
  },
  {
    question: 'Which of the following data types is not built-in in Python?',
    options: ['complex', 'frozenset', 'enum', 'bytes'],
    answer: 2,
    explanation: 'enum is part of the enum module and not a core built-in data type.'
  },
  {
    question: 'What is the size of an empty list in Python (approx)?',
    options: ['8 bytes', '48 bytes', '64 bytes', 'Depends on the system'],
    answer: 1,
    explanation: 'An empty list typically uses about 48 bytes of memory, but it can vary by platform.'
  },
  {
    question: 'Which data type would best store a phone directory?',
    options: ['list', 'set', 'dict', 'tuple'],
    answer: 2,
    explanation: 'A dictionary stores key-value pairs, ideal for representing names and phone numbers.'
  },
  {
    question: 'Tricky: What is the output?\n```python\nx = [1, 2]\ny = x\nx.append(3)\nprint(y)\n```',
    options: ['[1, 2]', '[1, 2, 3]', '[3]', 'Error'],
    answer: 1,
    explanation: 'x and y reference the same list, so changes to x reflect in y.'
  },
  {
    question: 'Which of the following can contain duplicate values?',
    options: ['set', 'dict keys', 'list', 'frozenset'],
    answer: 2,
    explanation: 'Only lists can contain duplicate values. Sets and dict keys must be unique.'
  }
],
'IDLE Command': [
  {
    question: 'What does IDLE stand for in Python?',
    options: ['Integrated Development and Learning Environment', 'Interactive Data Language Environment', 'Internal Debugging Language Engine', 'Intelligent Development Logging Editor'],
    answer: 0,
    explanation: 'IDLE stands for Integrated Development and Learning Environment and is Python’s default IDE.'
  },
  {
    question: 'Which key is used to run a Python script in IDLE?',
    options: ['F5', 'Ctrl + R', 'Shift + Enter', 'F9'],
    answer: 0,
    explanation: 'F5 is the shortcut key to run a Python script in IDLE.'
  },
  {
    question: 'Which menu in IDLE is used to open the Python Shell?',
    options: ['Edit', 'Run', 'Shell', 'File'],
    answer: 2,
    explanation: 'The Shell menu allows you to open the Python interactive shell in IDLE.'
  },
  {
    question: 'What is the default extension for Python files in IDLE?',
    options: ['.txt', '.py', '.pyd', '.python'],
    answer: 1,
    explanation: 'Python source files are saved with a .py extension.'
  },
  {
    question: 'Tricky: What happens if you type `exit()` in IDLE?',
    options: ['Exits IDLE', 'Prints exit()', 'Closes the script window only', 'Restarts the shell'],
    answer: 0,
    explanation: 'Typing `exit()` exits the IDLE shell.'
  },
  {
    question: 'Can IDLE be used for debugging Python code?',
    options: ['Yes', 'No', 'Only in Python 3.9+', 'Only for syntax errors'],
    answer: 0,
    explanation: 'IDLE includes a built-in debugger for step-by-step execution.'
  },
  {
    question: 'Which command clears the screen in IDLE?',
    options: ['clear()', 'cls', 'There is no built-in command', 'reset()'],
    answer: 2,
    explanation: 'IDLE does not support a built-in clear screen command like in terminals.'
  },
  {
    question: 'How can you open a new script file in IDLE?',
    options: ['File > New File', 'Run > New Script', 'Ctrl + Shift + N', 'Shell > New'],
    answer: 0,
    explanation: 'Use File > New File to open a new editing window for script writing.'
  },
  {
    question: 'Tricky: What does `>>>` signify in IDLE?',
    options: ['A prompt for multi-line input', 'An error', 'The shell prompt for interactive input', 'The end of a statement'],
    answer: 2,
    explanation: '>>> is the default Python shell prompt used in IDLE.'
  },
  {
    question: 'Can IDLE run on multiple platforms?',
    options: ['Only Windows', 'Only Linux', 'Yes, cross-platform', 'Only macOS'],
    answer: 2,
    explanation: 'IDLE is written in pure Python and Tkinter, making it cross-platform.'
  }
],
'Operators': [
  {
    question: 'What will be the output of: `10 // 3`?',
    options: ['3.33', '3', '4', '3.0'],
    answer: 1,
    explanation: '`//` is floor division, so `10 // 3` results in `3` (integer division).'
  },
  {
    question: 'Which operator is used for exponentiation in Python?',
    options: ['^', '**', 'exp', '^^'],
    answer: 1,
    explanation: '`**` is used to raise one number to the power of another.'
  },
  {
    question: 'Which of these is a comparison operator?',
    options: ['!=', 'and', '=', 'is'],
    answer: 0,
    explanation: '`!=` checks if two values are not equal, making it a comparison operator.'
  },
  {
    question: 'What is the result of `True + False` in Python?',
    options: ['TypeError', '1', '0', 'TrueFalse'],
    answer: 1,
    explanation: 'In Python, `True` is 1 and `False` is 0. So, `True + False = 1`.'
  },
  {
    question: 'Which operator has the highest precedence?',
    options: ['+', '*', '**', '=='],
    answer: 2,
    explanation: '`**` (exponentiation) has the highest precedence among arithmetic operators.'
  },
  {
    question: 'Tricky: What is the output of `2 + 3 * 4`?',
    options: ['20', '14', '24', '10'],
    answer: 1,
    explanation: 'According to operator precedence, multiplication happens first: 3*4=12, then 2+12=14.'
  },
  {
    question: 'What will be the result of `5 & 3`?',
    options: ['7', '1', '2', '0'],
    answer: 1,
    explanation: '`&` is the bitwise AND operator. 5=101, 3=011; AND = 001 = 1.'
  },
  {
    question: 'Which operator is used to check object identity?',
    options: ['==', '=', 'is', 'equals'],
    answer: 2,
    explanation: '`is` checks if two variables point to the same object in memory.'
  },
  {
    question: 'Which statement is true about `not` operator?',
    options: ['It inverts the truth value', 'It’s used in loops', 'It checks type', 'It multiplies values'],
    answer: 0,
    explanation: '`not` inverts the boolean value: `not True` becomes `False`, and vice versa.'
  },
  {
    question: 'Program: What does this print?\n`a = 3; b = 3.0; print(a == b, a is b)`',
    options: ['True True', 'False False', 'True False', 'False True'],
    answer: 2,
    explanation: '`a == b` is True (values are equal), but `a is b` is False (different types and memory locations).'
  }
],
'For Else in Python': [
  {
    question: 'What is the purpose of the `else` block in a `for` loop?',
    options: [
      'It executes if the loop breaks',
      'It always executes after the loop',
      'It executes if the loop completes without a break',
      'It only works with while loops'
    ],
    answer: 2,
    explanation: 'The `else` block after a `for` loop executes only if the loop wasn’t terminated by a `break`.'
  },
  {
    question: 'What will this code output?\n`for i in range(3):\n  print(i)\nelse:\n  print("Done")`',
    options: ['0 1 2 Done', '0 1 2', 'Done', '0 1 Done'],
    answer: 0,
    explanation: 'Since there’s no `break`, the `else` block executes after the loop ends.'
  },
  {
    question: 'Tricky: What is the output?\n`for i in range(5):\n  if i == 2: break\nelse:\n  print("Completed")`',
    options: ['0 1 2 Completed', '0 1 Completed', '0 1', '0 1 2'],
    answer: 2,
    explanation: 'Loop breaks at i==2, so the `else` block is skipped.'
  },
  {
    question: 'When is the `else` block **not** executed in a `for` loop?',
    options: ['When loop has `continue`', 'When loop finishes', 'When loop breaks', 'When loop runs 0 times'],
    answer: 2,
    explanation: '`else` does not run if `break` is executed in the loop.'
  },
  {
    question: 'Which of these statements is correct about `for-else`?',
    options: [
      'It’s used for error handling',
      'It helps run code after each iteration',
      'It provides an optional block if no break occurred',
      'It is deprecated'
    ],
    answer: 2,
    explanation: 'The `else` is a useful construct to run code only when the loop didn’t terminate with `break`.'
  },
  {
    question: 'Program Output?\n`for i in [1,2,3]:\n  if i == 4: break\nelse:\n  print("No Break")`',
    options: ['No Break', 'Break', '1 2 3', 'Error'],
    answer: 0,
    explanation: 'Since break condition never met, else runs.'
  },
  {
    question: 'Which problem is best solved using `for-else`?',
    options: [
      'Summing numbers',
      'Finding element in a list and confirming absence',
      'Calculating factorial',
      'Printing patterns'
    ],
    answer: 1,
    explanation: '`for-else` is helpful in search scenarios where you want to know if a loop broke early or not.'
  },
  {
    question: 'Tricky: What will be the output?\n`for i in []:\n  print(i)\nelse:\n  print("Empty")`',
    options: ['Empty', 'None', 'Error', 'No Output'],
    answer: 0,
    explanation: 'Loop runs 0 times but no break occurred, so else runs.'
  },
  {
    question: 'Which keyword inside a loop causes the `else` to skip?',
    options: ['continue', 'pass', 'break', 'return'],
    answer: 2,
    explanation: '`break` will skip the `else` part in a `for` loop.'
  },
  {
    question: 'Program Output?\n`for i in range(3):\n  print(i)\n  if i == 1:\n    break\nelse:\n  print("Loop Finished")`',
    options: ['0 1 Loop Finished', '0 1', '0 1 2 Loop Finished', 'Loop Finished'],
    answer: 1,
    explanation: '`break` is hit at i==1, so `else` is skipped.'
  }
],
'Arrays': [
  {
    question: 'Which Python module provides support for creating arrays?',
    options: ['array', 'list', 'collections', 'numpy'],
    answer: 0,
    explanation: 'The `array` module provides support for arrays with uniform data types.'
  },
  {
    question: 'What is the key difference between lists and arrays in Python?',
    options: [
      'Lists store only integers, arrays store all types',
      'Arrays store elements of the same data type, lists can store mixed types',
      'Lists are faster than arrays',
      'Arrays are immutable'
    ],
    answer: 1,
    explanation: 'Arrays require uniform data types, unlike lists which can have mixed types.'
  },
  {
    question: 'Which of these is the correct way to declare an array using the array module?',
    options: [
      'arr = array("int", [1,2,3])',
      'arr = array("i", [1,2,3])',
      'arr = [1,2,3]',
      'arr = array.int([1,2,3])'
    ],
    answer: 1,
    explanation: 'You use typecodes like "i" for integers with the array module.'
  },
  {
    question: 'Tricky: What will be the output?\n```python\nimport array\narr = array.array("i", [1, 2, 3])\narr.append("4")\nprint(arr)```',
    options: ['[1, 2, 3, 4]', 'Error', 'None', '[1, 2, 3]'],
    answer: 1,
    explanation: 'Type mismatch: appending a string to an integer array causes a TypeError.'
  },
  {
    question: 'Which method removes an element from an array at a given index?',
    options: ['delete()', 'remove()', 'pop()', 'discard()'],
    answer: 2,
    explanation: '`pop()` removes an element at a given index in an array.'
  },
  {
    question: 'Which of the following is true about numpy arrays?',
    options: [
      'They allow heterogeneous data',
      'They consume more memory than lists',
      'They are slower than lists',
      'They support vectorized operations'
    ],
    answer: 3,
    explanation: 'Numpy arrays allow fast vectorized operations on entire arrays.'
  },
  {
    question: 'Program: What does this return?\n```python\narr = [1, 2, 3, 4]\nprint(arr[::-1])```',
    options: ['[1, 2, 3, 4]', '[4, 3, 2, 1]', '[1, 3, 2, 4]', 'Syntax Error'],
    answer: 1,
    explanation: 'arr[::-1] returns a reversed list.'
  },
  {
    question: 'Tricky: How to find the number of dimensions in a NumPy array?',
    options: ['arr.shape', 'arr.dim', 'arr.ndim', 'arr.rank'],
    answer: 2,
    explanation: 'The `.ndim` property gives the number of dimensions.'
  },
  {
    question: 'Which method is used to convert an array to a list?',
    options: ['tolist()', 'aslist()', 'convert()', 'tolistArray()'],
    answer: 0,
    explanation: 'The `tolist()` method converts an array to a Python list.'
  },
  {
    question: 'Program: What is the output?\n```python\nimport array\narr = array.array("i", [1, 2, 3])\narr.insert(1, 9)\nprint(arr.tolist())```',
    options: ['[1, 9, 2, 3]', '[1, 2, 9, 3]', '[9, 1, 2, 3]', '[1, 2, 3, 9]'],
    answer: 0,
    explanation: 'insert(1, 9) inserts 9 at index 1.'
  }
],
},
'JavaScript':{
  'Variables': [
  {
    question: 'Which of the following is a valid variable declaration in JavaScript?',
    options: ['var 1value = 10;', 'let value = 10;', 'const = value 10;', 'int value = 10;'],
    answer: 1,
    explanation: 'Variables can be declared using var, let, or const. "let value = 10;" is valid.'
  },
  {
    question: 'What is the output of the following code?\n\nvar a = 10;\nvar a = 20;\nconsole.log(a);',
    options: ['10', '20', 'Error', 'undefined'],
    answer: 1,
    explanation: 'Using var, variables can be redeclared. So final value of a is 20.'
  },
  {
    question: 'Which variable declaration is block scoped?',
    options: ['var', 'let', 'both var and let', 'none'],
    answer: 1,
    explanation: 'let and const are block-scoped, whereas var is function-scoped.'
  },
  {
    question: 'What is the output?\n\nconsole.log(typeof undeclaredVar);',
    options: ['"undefined"', '"object"', '"null"', 'Error'],
    answer: 0,
    explanation: 'Accessing an undeclared variable with typeof does not throw error and returns "undefined".'
  },
  {
    question: 'Which keyword cannot be reassigned after declaration?',
    options: ['var', 'let', 'const', 'None of these'],
    answer: 2,
    explanation: 'const variables cannot be reassigned after their initial value is set.'
  },
  {
    question: 'What is hoisting in JavaScript?',
    options: [
      'Variables and functions are moved to the top of their scope.',
      'Variables are blocked.',
      'Variables are deleted automatically.',
      'Variables are ignored in strict mode.'
    ],
    answer: 0,
    explanation: 'Hoisting means variable and function declarations are moved to the top of their scope.'
  },
  {
    question: 'Which of these will throw an error?\n\nconst x;\nx = 5;',
    options: ['Yes', 'No', 'Only in strict mode', 'None of the above'],
    answer: 0,
    explanation: 'const must be initialized at the time of declaration.'
  },
  {
    question: 'What will be the output?\n\nlet a = "5";\nlet b = 2;\nconsole.log(a + b);',
    options: ['7', '"7"', '"52"', 'Error'],
    answer: 2,
    explanation: 'JavaScript performs string concatenation when one operand is a string.'
  },
  {
    question: 'Which of the following is not a reserved keyword in JavaScript?',
    options: ['var', 'let', 'const', 'define'],
    answer: 3,
    explanation: 'define is not a reserved keyword in JavaScript.'
  },
  {
    question: 'What is the output of the following code?\n\nlet x = 10;\n{\n  let x = 20;\n  console.log(x);\n}\nconsole.log(x);',
    options: ['20 10', '10 20', '20 20', '10 10'],
    answer: 0,
    explanation: 'let is block scoped. The inner x shadows the outer x inside the block.'
  }
],
'Primitives and Objects': [
  {
    question: 'Which of the following is a primitive type in JavaScript?',
    options: ['String', 'Array', 'Object', 'Function'],
    answer: 0,
    explanation: 'String (like "hello") is a primitive type. Arrays, objects, and functions are non-primitive.'
  },
  {
    question: 'What is the result of `typeof null` in JavaScript?',
    options: ['"null"', '"undefined"', '"object"', '"null object"'],
    answer: 2,
    explanation: 'Due to a historical bug, typeof null returns "object".'
  },
  {
    question: 'Which of the following is a non-primitive type?',
    options: ['undefined', 'number', 'symbol', 'array'],
    answer: 3,
    explanation: 'Arrays are objects, which are non-primitive.'
  },
  {
    question: 'What is the output?\n\nlet x = [1,2,3];\nlet y = x;\ny.push(4);\nconsole.log(x);',
    options: ['[1,2,3]', '[1,2,3,4]', '[4]', 'Error'],
    answer: 1,
    explanation: 'Objects (including arrays) are assigned by reference, so changes to `y` affect `x`.'
  },
  {
    question: 'Which statement is true?',
    options: [
      'Primitive types are immutable.',
      'Object types are passed by value.',
      'Arrays are primitive types.',
      'Functions are primitive types.'
    ],
    answer: 0,
    explanation: 'Primitive types (like number, boolean, string) are immutable.'
  },
  {
    question: 'What is the output?\n\nlet a = 10;\nlet b = a;\nb = 20;\nconsole.log(a);',
    options: ['10', '20', 'undefined', 'null'],
    answer: 0,
    explanation: 'Primitive types are copied by value, so changing `b` does not affect `a`.'
  },
  {
    question: 'What is the difference between primitive and object types in terms of memory?',
    options: [
      'Primitive types store references.',
      'Object types store values directly.',
      'Primitive types store values directly; objects store references.',
      'They both store values directly.'
    ],
    answer: 2,
    explanation: 'Primitive types are stored directly, while objects store references to memory locations.'
  },
  {
    question: 'Which of these statements modifies an object correctly?',
    options: [
      'const obj = {}; obj = {a: 1};',
      'const obj = {a:1}; obj.a = 2;',
      'let obj = {}; const obj.a = 3;',
      'All of the above'
    ],
    answer: 1,
    explanation: 'You can change properties of a const object, but not reassign the object itself.'
  },
  {
    question: 'Which of these comparisons returns true?\n\n{} === {}',
    options: ['true', 'false', 'undefined', 'Throws error'],
    answer: 1,
    explanation: 'Two different object literals are not the same in memory, so `===` returns false.'
  },
  {
    question: 'What will this print?\n\nlet str1 = "hello";\nlet str2 = "hello";\nconsole.log(str1 === str2);',
    options: ['false', 'true', 'undefined', 'error'],
    answer: 1,
    explanation: 'Primitive strings with the same value are strictly equal because they’re compared by value.'
  }
],
'Operators and Expressions': [
  {
    question: 'What will be the result of `3 + "3"` in JavaScript?',
    options: ['6', '"6"', '"33"', 'NaN'],
    answer: 2,
    explanation: 'The `+` operator with a string performs concatenation, resulting in "33".'
  },
  {
    question: 'What is the value of `true + false`?',
    options: ['1', 'truefalse', 'NaN', '0'],
    answer: 0,
    explanation: 'true is 1 and false is 0 in arithmetic context, so 1 + 0 = 1.'
  },
  {
    question: 'Which of the following operators has the highest precedence?',
    options: ['+', '&&', '==', '*'],
    answer: 3,
    explanation: 'Multiplication (*) has a higher precedence than addition, logical AND, or equality.'
  },
  {
    question: 'What is the output of `typeof NaN`?',
    options: ['"NaN"', '"undefined"', '"number"', '"object"'],
    answer: 2,
    explanation: 'Although NaN stands for "Not-a-Number", its type is still "number".'
  },
  {
    question: 'What is the output?\n\nconsole.log(1 + 2 + "3");',
    options: ['33', '123', '"33"', '"123"'],
    answer: 2,
    explanation: '1 + 2 = 3, then 3 + "3" = "33" (string).'
  },
  {
    question: 'What is the result of `"5" - 2`?',
    options: ['"3"', '3', 'NaN', '"52"'],
    answer: 1,
    explanation: 'The `-` operator triggers numeric coercion, so "5" - 2 = 3.'
  },
  {
    question: 'Which of the following will return true?\n\n"2" == 2',
    options: ['true', 'false', 'TypeError', 'undefined'],
    answer: 0,
    explanation: 'Loose equality (==) allows type coercion, so "2" == 2 is true.'
  },
  {
    question: 'What is the output?\n\nlet x = 0;\nx++;\nconsole.log(x);',
    options: ['0', '1', '2', 'undefined'],
    answer: 1,
    explanation: 'x++ increments x after using it, so final value is 1.'
  },
  {
    question: 'What does `===` check in JavaScript?',
    options: [
      'Value only',
      'Type only',
      'Both value and type',
      'It performs deep comparison'
    ],
    answer: 2,
    explanation: '`===` checks both value and type (strict equality).'
  },
  {
    question: 'What is the output of this code?\n\nlet a = 10;\na += "2";\nconsole.log(typeof a);',
    options: ['"number"', '"string"', '"undefined"', '"object"'],
    answer: 1,
    explanation: 'a becomes "102", which is a string, after += with a string.'
  }
],
'Conditional Expressions': [
  {
    question: 'What is the output of this expression?\n\nfalse || true && false',
    options: ['true', 'false', 'Syntax Error', 'undefined'],
    answer: 1,
    explanation: '&& has higher precedence than ||, so the result is false || (true && false) = false.'
  },
  {
    question: 'What does the ternary operator do in JavaScript?',
    options: ['Performs arithmetic', 'Evaluates a condition and returns a value', 'Declares a variable', 'Loops through values'],
    answer: 1,
    explanation: 'The ternary operator `condition ? expr1 : expr2` evaluates a condition and returns one of two values.'
  },
  {
    question: 'Which of the following is a correct syntax for ternary?',
    options: [
      'if (a > b) ? a : b;',
      '(a > b) ? a : b;',
      '(a > b) : a ? b;',
      'a > b ? : a b'
    ],
    answer: 1,
    explanation: 'Correct ternary syntax is: `condition ? value_if_true : value_if_false`.'
  },
  {
    question: 'What is the result of the following?\n\nlet x = 10;\nlet y = (x > 5) ? "High" : "Low";',
    options: ['High', 'Low', 'true', 'undefined'],
    answer: 0,
    explanation: 'Since 10 > 5 is true, the ternary returns "High".'
  },
  {
    question: 'Which is equivalent to: if (a) { return b; } else { return c; }',
    options: [
      'return a && b || c;',
      'return a ? b : c;',
      'return a : b ? c;',
      'return b : c ? a;'
    ],
    answer: 1,
    explanation: 'The ternary operator `a ? b : c` is shorthand for that if-else.'
  },
  {
    question: 'What is the output?\n\nconsole.log(null ? "Yes" : "No");',
    options: ['Yes', 'No', 'null', 'undefined'],
    answer: 1,
    explanation: 'null is falsy, so ternary returns "No".'
  },
  {
    question: 'What is the value of `x`?\n\nlet x = (false && true) ? 1 : 2;',
    options: [1, 2, 'false', 'true'],
    answer: 1,
    explanation: 'false && true is false → 2 is returned.'
  },
  {
    question: 'Which value is falsy in JavaScript?',
    options: ['"false"', '[]', '0', '{}'],
    answer: 2,
    explanation: '0 is a falsy value; others are truthy.'
  },
  {
    question: 'Evaluate this expression:\n\n!!"Hello"',
    options: ['true', 'false', 'NaN', 'Error'],
    answer: 0,
    explanation: '!! coerces the value into a boolean; "Hello" is truthy, so result is true.'
  },
  {
    question: 'Which of the following values will NOT trigger the else block?\n\nif (value) {\n  console.log("Then");\n} else {\n  console.log("Else");\n}',
    options: ['0', 'undefined', 'null', '"0"'],
    answer: 3,
    explanation: '"0" is a non-empty string → it is truthy → else block won’t run.'
  }
],
'Functions': [
  {
    question: 'What is the output of this code?\n\nfunction test() {}\nconsole.log(typeof test);',
    options: ['undefined', 'object', 'function', 'string'],
    answer: 2,
    explanation: 'In JavaScript, functions are of the type "function".'
  },
  {
    question: 'What does the `return` statement do inside a function?',
    options: ['Stops execution and returns a value', 'Declares a new variable', 'Loops through data', 'Calls another function'],
    answer: 0,
    explanation: '`return` ends the function execution and returns a value to the caller.'
  },
  {
    question: 'Which of the following correctly defines a function expression?',
    options: [
      'function sum(a, b) { return a + b; }',
      'var sum = function(a, b) { return a + b; };',
      'sum(a, b) = function { return a + b; }',
      'function:sum(a,b)=>a+b'
    ],
    answer: 1,
    explanation: 'Function expressions assign an anonymous function to a variable.'
  },
  {
    question: 'What is the output?\n\nfunction foo(a, b) {\n  return;\n  a + b;\n}\nconsole.log(foo(2, 3));',
    options: ['5', 'undefined', 'null', 'NaN'],
    answer: 1,
    explanation: 'Because `return` is followed by a line break, nothing is returned (undefined).'
  },
  {
    question: 'What is a higher-order function in JavaScript?',
    options: [
      'A function that returns another function or takes one as an argument',
      'A function with higher precedence',
      'A function with multiple return statements',
      'A function that calls only arrow functions'
    ],
    answer: 0,
    explanation: 'Higher-order functions can take or return other functions.'
  },
  {
    question: 'What is the output?\n\n(function(x) {\n  return x * x;\n})(5);',
    options: ['10', '25', '5', 'undefined'],
    answer: 1,
    explanation: 'This is an Immediately Invoked Function Expression (IIFE) → returns 25.'
  },
  {
    question: 'What does hoisting mean in terms of functions?',
    options: [
      'Functions must be declared before use',
      'Function declarations are moved to the top of scope',
      'Functions are not scoped',
      'Function parameters are global'
    ],
    answer: 1,
    explanation: 'Function declarations are hoisted, allowing them to be used before declaration.'
  },
  {
    question: 'What is the output?\n\nvar a = 1;\nfunction test() {\n  var a = 2;\n  console.log(a);\n}\ntest();',
    options: ['1', '2', 'undefined', 'ReferenceError'],
    answer: 1,
    explanation: 'The local variable `a = 2` shadows the outer variable inside the function.'
  },
  {
    question: 'Can functions be nested in JavaScript?',
    options: ['Yes', 'No', 'Only in ES6', 'Only in strict mode'],
    answer: 0,
    explanation: 'Yes, functions can be nested in JavaScript and form closures.'
  },
  {
    question: 'What is the output?\n\nfunction outer() {\n  let x = 10;\n  return function inner() {\n    return x;\n  };\n}\nconst result = outer();\nconsole.log(result());',
    options: ['undefined', '10', 'function', 'null'],
    answer: 1,
    explanation: 'Closures allow `inner()` to access variables from `outer()` even after it returns.'
  }
],
'String and String Methods': [
  {
    question: 'What is the output of this code?\n\nconsole.log("JavaScript".charAt(4));',
    options: ['S', 'c', 'v', 'a'],
    answer: 0,
    explanation: '`charAt(4)` returns the character at index 4, which is "S".'
  },
  {
    question: 'Which method is used to check if a string contains a specific substring?',
    options: ['search()', 'includes()', 'indexOf()', 'contains()'],
    answer: 1,
    explanation: '`includes()` returns true if the substring exists in the string.'
  },
  {
    question: 'What is the output?\n\nconsole.log("hello".toUpperCase());',
    options: ['Hello', 'HELLO', 'hello', 'Error'],
    answer: 1,
    explanation: '`toUpperCase()` converts all letters to uppercase.'
  },
  {
    question: 'What does `slice(1, 4)` return for the string "abcdef"?',
    options: ['bcd', 'abc', 'cde', 'bcde'],
    answer: 0,
    explanation: '`slice(start, end)` returns substring from index 1 to 3, excluding 4.'
  },
  {
    question: 'What is the output?\n\nconsole.log("a-b-c".split("-"));',
    options: [['a', 'b', 'c'], ['a-b-c'], ['abc'], 'SyntaxError'],
    answer: 0,
    explanation: '`split("-")` breaks the string at every "-" and returns an array.'
  },
  {
    question: 'Which string method returns the position of the first match of a substring?',
    options: ['includes()', 'indexOf()', 'search()', 'match()'],
    answer: 1,
    explanation: '`indexOf()` returns the index of the first occurrence of a substring.'
  },
  {
    question: 'What will this code output?\n\nconsole.log("   trim   ".trim());',
    options: ['"trim"', '" trim "', '"   trim   "', '""'],
    answer: 0,
    explanation: '`trim()` removes whitespace from both ends of a string.'
  },
  {
    question: 'What is the difference between `substr()` and `substring()`?',
    options: [
      '`substr(start, length)` and `substring(start, end)`',
      'They are the same',
      'Only `substr()` works on arrays',
      'Both remove whitespace'
    ],
    answer: 0,
    explanation: '`substr` takes length, `substring` takes end index.'
  },
  {
    question: 'What is the output?\n\nconsole.log("Hello".repeat(3));',
    options: ['HelloHelloHello', 'Hello3', 'Hello Hello Hello', 'Error'],
    answer: 0,
    explanation: '`repeat(n)` repeats the string `n` times.'
  },
  {
    question: 'Which method is used to replace a part of a string?',
    options: ['replace()', 'change()', 'swap()', 'substitute()'],
    answer: 0,
    explanation: '`replace()` is used to replace substrings in a string.'
  }
],
'Array Methods': [
  {
    question: 'What is the output?\n\nconsole.log([1, 2, 3].push(4));',
    options: ['[1,2,3,4]', '3', '4', '4 (new length of the array)'],
    answer: 3,
    explanation: 'push() adds the element and returns the new length of the array.'
  },
  {
    question: 'Which method is used to remove the last element from an array?',
    options: ['shift()', 'pop()', 'splice()', 'remove()'],
    answer: 1,
    explanation: '`pop()` removes the last element and returns it.'
  },
  {
    question: 'What is the output?\n\nconsole.log([10, 20, 30].shift());',
    options: ['10', '30', '0', '[20, 30]'],
    answer: 0,
    explanation: '`shift()` removes and returns the first element of the array.'
  },
  {
    question: 'Which method creates a new array with all elements that pass a test?',
    options: ['map()', 'reduce()', 'filter()', 'forEach()'],
    answer: 2,
    explanation: '`filter()` is used to filter array elements based on a condition.'
  },
  {
    question: 'What is the output?\n\nconsole.log([1, 2, 3].map(x => x * 2));',
    options: ['[2,4,6]', '[1,2,3]', '[1,4,9]', 'undefined'],
    answer: 0,
    explanation: '`map()` applies the function to each element and returns a new array.'
  },
  {
    question: 'What does `reduce()` do in JavaScript?',
    options: [
      'Reduces array size',
      'Executes a reducer function on each element and returns a single value',
      'Filters out elements',
      'Maps elements to a new array'
    ],
    answer: 1,
    explanation: '`reduce()` reduces an array to a single value using a callback.'
  },
  {
    question: 'What is the output?\n\nconsole.log(["a", "b", "c"].join("-"));',
    options: ['a-b-c', 'abc', '["a-b-c"]', 'Error'],
    answer: 0,
    explanation: '`join("-")` joins elements with the hyphen.'
  },
  {
    question: 'What does `splice(1, 2)` do to the array [10, 20, 30, 40]?',
    options: [
      'Removes 2 elements from index 1',
      'Removes elements 1 and 2',
      'Removes 20 and 30',
      'All of the above'
    ],
    answer: 3,
    explanation: '`splice(1,2)` removes 2 elements starting from index 1.'
  },
  {
    question: 'What is the output?\n\nconsole.log([1, 2, 3].includes(2));',
    options: ['true', 'false', 'undefined', 'null'],
    answer: 0,
    explanation: '`includes()` checks if the array contains the given value.'
  },
  {
    question: 'Which of the following mutates the original array?',
    options: ['map()', 'filter()', 'slice()', 'reverse()'],
    answer: 3,
    explanation: '`reverse()` modifies the original array by reversing its order.'
  }
],
'Script tag': [
  {
    question: 'Which HTML tag is used to include JavaScript in a webpage?',
    options: ['<js>', '<javascript>', '<script>', '<code>'],
    answer: 2,
    explanation: 'The <script> tag is used to include JavaScript code inside HTML.'
  },
  {
    question: 'What is the correct way to reference an external JavaScript file?',
    options: [
      '<script src="file.js">',
      '<script href="file.js">',
      '<script link="file.js">',
      '<js src="file.js">'
    ],
    answer: 0,
    explanation: 'The "src" attribute is used to link external JavaScript files in the <script> tag.'
  },
  {
    question: 'Where should the <script> tag be placed for better page load performance?',
    options: ['<head>', 'Before </html>', 'At the end of <body>', 'Anywhere in the page'],
    answer: 2,
    explanation: 'Placing <script> at the end of <body> ensures HTML loads before scripts execute.'
  },
  {
    question: 'What is the default value of the `async` attribute in <script> tag?',
    options: ['true', 'false', 'not set', 'depends on browser'],
    answer: 2,
    explanation: 'If neither async nor defer is set, scripts are executed immediately when encountered.'
  },
  {
    question: 'Which attribute tells the browser to execute the script after the HTML is parsed?',
    options: ['async', 'defer', 'type', 'src'],
    answer: 1,
    explanation: '`defer` delays execution of the script until the page has been parsed.'
  },
  {
    question: 'What happens if you use both async and defer in a script tag?',
    options: [
      'async is ignored',
      'defer is ignored',
      'both are used',
      'it causes an error'
    ],
    answer: 1,
    explanation: 'If both are present, defer is ignored and async behavior is applied.'
  },
  {
    question: 'How can you prevent older browsers from executing unsupported script?',
    options: [
      'Use HTML comments around script',
      'Use <noscript>',
      'Use defer',
      'Use type="text/js"'
    ],
    answer: 0,
    explanation: 'Older browsers can ignore script tag content wrapped in HTML comments'
  },
  {
    question: 'What does the `type` attribute in script tag specify?',
    options: [
      'Script behavior',
      'File extension',
      'MIME type of the script',
      'Function type'
    ],
    answer: 2,
    explanation: 'The type attribute specifies the MIME type (usually "text/javascript").'
  },
  {
    question: 'What is the use of the <noscript> tag?',
    options: [
      'To disable JavaScript',
      'To define scripts with no output',
      'To provide alternative content for users with JavaScript disabled',
      'To comment out script sections'
    ],
    answer: 2,
    explanation: 'The <noscript> tag provides fallback content if scripts are not supported or enabled.'
  }
],
'Console Object': [
  {
    question: 'What does `console.log()` do in JavaScript?',
    options: ['Displays output on web page', 'Logs a message to the console', 'Creates a popup', 'Stops script execution'],
    answer: 1,
    explanation: '`console.log()` prints output to the browser’s developer console, mainly used for debugging.'
  },
  {
    question: 'Which of the following is NOT a valid console method?',
    options: ['console.error()', 'console.print()', 'console.warn()', 'console.info()'],
    answer: 1,
    explanation: '`console.print()` is not a valid method. The correct ones include log, error, warn, and info.'
  },
  {
    question: 'What is the use of `console.table()`?',
    options: ['Prints data in tabular format', 'Prints HTML table', 'Prints object as string', 'Clears the console'],
    answer: 0,
    explanation: '`console.table()` displays tabular data in a neat, readable format, especially for arrays/objects.'
  },
  {
    question: 'What does `console.clear()` do?',
    options: ['Deletes the browser cache', 'Clears all variables', 'Clears the console screen', 'Resets the browser window'],
    answer: 2,
    explanation: '`console.clear()` clears the output displayed in the developer console.'
  },
  {
    question: 'What will be the output?\n\nconsole.log(typeof console);',
    options: ['object', 'function', 'undefined', 'console'],
    answer: 0,
    explanation: '`console` is an object that provides access to browser debugging tools.'
  },
  {
    question: 'Which method shows a warning in the console?',
    options: ['console.log()', 'console.warn()', 'console.error()', 'console.info()'],
    answer: 1,
    explanation: '`console.warn()` outputs a warning message with a yellow icon.'
  },
  {
    question: 'What will this code output?\n\nconsole.error("Error occurred");',
    options: ['Nothing', 'Throws an error', 'Displays red-colored error in console', 'Alerts "Error occurred"'],
    answer: 2,
    explanation: '`console.error()` prints an error message in red in most browsers.'
  },
  {
    question: 'How can you count the number of times a function is called?',
    options: ['console.repeat()', 'console.count()', 'console.times()', 'console.track()'],
    answer: 1,
    explanation: '`console.count()` logs the number of times it is called with the same label.'
  },
  {
    question: 'What will this code do?\n\nconsole.group("Start");\nconsole.log("Inside group");\nconsole.groupEnd();',
    options: ['Nothing', 'Throws error', 'Groups logs in console', 'Clears log group'],
    answer: 2,
    explanation: '`console.group()` and `console.groupEnd()` are used to group related messages.'
  },
  {
    question: 'How do you measure the execution time of a block of code?',
    options: ['console.time()', 'console.delay()', 'console.clock()', 'console.sleep()'],
    answer: 0,
    explanation: '`console.time()` starts a timer, and `console.timeEnd()` ends it to measure performance.'
  }
],
'alert,prompt and confirm': [
  {
    question: 'What does `alert("Hello!")` do?',
    options: ['Prints to console', 'Shows a message box', 'Prompts user for input', 'Returns true/false'],
    answer: 1,
    explanation: '`alert()` displays a simple message box with an OK button.'
  },
  {
    question: 'What is the return value of `alert()`?',
    options: ['true', 'false', 'undefined', 'Hello!'],
    answer: 2,
    explanation: '`alert()` does not return any meaningful value, it returns undefined.'
  },
  {
    question: 'Which method is used to get user input in JavaScript?',
    options: ['alert()', 'prompt()', 'confirm()', 'input()'],
    answer: 1,
    explanation: '`prompt()` displays a dialog box asking for user input and returns it as a string.'
  },
  {
    question: 'What does `confirm("Are you sure?")` return if the user clicks "OK"?',
    options: ['true', 'false', 'undefined', '"Are you sure?"'],
    answer: 0,
    explanation: '`confirm()` returns true if the user clicks OK and false if Cancel is clicked.'
  },
  {
    question: 'Which of the following will pause code execution until the user responds?',
    options: ['setTimeout()', 'console.log()', 'alert()', 'Math.random()'],
    answer: 2,
    explanation: '`alert()`, `prompt()`, and `confirm()` all block further execution until the dialog is closed.'
  },
  {
    question: 'Which method will return null if the user cancels the input?',
    options: ['alert()', 'prompt()', 'confirm()', 'console.log()'],
    answer: 1,
    explanation: '`prompt()` returns null if the user presses Cancel.'
  },
  {
    question: 'What is the data type returned by `prompt()`?',
    options: ['boolean', 'number', 'string', 'object'],
    answer: 2,
    explanation: '`prompt()` always returns user input as a string or null.'
  },
  {
    question: 'Which is best for confirming a delete action from the user?',
    options: ['alert()', 'prompt()', 'confirm()', 'console.log()'],
    answer: 2,
    explanation: '`confirm()` is used to ask the user to approve or cancel an action.'
  },
  {
    question: 'How can you store a number from `prompt()` safely?',
    options: ['parseInt(prompt())', 'alert(prompt())', 'confirm(prompt())', 'Number(alert())'],
    answer: 0,
    explanation: 'Use `parseInt()` or `Number()` to convert string input to a number.'
  },
  {
    question: 'What is the output of:\n`var a = prompt("Enter"); console.log(typeof a);` if "123" is entered?',
    options: ['number', 'string', 'undefined', 'object'],
    answer: 1,
    explanation: 'The value returned by `prompt()` is always a string.'
  }
],
'DOM, BOM & Window Object': [
  {
    question: 'What does DOM stand for in JavaScript?',
    options: ['Document Object Model', 'Data Object Model', 'Dynamic Object Method', 'Document Ordered Model'],
    answer: 0,
    explanation: 'DOM stands for Document Object Model, which represents the structure of HTML documents.'
  },
  {
    question: 'Which object represents the browser window in JavaScript?',
    options: ['document', 'console', 'window', 'screen'],
    answer: 2,
    explanation: 'The `window` object represents the browser window and is the global object in client-side JavaScript.'
  },
  {
    question: 'How do you access the title of a web page using the DOM?',
    options: ['document.getTitle()', 'window.title', 'document.title', 'title.document'],
    answer: 2,
    explanation: '`document.title` is used to get or set the title of a webpage.'
  },
  {
    question: 'Which of the following is part of the BOM (Browser Object Model)?',
    options: ['document', 'window', 'navigator', 'body'],
    answer: 2,
    explanation: '`navigator` is part of the BOM and provides information about the browser.'
  },
  {
    question: 'Which property gives the height of the browser window’s content area?',
    options: ['screen.height', 'window.innerHeight', 'document.height', 'document.body.clientHeight'],
    answer: 1,
    explanation: '`window.innerHeight` returns the height of the viewport.'
  },
  {
    question: 'What is the output of `typeof window`?',
    options: ['object', 'function', 'window', 'undefined'],
    answer: 0,
    explanation: 'The `window` is an object that contains methods, properties, and events.'
  },
  {
    question: 'Which of these methods is used to select an element by its ID?',
    options: ['getElementById()', 'querySelectorAll()', 'getElementsByClass()', 'selectById()'],
    answer: 0,
    explanation: '`document.getElementById()` is used to access an HTML element by its ID.'
  },
  {
    question: 'Which method opens a new browser window?',
    options: ['window.show()', 'window.open()', 'document.new()', 'window.display()'],
    answer: 1,
    explanation: '`window.open()` is used to open a new browser window or tab.'
  },
  {
    question: 'Which property of the `navigator` object gives the browser name?',
    options: ['navigator.name', 'navigator.appName', 'navigator.browser', 'navigator.getName()'],
    answer: 1,
    explanation: '`navigator.appName` gives the name of the browser.'
  },
  {
    question: 'Which JavaScript object has the `alert()` method?',
    options: ['console', 'document', 'navigator', 'window'],
    answer: 3,
    explanation: 'The `window` object has the `alert()` method, which displays a dialog box.'
  }
],
'Element Navigation': [
  {
    question: 'Which property returns the parent node of an element?',
    options: ['parentElement', 'parentNode', 'getParent()', 'parent'],
    answer: 1,
    explanation: '`parentNode` returns the parent node of the specified node in the DOM hierarchy.'
  },
  {
    question: 'What does `firstChild` return in the DOM?',
    options: ['First child element', 'First text node', 'First child node (could be any type)', 'First attribute'],
    answer: 2,
    explanation: '`firstChild` returns the first child node, which can be an element, text node, or comment.'
  },
  {
    question: 'How can you get the next sibling of an HTML element?',
    options: ['element.next()', 'element.nextNode()', 'element.nextSibling', 'element.getNext()'],
    answer: 2,
    explanation: '`nextSibling` returns the next node at the same level in the DOM tree.'
  },
  {
    question: 'Which DOM property helps skip non-element nodes like text or comment?',
    options: ['nextSibling', 'firstChild', 'nextElementSibling', 'childNode'],
    answer: 2,
    explanation: '`nextElementSibling` only returns element nodes, ignoring text and comments.'
  },
  {
    question: 'What is the difference between `childNodes` and `children`?',
    options: ['No difference', 'children includes only elements; childNodes includes all node types', 'childNodes is deprecated', 'children includes all node types'],
    answer: 1,
    explanation: '`children` only includes element nodes, while `childNodes` includes text, comments, and elements.'
  },
  {
    question: 'What will `document.body.lastElementChild` return?',
    options: ['Last child element of body', 'Last text node of body', 'Last element in the document', 'Throws error'],
    answer: 0,
    explanation: '`lastElementChild` returns the last child that is an element.'
  },
  {
    question: 'How do you access the previous element sibling of a node?',
    options: ['previousElementSibling', 'prevSibling', 'previousNode', 'getPreviousSibling()'],
    answer: 0,
    explanation: '`previousElementSibling` returns the previous sibling that is an element.'
  },
  {
    question: 'Which of the following would return all child nodes including whitespace?',
    options: ['element.children', 'element.childNodes', 'element.getChilds()', 'element.allNodes'],
    answer: 1,
    explanation: '`childNodes` includes all children including text nodes (like whitespace).'
  },
  {
    question: 'What is the best way to loop through all element children of a node?',
    options: ['forEach(element.childNodes)', 'forEach(element.children)', 'element.getElements()', 'element.mapChildren()'],
    answer: 1,
    explanation: '`element.children` is best for iterating only over element nodes.'
  },
  {
    question: 'Which of the following is true about `firstElementChild`?',
    options: ['It may return a text node', 'Returns the first child that is an element', 'It’s the same as firstChild', 'Returns null always'],
    answer: 1,
    explanation: '`firstElementChild` returns the first child node that is an HTML element, skipping text/comments.'
  }
],
'Table Navigation': [
  {
    question: 'Which property is used to access the rows of a table?',
    options: ['table.rows', 'table.getRows()', 'table.rowList', 'table.cells'],
    answer: 0,
    explanation: '`table.rows` returns a live HTMLCollection of all `<tr>` elements in a table.'
  },
  {
    question: 'How do you access the first cell of the second row in a table with ID "myTable"?',
    options: ['myTable.rows[2].cells[1]', 'myTable.rows[1].cells[0]', 'myTable[1][0]', 'myTable.tr[1].td[0]'],
    answer: 1,
    explanation: '`rows[1].cells[0]` gives the first cell (0th index) of the second row (1st index).'
  },
  {
    question: 'What does `table.tBodies` return?',
    options: ['An array of all tbody elements', 'A single tbody element', 'All table rows', 'null'],
    answer: 0,
    explanation: '`tBodies` is a collection (even if there’s only one) of `<tbody>` elements in a table.'
  },
  {
    question: 'Which property allows access to the table header section?',
    options: ['table.head', 'table.thead', 'table.getHeader()', 'table.headers'],
    answer: 1,
    explanation: '`table.tHead` returns the `<thead>` element of the table, if present.'
  },
  {
    question: 'How can you get the total number of rows in a table?',
    options: ['table.rows.length', 'table.length()', 'table.getRowCount()', 'table.tr.length'],
    answer: 0,
    explanation: '`table.rows.length` gives the number of rows (tr elements) in the table.'
  },
  {
    question: 'Which code accesses all cells of the first row?',
    options: ['table.rows[0].cells', 'table.cells[0]', 'table.tBody[0].cells', 'table.tr[0].td'],
    answer: 0,
    explanation: '`table.rows[0].cells` gives all cells (td/th) in the first row.'
  },
  {
    question: 'Which property is used to access the footer of a table?',
    options: ['table.footer', 'table.tFoot', 'table.foot', 'table.bottom'],
    answer: 1,
    explanation: '`table.tFoot` accesses the `<tfoot>` section of the table.'
  },
  {
    question: 'How do you check if a table has any rows?',
    options: ['table.rows > 0', 'table.rows.length > 0', 'table.hasRows()', 'table.rowCount > 0'],
    answer: 1,
    explanation: '`table.rows.length > 0` checks for the existence of rows.'
  },
  {
    question: 'What type of object is `table.rows`?',
    options: ['Array', 'NodeList', 'HTMLCollection', 'Object'],
    answer: 2,
    explanation: '`table.rows` returns an HTMLCollection of row elements.'
  },
  {
    question: 'How can you dynamically insert a new row at the end of a table?',
    options: ['table.insertRow()', 'table.addRow()', 'table.appendRow()', 'table.newRow()'],
    answer: 0,
    explanation: '`insertRow()` is a method used to insert a row dynamically into a table.'
  }
],
'matches,closest and contains': [
  {
    question: 'What does the `matches()` method do in JavaScript?',
    options: [
      'Checks if an element contains a child node',
      'Returns the closest matching element',
      'Checks if the element matches a CSS selector',
      'Finds all matching elements in the DOM'
    ],
    answer: 2,
    explanation: '`matches()` returns true if the element matches the given CSS selector.'
  },
  {
    question: 'Which method returns the nearest ancestor that matches a selector?',
    options: ['element.find()', 'element.closest()', 'element.parent()', 'element.querySelector()'],
    answer: 1,
    explanation: '`closest()` traverses up the DOM to find the closest ancestor (or the element itself) matching the selector.'
  },
  {
    question: 'What does `element.contains(child)` return?',
    options: ['true if child is inside element', 'false if element is parent of child', 'false always', 'Throws error'],
    answer: 0,
    explanation: '`contains()` returns true if the element contains the given child node.'
  },
  {
    question: 'Which of the following will return true?\n`div.matches(".container")` (div has class "container")',
    options: ['true', 'false', 'undefined', 'null'],
    answer: 0,
    explanation: 'If the element has the class specified in the selector, `matches()` will return true.'
  },
  {
    question: 'What is the difference between `closest()` and `querySelector()`?',
    options: [
      '`closest()` searches downward; `querySelector()` searches upward',
      '`closest()` is only for parents; `querySelector()` searches children',
      '`closest()` returns closest ancestor; `querySelector()` searches entire subtree',
      'They are interchangeable'
    ],
    answer: 2,
    explanation: '`closest()` traverses ancestors, while `querySelector()` searches descendants.'
  },
  {
    question: 'Which will return true?\n`document.body.contains(document.querySelector("h1"))`',
    options: ['true', 'false', 'undefined', 'Throws error'],
    answer: 0,
    explanation: 'If `<h1>` exists in the DOM, and is inside `body`, `contains()` returns true.'
  },
  {
    question: 'What will `element.closest(".box")` return if no ancestor matches?',
    options: ['null', 'undefined', 'false', 'Throws error'],
    answer: 0,
    explanation: 'If no match is found, `closest()` returns `null`.'
  },
  {
    question: 'Given `el = document.querySelector(".child")`, how to check if it’s inside `.parent`?',
    options: [
      'el.matches(".parent")',
      'el.contains(".parent")',
      'document.querySelector(".parent").contains(el)',
      'el.closest(".child")'
    ],
    answer: 2,
    explanation: '`contains()` checks if `.parent` contains `.child`.'
  },
  {
    question: 'How does `matches()` differ from `querySelector()`?',
    options: [
      '`matches()` works on elements; `querySelector()` finds elements',
      '`querySelector()` is faster',
      'They are used the same way',
      'Both only work with classes'
    ],
    answer: 0,
    explanation: '`matches()` tests an existing element; `querySelector()` finds one in the DOM.'
  },
  {
    question: 'What is returned by `element.closest("*")`?',
    options: ['The closest ancestor of any type', 'null', 'First matching child', 'Throws error'],
    answer: 0,
    explanation: '`*` matches any element, so it returns the element itself or the first ancestor.'
  }
],
'HTML Attributes and Methods': [
  {
    question: 'Which method is used to get the value of an HTML attribute?',
    options: ['getAttribute()', 'getAttr()', 'getValue()', 'queryAttribute()'],
    answer: 0,
    explanation: '`getAttribute("attributeName")` returns the value of a specified attribute.'
  },
  {
    question: 'What does `setAttribute("class", "active")` do?',
    options: [
      'Gets the current class name',
      'Sets or updates the class attribute to "active"',
      'Adds an event listener',
      'Deletes the class'
    ],
    answer: 1,
    explanation: '`setAttribute()` sets or updates the value of the specified attribute.'
  },
  {
    question: 'How to remove an attribute from an HTML element in JavaScript?',
    options: [
      'element.remove()', 'element.setAttribute(null)', 'element.removeAttribute()', 'element.deleteAttr()'
    ],
    answer: 2,
    explanation: '`removeAttribute("attributeName")` removes the given attribute from the element.'
  },
  {
    question: 'What will `input.getAttribute("type")` return for `<input type="text">`?',
    options: ['input', 'type', 'text', 'undefined'],
    answer: 2,
    explanation: 'It returns `"text"` as the value of the `type` attribute.'
  },
  {
    question: 'Which of the following correctly changes an input type to password?',
    options: [
      'input.type = "password"',
      'input.setAttribute("type", "password")',
      'Both A and B',
      'None of the above'
    ],
    answer: 2,
    explanation: 'You can use either direct property or `setAttribute()` to change the type.'
  },
  {
    question: 'What does `hasAttribute("id")` return?',
    options: ['Attribute value', 'true/false', 'Attribute name', 'null'],
    answer: 1,
    explanation: '`hasAttribute()` returns true if the attribute exists, else false.'
  },
  {
    question: 'Which method retrieves all attribute names of an element?',
    options: ['getAttributeNames()', 'getAllAttributes()', 'getAttrList()', 'element.attrs'],
    answer: 0,
    explanation: '`getAttributeNames()` returns an array of attribute names.'
  },
  {
    question: 'What happens if `setAttribute()` is called on a non-existent attribute?',
    options: [
      'It throws an error',
      'It creates the attribute and assigns the value',
      'It ignores it',
      'It removes all attributes'
    ],
    answer: 1,
    explanation: 'If the attribute doesn’t exist, it will be created.'
  },
  {
    question: 'Given `<a href="https://example.com">`, what does `a.href` return?',
    options: [
      'https://example.com', 
      'The full resolved URL (with protocol and domain)', 
      'null', 
      'a.getAttribute("href")'
    ],
    answer: 1,
    explanation: '`a.href` returns the full absolute URL. `getAttribute("href")` returns the raw value.'
  },
  {
    question: 'Which one is **not** a standard HTML attribute?',
    options: ['title', 'id', 'data-custom', 'className'],
    answer: 3,
    explanation: '`className` is a JavaScript property, not an HTML attribute.'
  }
],
'HTML Insertion Methods': [
  {
    question: 'Which method inserts content at the end of an element?',
    options: ['prepend()', 'append()', 'insertBefore()', 'insertAfter()'],
    answer: 1,
    explanation: '`append()` inserts content as the last child of the element.'
  },
  {
    question: 'What does `element.innerHTML = "<p>Hello</p>"` do?',
    options: [
      'Appends a <p> tag',
      'Deletes all content and adds <p>Hello</p>',
      'Changes the style',
      'Adds text only'
    ],
    answer: 1,
    explanation: '`innerHTML` replaces all content inside the element.'
  },
  {
    question: 'Which method inserts HTML immediately before an element?',
    options: ['appendChild()', 'insertBefore()', 'before()', 'after()'],
    answer: 2,
    explanation: '`before()` inserts a node or string of HTML right before the element.'
  },
  {
    question: 'What is the purpose of `insertAdjacentHTML()`?',
    options: [
      'To replace innerHTML',
      'To insert HTML at specific positions relative to the element',
      'To remove HTML content',
      'To sanitize the HTML'
    ],
    answer: 1,
    explanation: '`insertAdjacentHTML(position, text)` allows inserting HTML before or after the element or its content.'
  },
  {
    question: 'Which position is valid for `insertAdjacentHTML()`?',
    options: ['beforebegin', 'afterbegin', 'beforeend', 'afterend'],
    answer: 0,
    explanation: 'All listed positions are valid, and `beforebegin` places HTML before the element.'
  },
  {
    question: 'Which method adds a new node as the first child of a parent?',
    options: ['append()', 'prepend()', 'before()', 'after()'],
    answer: 1,
    explanation: '`prepend()` adds the content to the beginning of the target element.'
  },
  {
    question: 'What does `document.body.appendChild(newDiv)` do?',
    options: [
      'Replaces the body', 
      'Adds `newDiv` as the last child of body', 
      'Inserts before body', 
      'Throws error if body is empty'
    ],
    answer: 1,
    explanation: '`appendChild()` adds the element as the last child of the parent.'
  },
  {
    question: 'What is the result of `el.textContent = "<b>Hi</b>"`?',
    options: [
      'Adds bold text', 
      'Inserts literal "<b>Hi</b>" as plain text', 
      'Adds HTML content', 
      'Throws an error'
    ],
    answer: 1,
    explanation: '`textContent` treats all input as plain text, so HTML tags are not interpreted.'
  },
  {
    question: 'Which is safer against XSS attacks?',
    options: ['innerHTML', 'textContent', 'insertAdjacentHTML', 'document.write'],
    answer: 1,
    explanation: '`textContent` does not interpret HTML and is safer against injection attacks.'
  },
  {
    question: 'Which insertion method allows inserting raw HTML at a flexible position?',
    options: ['innerText', 'textContent', 'insertAdjacentHTML', 'appendChild'],
    answer: 2,
    explanation: '`insertAdjacentHTML()` supports inserting raw HTML at specific positions like "afterend", "beforebegin", etc.'
  }
],
'Browser Events': [
  {
    question: 'Which event is triggered when a user clicks on an element?',
    options: ['keydown', 'mouseover', 'click', 'change'],
    answer: 2,
    explanation: 'The `click` event occurs when an element is clicked.'
  },
  {
    question: 'What does the `DOMContentLoaded` event signify?',
    options: [
      'All images and resources are loaded',
      'Only the HTML is completely loaded and parsed',
      'The page is fully scrolled',
      'The user interacted with the page'
    ],
    answer: 1,
    explanation: '`DOMContentLoaded` fires when the initial HTML document has been completely loaded and parsed.'
  },
  {
    question: 'What is the output of:\n`window.addEventListener("load", () => console.log("Loaded"));`?',
    options: [
      'It logs immediately',
      'It logs when DOM is parsed',
      'It logs when page and resources are fully loaded',
      'It throws error'
    ],
    answer: 2,
    explanation: '`load` fires when the whole page (including images, stylesheets) is loaded.'
  },
  {
    question: 'Which event is used to detect when a user is typing in an input field?',
    options: ['input', 'change', 'keypress', 'keydown'],
    answer: 0,
    explanation: '`input` event is triggered every time the value of an input changes.'
  },
  {
    question: 'Which event will not bubble up the DOM by default?',
    options: ['click', 'focus', 'keyup', 'mousedown'],
    answer: 1,
    explanation: '`focus` does not bubble; it can be captured during the capture phase.'
  },
  {
    question: 'How can you prevent an event from propagating?',
    options: [
      'event.cancel()',
      'event.preventDefault()',
      'event.stopPropagation()',
      'return false'
    ],
    answer: 2,
    explanation: '`event.stopPropagation()` stops the event from bubbling up the DOM.'
  },
  {
    question: 'Which of the following will remove an event listener?',
    options: [
      'removeEventListener(event, handler)',
      'off(event, handler)',
      'detachEvent(event, handler)',
      'cancelEvent(event, handler)'
    ],
    answer: 0,
    explanation: '`removeEventListener` is the standard method to remove a registered event.'
  },
  {
    question: 'What will `event.preventDefault()` do in a form submit?',
    options: [
      'Submit the form',
      'Stop page refresh',
      'Reset the form',
      'Validate the input'
    ],
    answer: 1,
    explanation: '`preventDefault()` stops the default action, like submitting the form or following a link.'
  },
  {
    question: 'Which event is used to detect a change in a dropdown (`<select>`) menu?',
    options: ['click', 'change', 'select', 'input'],
    answer: 1,
    explanation: '`change` is triggered when the selected option in a `<select>` changes.'
  }
],
'CallBacks': [
  {
    question: 'What is a callback function in JavaScript?',
    options: [
      'A function that returns another function',
      'A function passed as an argument to another function',
      'A function that loops',
      'A recursive function'
    ],
    answer: 1,
    explanation: 'A callback function is passed to another function to be invoked later.'
  },
  {
    question: 'Which of the following demonstrates the use of a callback?',
    options: [
      'setTimeout(print(), 1000);',
      'setTimeout(print, 1000);',
      'setTimeout = print(1000);',
      'print.setTimeout(1000);'
    ],
    answer: 1,
    explanation: '`setTimeout(print, 1000)` correctly passes `print` as a callback.'
  },
  {
    question: 'What will be the output?\n```js\nfunction greet(name, callback) {\n  console.log("Hi " + name);\n  callback();\n}\ngreet("Sam", function() { console.log("Welcome!"); });\n```',
    options: [
      'Hi Sam',
      'Hi Sam Welcome!',
      'Welcome! Hi Sam',
      'Error'
    ],
    answer: 1,
    explanation: 'Both messages are logged in sequence using a callback.'
  },
  {
    question: 'Which is true about callbacks?',
    options: [
      'They must be synchronous',
      'They cannot be anonymous functions',
      'They allow asynchronous operations',
      'They are required for every function'
    ],
    answer: 2,
    explanation: 'Callbacks are especially useful for handling asynchronous events like API responses.'
  },
  {
    question: 'Identify the callback in this code:\n```js\narray.map(function(x) { return x * 2; });\n```',
    options: ['array', 'x', 'map', 'function(x) { return x * 2; }'],
    answer: 3,
    explanation: 'The function passed to `map()` is the callback.'
  },
  {
    question: 'What is a common issue with using many nested callbacks?',
    options: [
      'Synchronous execution',
      'Callback queue overflow',
      'Callback hell',
      'Memory leaks'
    ],
    answer: 2,
    explanation: 'Deep nesting of callbacks leads to "callback hell", making code hard to read and maintain.'
  },
  {
    question: 'How can you avoid callback hell?',
    options: ['Using more callbacks', 'setTimeout chaining', 'Using Promises or async/await', 'Nested functions'],
    answer: 2,
    explanation: 'Promises and async/await help flatten the structure and make code cleaner.'
  },
  {
    question: 'What is the role of the second parameter in `addEventListener("click", handleClick)`?',
    options: ['An event', 'A string', 'A callback function', 'An element'],
    answer: 2,
    explanation: 'The second argument is the callback that runs when the event occurs.'
  },
  {
    question: 'Which of the following is an example of a named callback function?',
    options: [
      'function() { return 1; }',
      '() => console.log("Hi")',
      'function namedFn() {}',
      'setTimeout(console.log("Done"))'
    ],
    answer: 2,
    explanation: '`function namedFn() {}` defines a named callback.'
  },
  {
    question: 'What will this log?\n```js\nfunction fetch(callback) {\n  setTimeout(() => callback("Data received"), 1000);\n}\nfetch(msg => console.log(msg));\n```',
    options: [
      'undefined',
      'Immediately logs "Data received"',
      'Logs "Data received" after 1 second',
      'Throws error'
    ],
    answer: 2,
    explanation: 'The callback is invoked after a 1-second delay with the message.'
  }
],
'Promises': [
  {
    question: 'What is a Promise in JavaScript?',
    options: [
      'A function that always returns true',
      'An object representing a future value',
      'A callback function',
      'An event handler'
    ],
    answer: 1,
    explanation: 'A Promise is an object representing the eventual completion or failure of an asynchronous operation.'
  },
  {
    question: 'Which states can a JavaScript Promise have?',
    options: [
      'Init, Run, Complete',
      'Pending, Fulfilled, Rejected',
      'Idle, Executing, Finished',
      'Waiting, Success, Error'
    ],
    answer: 1,
    explanation: 'A Promise can be in one of three states: pending, fulfilled (resolved), or rejected.'
  },
  {
    question: 'What does the `.then()` method do in a Promise?',
    options: [
      'Runs if the promise is rejected',
      'Chains multiple promises',
      'Registers a callback to run when the promise resolves',
      'Initializes a promise'
    ],
    answer: 2,
    explanation: 'The `.then()` method is used to define what happens after a promise resolves.'
  },
  {
    question: 'What is the purpose of the `.catch()` method in Promises?',
    options: [
      'To execute when the promise is pending',
      'To throw an error',
      'To execute a final block of code',
      'To handle errors if the promise is rejected'
    ],
    answer: 3,
    explanation: 'The `.catch()` method handles errors (rejections) in promises.'
  },
  {
    question: 'What is the output?\n```js\nPromise.resolve(10).then(val => val + 5).then(console.log);\n```',
    options: ['10', '15', 'undefined', 'Error'],
    answer: 1,
    explanation: 'The value 10 is resolved, then 5 is added, resulting in 15.'
  },
  {
    question: 'What happens if you return a Promise from inside `.then()`?',
    options: [
      'It throws an error',
      'It nests promises',
      'The next `.then()` waits for it to resolve',
      'The previous `.then()` is skipped'
    ],
    answer: 2,
    explanation: 'Returning a promise from a `.then()` allows chaining by waiting for the returned promise to resolve.'
  },
  {
    question: 'Which method is used to run multiple promises in parallel?',
    options: ['Promise.chain()', 'Promise.all()', 'Promise.race()', 'Promise.batch()'],
    answer: 1,
    explanation: '`Promise.all()` executes multiple promises in parallel and resolves when all are complete.'
  },
  {
    question: 'What will be the output?\n```js\nPromise.reject("Error").catch(err => console.log(err));\n```',
    options: ['undefined', 'Error', 'Exception', 'null'],
    answer: 1,
    explanation: 'The rejected promise is caught and "Error" is logged.'
  },
  {
    question: 'How do you manually create a rejected Promise?',
    options: [
      'new Promise(reject("Error"))',
      'Promise.create("Error")',
      'Promise.reject("Error")',
      'Promise.fail("Error")'
    ],
    answer: 2,
    explanation: 'You use `Promise.reject()` to manually create a rejected promise.'
  },
  {
    question: 'Which of the following best explains the need for Promises?',
    options: [
      'To block execution until a task is done',
      'To simplify async code and avoid callback hell',
      'To run code multiple times',
      'To sync browser rendering'
    ],
    answer: 1,
    explanation: 'Promises make asynchronous code cleaner and avoid deeply nested callbacks.'
  }
],
'Finally clause': [
  {
    question: 'What is the purpose of the `finally` clause in JavaScript?',
    options: [
      'To catch exceptions',
      'To execute code only if no error occurs',
      'To execute code regardless of success or failure',
      'To throw new exceptions'
    ],
    answer: 2,
    explanation: 'The `finally` block is used to execute code after `try` and `catch`, regardless of the result.'
  },
  {
    question: 'Which block always executes in a try-catch-finally structure?',
    options: ['try', 'catch', 'finally', 'none'],
    answer: 2,
    explanation: 'The `finally` block always runs whether or not an error occurred.'
  },
  {
    question: 'What is the output?\n```js\ntry {\n  throw new Error("Oops");\n} catch(e) {\n  console.log("Caught");\n} finally {\n  console.log("Finally");\n}\n```',
    options: ['Caught', 'Finally', 'Caught Finally', 'Error'],
    answer: 2,
    explanation: 'Both `catch` and `finally` blocks execute, so the output is "Caught Finally".'
  },
  {
    question: 'What happens if there’s a `return` in both the `try` and `finally` blocks?',
    options: [
      'Return from try is executed',
      'Return from finally overrides try',
      'It throws an error',
      'None of the above'
    ],
    answer: 1,
    explanation: 'The `finally` block overrides any return statement in `try`.'
  },
  {
    question: 'Can the `finally` block execute if there’s no error in the `try` block?',
    options: ['Yes', 'No', 'Only in async functions', 'Only in catch'],
    answer: 0,
    explanation: 'The `finally` block executes regardless of whether an exception is thrown or not.'
  },
  {
    question: 'What is the result?\n```js\nfunction test() {\n try {\n   return "try";\n } finally {\n   return "finally";\n }\n}\nconsole.log(test());\n```',
    options: ['try', 'finally', 'undefined', 'Error'],
    answer: 1,
    explanation: 'The return in `finally` overrides the return in `try`, so it prints "finally".'
  },
  {
    question: 'Is it mandatory to have a `catch` block with a `finally` block?',
    options: ['Yes', 'No', 'Only if try fails', 'Only in async code'],
    answer: 1,
    explanation: 'You can have a `finally` block without a `catch`, but a `try` block is still required.'
  },
  {
    question: 'Where is `finally` most useful?',
    options: [
      'Cleaning up resources',
      'Throwing errors',
      'Interrupting loops',
      'Pausing code'
    ],
    answer: 0,
    explanation: '`finally` is commonly used to clean up resources like closing files or stopping loaders.'
  },
  {
    question: 'What happens if there’s an exception in the `finally` block?',
    options: [
      'It’s ignored',
      'It overrides previous errors',
      'It is thrown and needs handling',
      'It stops script execution silently'
    ],
    answer: 2,
    explanation: 'An error in `finally` is thrown and must be handled, possibly overriding earlier ones.'
  },
  {
    question: 'What is printed?\n```js\ntry {\n console.log("Start");\n} finally {\n console.log("End");\n}\n```',
    options: ['Start', 'End', 'Start End', 'Nothing'],
    answer: 2,
    explanation: 'Both `try` and `finally` execute, so the output is "Start End".'
  }
],
'Prototypes': [
  {
    question: 'What is a prototype in JavaScript?',
    options: [
      'A blueprint for creating HTML elements',
      'An internal property that objects use to inherit from other objects',
      'A method for defining CSS styles',
      'A reserved word for loops'
    ],
    answer: 1,
    explanation: 'In JavaScript, every object has a prototype which is another object that it inherits properties and methods from.'
  },
  {
    question: 'How do you add a new method to all instances of an object?',
    options: [
      'obj.addMethod()',
      'Object.prototype.newMethod = function() {}',
      'obj.prototype.newMethod()',
      'obj = Object.create(method)'
    ],
    answer: 1,
    explanation: 'You can add methods to Object.prototype to make them available on all instances.'
  },
  {
    question: 'What is the output?\n```js\nfunction A() {}\nA.prototype.sayHi = function() { return "Hi"; };\nconst obj = new A();\nconsole.log(obj.sayHi());\n```',
    options: ['Hi', 'undefined', 'Error', 'null'],
    answer: 0,
    explanation: 'The sayHi method is defined on the prototype, so obj can access it.'
  },
  {
    question: 'What is the prototype chain?',
    options: [
      'A tool to connect arrays',
      'A chain of CSS styles',
      'A series of links between objects used for inheritance',
      'A set of DOM elements'
    ],
    answer: 2,
    explanation: 'The prototype chain is how JavaScript objects inherit features from one another.'
  },
  {
    question: 'What is the output?\n```js\nlet a = {};\nconsole.log(a.__proto__ === Object.prototype);\n```',
    options: ['true', 'false', 'undefined', 'error'],
    answer: 0,
    explanation: 'All plain objects inherit from Object.prototype, so this returns true.'
  },
  {
    question: 'Which method returns the prototype of an object?',
    options: [
      'getPrototype()',
      'Object.getPrototypeOf(obj)',
      'obj.prototype()',
      'obj.getProto()'
    ],
    answer: 1,
    explanation: '`Object.getPrototypeOf(obj)` returns the prototype of the specified object.'
  },
  {
    question: 'What will this log?\n```js\nlet arr = [];\nconsole.log(typeof arr.__proto__.push);\n```',
    options: ['object', 'function', 'undefined', 'number'],
    answer: 1,
    explanation: 'The `push` method is defined on `Array.prototype`, and it is a function.'
  },
  {
    question: 'What is the output?\n```js\nfunction Person(name) {\n  this.name = name;\n}\nPerson.prototype.greet = function() {\n  return "Hello " + this.name;\n};\nconst p = new Person("Sam");\nconsole.log(p.greet());\n```',
    options: ['Hello Sam', 'undefined', 'null', 'Error'],
    answer: 0,
    explanation: 'The greet function is accessible via the prototype, so it prints "Hello Sam".'
  },
  {
    question: 'What happens if you overwrite an object’s prototype?',
    options: [
      'All existing instances lose access to the original prototype methods',
      'It improves performance',
      'It disables inheritance',
      'It triggers garbage collection'
    ],
    answer: 0,
    explanation: 'Overwriting the prototype can break inheritance for existing instances.'
  },
  {
    question: 'What is the result of this?\n```js\nlet obj = {};\nconsole.log(obj.toString());\n```',
    options: ['[object Object]', 'Error', 'undefined', 'null'],
    answer: 0,
    explanation: 'The toString method is inherited from Object.prototype and returns "[object Object]".'
  }
]
},
'DSA':{
  'Time Complexity': [
  {
    question: 'What is the time complexity of accessing an element in an array by index?',
    options: ['O(1)', 'O(n)', 'O(log n)', 'O(n log n)'],
    answer: 0,
    explanation: 'Accessing an array element by index is a constant-time operation (O(1)).'
  },
  {
    question: 'Which of the following complexities is better in terms of performance?',
    options: ['O(n)', 'O(n^2)', 'O(log n)', 'O(n log n)'],
    answer: 2,
    explanation: 'O(log n) grows slower than O(n), making it more efficient.'
  },
  {
    question: 'If a function has nested loops over the same n elements, what is the time complexity?',
    options: ['O(n)', 'O(log n)', 'O(n^2)', 'O(n!)'],
    answer: 2,
    explanation: 'Two nested loops over n elements result in O(n^2) complexity.'
  },
  {
    question: 'Which algorithm has a time complexity of O(n log n)?',
    options: ['Bubble Sort', 'Merge Sort', 'Linear Search', 'Binary Search'],
    answer: 1,
    explanation: 'Merge Sort is a divide-and-conquer algorithm with O(n log n) complexity.'
  },
  {
    question: 'A function performs a constant number of operations. What is its time complexity?',
    options: ['O(1)', 'O(n)', 'O(log n)', 'O(n^2)'],
    answer: 0,
    explanation: 'If the number of operations does not depend on input size, it’s O(1).'
  },
  {
    question: 'Tricky: What is the time complexity of the following code?\nfor(int i = 1; i <= n; i *= 2) { print(i); }',
    options: ['O(n)', 'O(log n)', 'O(n log n)', 'O(1)'],
    answer: 1,
    explanation: 'The loop runs with i doubling every time, leading to log n iterations.'
  },
  {
    question: 'What is the worst-case time complexity of linear search?',
    options: ['O(n)', 'O(1)', 'O(n log n)', 'O(log n)'],
    answer: 0,
    explanation: 'In worst-case, linear search checks every element once.'
  },
  {
    question: 'Which of the following complexities grows the fastest?',
    options: ['O(n^2)', 'O(2^n)', 'O(n log n)', 'O(n!)'],
    answer: 3,
    explanation: 'O(n!) grows faster than all others and is considered very inefficient.'
  },
  {
    question: 'If an algorithm reduces the problem size by half at each step, its time complexity is:',
    options: ['O(n)', 'O(log n)', 'O(n^2)', 'O(n log n)'],
    answer: 1,
    explanation: 'Dividing problem size by 2 every time results in O(log n) complexity.'
  },
  {
    question: 'Tricky: What is the time complexity of this code?\nfor(int i = 0; i < n; i++)\n  for(int j = 0; j < log(i); j++)\n    print("*");',
    options: ['O(n)', 'O(n log n)', 'O(n^2)', 'O(log n)'],
    answer: 1,
    explanation: 'The outer loop runs n times and inner loop log(i) times → O(n log n).'
  }
],
'Asymptotic Notations': [
  {
    question: 'Which of the following is NOT an asymptotic notation?',
    options: ['Big O', 'Theta', 'Alpha', 'Omega'],
    answer: 2,
    explanation: 'Alpha is not an asymptotic notation; Big O, Theta, and Omega are.'
  },
  {
    question: 'What does Big O notation represent?',
    options: ['Best case', 'Worst case', 'Average case', 'Exact time'],
    answer: 1,
    explanation: 'Big O notation represents the upper bound or worst-case time complexity.'
  },
  {
    question: 'Theta (Θ) notation defines:',
    options: ['Worst case only', 'Average case only', 'Exact bound', 'Best case only'],
    answer: 2,
    explanation: 'Theta provides a tight bound (both upper and lower) for an algorithm.'
  },
  {
    question: 'What does Omega (Ω) notation describe?',
    options: ['Worst case', 'Best case', 'Exact case', 'None of the above'],
    answer: 1,
    explanation: 'Omega notation gives a lower bound, i.e., the best-case performance.'
  },
  {
    question: 'Tricky: f(n) = O(n²) means:',
    options: ['f(n) = n² exactly', 'f(n) grows faster than n²', 'f(n) grows no faster than n²', 'f(n) = Θ(n²)'],
    answer: 2,
    explanation: 'O(n²) means f(n) is bounded above by n² asymptotically.'
  },
  {
    question: 'Which of the following notations is the tightest bound?',
    options: ['Big O', 'Omega', 'Theta', 'All are equal'],
    answer: 2,
    explanation: 'Theta gives the exact (tight) bound whereas Big O and Omega give loose bounds.'
  },
  {
    question: 'If f(n) = Θ(n²), which of the following is also true?',
    options: ['f(n) = O(n²)', 'f(n) = Ω(n²)', 'Both A and B', 'None of the above'],
    answer: 2,
    explanation: 'If f(n) = Θ(n²), then it must also be both O(n²) and Ω(n²).'
  },
  {
    question: 'Choose the correct hierarchy from lowest to highest growth:',
    options: ['O(n) < O(log n) < O(n²)', 'O(log n) < O(n) < O(n²)', 'O(n²) < O(n) < O(log n)', 'O(n) < O(n²) < O(log n)'],
    answer: 1,
    explanation: 'Logarithmic is slower-growing than linear and quadratic.'
  },
  {
    question: 'Tricky: Which of these functions is NOT O(n²)?',
    options: ['5n² + 3n', 'n log n', '2n² + 7', '100n²'],
    answer: 1,
    explanation: 'n log n is less than n², so it’s not bounded above by n².'
  },
  {
    question: 'Program-based: If a function runs in Θ(n) and we run it twice, what is the final time complexity?',
    options: ['Θ(n)', 'Θ(2n)', 'Θ(n²)', 'Θ(log n)'],
    answer: 0,
    explanation: 'Θ(n + n) = Θ(2n) = Θ(n), constants are dropped in asymptotic analysis.'
  }
],
'Arrays': [
  {
    question: 'What is the time complexity of accessing an element in an array by index?',
    options: ['O(n)', 'O(log n)', 'O(1)', 'O(n²)'],
    answer: 2,
    explanation: 'Array indexing is a constant-time operation: O(1).'
  },
  {
    question: 'Which of the following is NOT a valid operation on an array?',
    options: ['Insertion', 'Traversal', 'Binary Search', 'Dynamic resizing'],
    answer: 3,
    explanation: 'Standard arrays have fixed sizes; dynamic resizing applies to dynamic arrays like ArrayLists.'
  },
  {
    question: 'Tricky: What happens when you access an array index out of bounds in C/C++?',
    options: ['Returns 0', 'Returns null', 'Segmentation fault / undefined behavior', 'Wraps to first index'],
    answer: 2,
    explanation: 'Accessing out of bounds causes undefined behavior or segmentation fault in C/C++.'
  },
  {
    question: 'What is the worst-case time complexity for linear search in an array?',
    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
    answer: 2,
    explanation: 'In the worst case, linear search checks all elements: O(n).'
  },
  {
    question: 'Which of the following sorting algorithms is NOT efficient for large arrays?',
    options: ['Merge Sort', 'Quick Sort', 'Bubble Sort', 'Heap Sort'],
    answer: 2,
    explanation: 'Bubble sort has poor performance on large arrays with O(n²) time.'
  },
  {
    question: 'Program-based: What does the following code output?\nint arr[] = {1, 2, 3, 4};\nprintf("%d", *(arr + 2));',
    options: ['1', '2', '3', '4'],
    answer: 2,
    explanation: 'Pointer arithmetic accesses the third element (index 2), which is 3.'
  },
  {
    question: 'Which of these allows random access?',
    options: ['Array', 'Linked List', 'Queue', 'Stack'],
    answer: 0,
    explanation: 'Only arrays support random access by index in constant time.'
  },
  {
    question: 'Tricky: What is the output of the following?\nint arr[5] = {1};\nfor(int i=0;i<5;i++) printf("%d", arr[i]);',
    options: ['11111', '10000', '00000', 'Garbage values'],
    answer: 1,
    explanation: 'Only arr[0] is initialized to 1, rest are zero by default in C.'
  },
  {
    question: 'What is the space complexity of an array of n elements?',
    options: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'],
    answer: 1,
    explanation: 'n elements require O(n) space.'
  },
  {
    question: 'Program-based: Find the second largest element in an array.',
    options: ['Sort the array and take second last', 'Use two passes to track max and second max', 'Use one pass with two variables', 'All of the above'],
    answer: 3,
    explanation: 'All options are valid; optimal is one pass using two variables.'
  }
],
'Abstract data type': [
  {
    question: 'What is an Abstract Data Type (ADT)?',
    options: [
      'A data type not defined in any programming language',
      'A mathematical model for data types',
      'A type that hides implementation details',
      'All of the above'
    ],
    answer: 3,
    explanation: 'An ADT defines operations and behavior but hides the implementation, making all options valid.'
  },
  {
    question: 'Which of these is NOT typically considered an ADT?',
    options: ['Stack', 'Queue', 'Array', 'Linked List'],
    answer: 2,
    explanation: 'Array is a data structure but not an ADT by itself—it does not abstract behavior.'
  },
  {
    question: 'Tricky: Which ADT would best suit implementing a browser back button?',
    options: ['Queue', 'Stack', 'Tree', 'Graph'],
    answer: 1,
    explanation: 'A Stack is used to track back/undo operations.'
  },
  {
    question: 'What defines an ADT?',
    options: ['Its data fields', 'Its methods only', 'Its interface and supported operations', 'Its syntax in code'],
    answer: 2,
    explanation: 'ADT is defined by its operations and interface, not implementation.'
  },
  {
    question: 'Which is a LIFO (Last-In First-Out) ADT?',
    options: ['Queue', 'Stack', 'Heap', 'Array'],
    answer: 1,
    explanation: 'Stack is LIFO, while Queue is FIFO.'
  },
  {
    question: 'Which ADT is best for job scheduling where the earliest job should run first?',
    options: ['Stack', 'Queue', 'Deque', 'Priority Queue'],
    answer: 3,
    explanation: 'Priority Queue selects jobs based on priority rather than order.'
  },
  {
    question: 'Tricky: Which ADT would best model a real-world scenario of printer queue?',
    options: ['Stack', 'Queue', 'Deque', 'Graph'],
    answer: 1,
    explanation: 'Printing tasks are processed in FIFO manner, modeled by a queue.'
  },
  {
    question: 'Which of the following ADTs supports both insertions and deletions at both ends?',
    options: ['Stack', 'Queue', 'Deque', 'Priority Queue'],
    answer: 2,
    explanation: 'Deque stands for Double-Ended Queue.'
  },
  {
    question: 'Program: What ADT is being used in this code?\nvoid push(int x) { arr[++top] = x; }\nint pop() { return arr[top--]; }',
    options: ['Queue', 'Stack', 'List', 'Tree'],
    answer: 1,
    explanation: 'push/pop with single end access indicates a Stack ADT.'
  },
  {
    question: 'Which ADT would you choose for level-order traversal of a tree?',
    options: ['Stack', 'Queue', 'Priority Queue', 'Graph'],
    answer: 1,
    explanation: 'Level-order traversal uses a Queue ADT.'
  }
],
'Operations on arrays':[
    {
      question: 'Which operation is used to find the maximum element in an array?',
      options: ['Traversal', 'Insertion', 'Search', 'Sorting'],
      answer: 0,
      explanation: 'You must traverse the array to compare each element and find the maximum.'
    },
    {
      question: 'What is the time complexity of inserting an element at the beginning of an array?',
      options: ['O(1)', 'O(n)', 'O(log n)', 'O(n log n)'],
      answer: 1,
      explanation: 'All elements must be shifted to make space, hence O(n).'
    },
    {
      question: 'Which of the following array operations is O(1)?',
      options: ['Search by value', 'Insert at beginning', 'Delete by index', 'Access by index'],
      answer: 3,
      explanation: 'Access by index in an array is constant time using the offset formula.'
    },
    {
      question: 'What does this code print?\nint arr[] = {1,2,3,4,5};\nprintf("%d", arr[2]);',
      options: ['1', '2', '3', '4'],
      answer: 2,
      explanation: 'Arrays are 0-indexed, so arr[2] = 3.'
    },
    {
      question: 'Which array operation would result in the most data shifting?',
      options: ['Insert at end', 'Delete from end', 'Insert at start', 'Access middle element'],
      answer: 2,
      explanation: 'Inserting at the start causes a shift of all elements rightwards.'
    },
    {
      question: 'Tricky: Can you dynamically increase the size of a static array in C?',
      options: ['Yes, using realloc', 'No', 'Yes, with malloc', 'Yes, by declaring again'],
      answer: 1,
      explanation: 'Static arrays cannot be resized once declared.'
    },
    {
      question: 'What does the following do?\nint arr[5] = {0};',
      options: ['Leaves all values undefined', 'Initializes only first element', 'Initializes all to 0', 'Causes a compile error'],
      answer: 2,
      explanation: 'All elements will be initialized to 0 when the first is explicitly set and others omitted.'
    },
    {
      question: 'Which method is best for finding duplicate elements in an array?',
      options: ['Sorting then comparing', 'Hashing', 'Nested loops', 'All of the above'],
      answer: 3,
      explanation: 'All can be used; hashing is best for time, sorting for space.'
    },
    {
      question: 'Program: Find the number of even elements in an array of size n.',
      options: [
        'for(i=0;i<n;i++) if(arr[i]%2==0) count++;',
        'while(i<n) if(arr[i]%2==0) count++;',
        'count = arr.length / 2;',
        'Use a binary search'
      ],
      answer: 0,
      explanation: 'Iterate through and check each element’s divisibility by 2.'
    },
    {
      question: 'True or False: Arrays in C are passed by reference to functions.',
      options: ['True', 'False'],
      answer: 0,
      explanation: 'Arrays decay to pointers when passed to functions, so they are passed by reference.'
    }
  ],
  'Linked List':[
  {
      question: 'What is a major advantage of a linked list over an array?',
      options: ['Constant-time random access', 'Dynamic size', 'Uses less memory', 'Easy sorting'],
      answer: 1,
      explanation: 'Linked lists allow dynamic memory allocation, unlike arrays.'
    },
    {
      question: 'What is the time complexity of inserting an element at the beginning of a singly linked list?',
      options: ['O(1)', 'O(n)', 'O(log n)', 'O(n log n)'],
      answer: 0,
      explanation: 'Insertion at the head of a linked list is a constant-time operation.'
    },
    {
      question: 'In a singly linked list, how do you delete the last node?',
      options: ['Free the head', 'Traverse till second last, set its next to NULL', 'Set last node to NULL', 'Set head to NULL'],
      answer: 1,
      explanation: 'You need to find the second last node and set its next to NULL.'
    },
    {
      question: 'Which condition correctly checks if a linked list is empty?',
      options: ['head == NULL', 'head.next == NULL', 'head.data == NULL', 'head = 0'],
      answer: 0,
      explanation: 'If the head pointer is NULL, the list is empty.'
    },
    {
      question: 'Tricky: Can a circular linked list be traversed using the same method as a singly linked list?',
      options: ['Yes, with a NULL condition', 'Yes, using a loop and stopping when back to head', 'No', 'Only with recursion'],
      answer: 1,
      explanation: 'Stop traversal when you reach the head node again.'
    },
    {
      question: 'What is printed?\nNode* head = NULL;\nprintf("%d", head->data);',
      options: ['0', 'Random value', 'Error', 'Segmentation fault'],
      answer: 3,
      explanation: 'Dereferencing a NULL pointer causes a segmentation fault.'
    },
    {
      question: 'Which type of linked list allows traversal in both directions?',
      options: ['Singly', 'Circular', 'Doubly', 'Multi-level'],
      answer: 2,
      explanation: 'Doubly linked lists contain both next and previous pointers.'
    },
    {
      question: 'Program: What does the following function do?\nvoid func(Node* head) { while(head) { head = head->next; } }',
      options: ['Prints elements', 'Deletes list', 'Traverses to end', 'Reverses list'],
      answer: 2,
      explanation: 'The loop simply traverses through the entire list.'
    },
    {
      question: 'Which is required to reverse a singly linked list?',
      options: ['Only head pointer', 'Three pointers: prev, curr, next', 'Tail pointer only', 'Array conversion'],
      answer: 1,
      explanation: 'You need three pointers to reverse links safely.'
    },
    {
      question: 'True or False: Insertion in a linked list is always O(1).',
      options: ['True', 'False'],
      answer: 1,
      explanation: 'Insertion is O(1) only at the head; inserting elsewhere requires traversal.'
    }
  ],
  'Operations on Linked list':[
    {
      question: 'What is the time complexity of searching an element in a singly linked list?',
      options: ['O(1)', 'O(n)', 'O(log n)', 'O(n^2)'],
      answer: 1,
      explanation: 'You need to traverse the list to find an element, making the time complexity O(n).'
    },
    {
      question: 'How do you reverse a singly linked list iteratively?',
      options: ['Swap the data', 'Reassign pointers in a loop', 'Recur with base case', 'Insert at the beginning'],
      answer: 1,
      explanation: 'You can reverse a singly linked list by changing the pointers in each node.'
    },
    {
      question: 'What will happen if you perform an insert operation in the middle of a linked list without updating the next pointer?',
      options: ['List will be circular', 'Memory leak occurs', 'The list will be corrupted', 'Nothing happens'],
      answer: 2,
      explanation: 'If you don’t update the next pointer, the list becomes corrupted and may lead to access violations.'
    },
    {
      question: 'Tricky: Can we implement a stack using a linked list? If so, how?',
      options: ['Yes, using push and pop operations', 'No, because linked lists don’t support it', 'Yes, using insertion at the end', 'No, because it has no random access'],
      answer: 0,
      explanation: 'A stack can be implemented using a linked list by inserting and removing elements at the head.'
    },
    {
      question: 'How do you find the middle element of a linked list in a single traversal?',
      options: ['Traverse and count the elements', 'Use two pointers: slow and fast', 'Traverse recursively', 'Use an extra array'],
      answer: 1,
      explanation: 'Use two pointers where one moves twice as fast as the other, and when the fast pointer reaches the end, the slow pointer will be at the middle.'
    },
    {
      question: 'What is the space complexity of reversing a singly linked list?',
      options: ['O(1)', 'O(n)', 'O(log n)', 'O(n^2)'],
      answer: 0,
      explanation: 'Reversing a singly linked list can be done in place using O(1) space.'
    },
    {
      question: 'Program: What does this code do?\nvoid insertAtEnd(Node* head, int data) { while(head->next) { head = head->next; } head->next = new Node(data); }',
      options: ['Inserts data at the beginning', 'Inserts data at the end', 'Reverses the list', 'Creates a new list'],
      answer: 1,
      explanation: 'The function traverses the list to the end and then inserts the new node.'
    },
    {
      question: 'What is the time complexity of deleting a node in the middle of a singly linked list?',
      options: ['O(1)', 'O(n)', 'O(log n)', 'O(n^2)'],
      answer: 1,
      explanation: 'To delete a node in the middle, you need to traverse the list until you reach the node, making the time complexity O(n).'
    },
    {
      question: 'How do you detect a loop in a singly linked list?',
      options: ['Use two pointers with different speeds', 'Mark nodes during traversal', 'Count nodes', 'Use hashset'],
      answer: 0,
      explanation: 'Floyd’s Cycle-Finding Algorithm (using slow and fast pointers) is a common way to detect loops.'
    },
    {
      question: 'True or False: Deleting the last node of a singly linked list is O(1).',
      options: ['True', 'False'],
      answer: 1,
      explanation: 'You need to traverse the entire list to delete the last node, making it O(n).'
    }
  ],
  'Types of Linked list':[
    {
      question: 'Which of the following is NOT a type of linked list?',
      options: ['Singly linked list', 'Circular linked list', 'Triply linked list', 'Doubly linked list'],
      answer: 2,
      explanation: 'Triply linked list is not a standard type; singly, doubly, and circular are valid types.'
    },
    {
      question: 'In a doubly linked list, each node contains:',
      options: ['Data and one pointer', 'Only data', 'Data and two pointers', 'Only two pointers'],
      answer: 2,
      explanation: 'Each node has data and two pointers: one to the next node and one to the previous node.'
    },
    {
      question: 'Which type of linked list allows traversal in both directions?',
      options: ['Singly linked list', 'Circular linked list', 'Doubly linked list', 'All of the above'],
      answer: 2,
      explanation: 'Doubly linked list allows both forward and backward traversal.'
    },
    {
      question: 'Tricky: Can a circular linked list be singly or doubly linked?',
      options: ['Only singly', 'Only doubly', 'Yes, both', 'No'],
      answer: 2,
      explanation: 'Circular linked lists can be either singly or doubly linked.'
    },
    {
      question: 'What is a key advantage of circular linked list over singly linked list?',
      options: ['Uses less memory', 'Supports reverse traversal', 'Can go from last to first without null', 'Faster sorting'],
      answer: 2,
      explanation: 'In a circular list, the last node points back to the head, allowing wrap-around traversal.'
    },
    {
      question: 'Program: What does the following do?\nhead->next = head;',
      options: ['Creates infinite loop', 'Creates circular linked list', 'Deletes list', 'Reverses list'],
      answer: 1,
      explanation: 'Assigning head to head->next makes it a circular linked list of one node.'
    },
    {
      question: 'In a singly circular linked list with 5 nodes, how many NULL pointers exist?',
      options: ['1', '2', '0', '5'],
      answer: 2,
      explanation: 'There are no NULL pointers in a circular linked list, since the last node points to the first.'
    },
    {
      question: 'Which operation is more efficient in a doubly linked list compared to singly linked list?',
      options: ['Insertion at front', 'Insertion at end', 'Deletion of a known node', 'Traversal'],
      answer: 2,
      explanation: 'In a doubly linked list, deletion of a known node can be done without complete traversal.'
    },
    {
      question: 'True or False: In circular doubly linked list, head->prev points to tail.',
      options: ['True', 'False'],
      answer: 0,
      explanation: 'In circular doubly linked list, head’s previous pointer links to the tail node.'
    },
    {
      question: 'Which linked list type is best for implementing undo/redo operations?',
      options: ['Singly linked list', 'Circular singly list', 'Doubly linked list', 'None'],
      answer: 2,
      explanation: 'Doubly linked list allows forward and backward navigation, which is ideal for undo/redo features.'
    }
  ],
  'Stacks':[
    {
      question: 'Which of the following is the correct order of operations in a stack?',
      options: ['FIFO - First In First Out', 'LIFO - Last In First Out', 'LILO - Last In Last Out', 'Random Access'],
      answer: 1,
      explanation: 'Stack follows the LIFO (Last In First Out) principle.'
    },
    {
      question: 'Which operations are commonly performed on a stack?',
      options: ['insert and delete', 'enqueue and dequeue', 'push and pop', 'append and remove'],
      answer: 2,
      explanation: 'Stacks use push() to insert and pop() to remove elements.'
    },
    {
      question: 'What happens if you pop from an empty stack?',
      options: ['Returns 0', 'Causes overflow', 'Causes underflow', 'Returns null'],
      answer: 2,
      explanation: 'Removing from an empty stack causes an underflow condition.'
    },
    {
      question: 'Tricky: Which of the following can be implemented using a stack?',
      options: ['Function calls', 'Tree traversal', 'Undo mechanism', 'All of the above'],
      answer: 3,
      explanation: 'Stacks are used in function calls, tree traversals (DFS), and undo features.'
    },
    {
      question: 'Program: What will be the top of the stack after these operations?\nstack.push(1); stack.push(2); stack.pop(); stack.push(3);',
      options: ['1', '2', '3', 'Empty'],
      answer: 2,
      explanation: '2 is popped, and 3 is pushed. So 3 is now on the top.'
    },
    {
      question: 'Which data structure is used internally in recursion?',
      options: ['Queue', 'Heap', 'Stack', 'Array'],
      answer: 2,
      explanation: 'Function call stack is maintained using stack structure.'
    },
    {
      question: 'Which of the following expressions correctly represents a postfix expression?',
      options: ['A + B', 'A + B * C', 'A B +', '(A + B)'],
      answer: 2,
      explanation: 'In postfix notation, the operator comes after operands: A B +.'
    },
    {
      question: 'Which of these is the application of a stack?',
      options: ['Infix to postfix conversion', 'Parenthesis checking', 'Undo feature in editors', 'All of the above'],
      answer: 3,
      explanation: 'Stack is used in all these operations.'
    },
    {
      question: 'Which Java class can be used as a stack?',
      options: ['Queue', 'Stack', 'LinkedList', 'Array'],
      answer: 1,
      explanation: 'Java has a built-in Stack class in java.util package.'
    },
    {
      question: 'Tricky: If 5 elements are pushed and 5 popped, what will be the size of stack?',
      options: ['5', '0', '10', 'Undefined'],
      answer: 1,
      explanation: 'Pushing and popping equal number of elements results in an empty stack (size = 0).'
    }
  ],
  'Operations of Stack':[
    {
      question: 'Which of the following operations adds an element to the top of a stack?',
      options: ['pop()', 'peek()', 'push()', 'top()'],
      answer: 2,
      explanation: 'push() inserts an element at the top of the stack.'
    },
    {
      question: 'Which operation removes the element from the top of the stack?',
      options: ['pop()', 'remove()', 'delete()', 'push()'],
      answer: 0,
      explanation: 'pop() removes and returns the top element of the stack.'
    },
    {
      question: 'What does the peek() operation do in a stack?',
      options: ['Removes the top element', 'Inserts a new element', 'Returns the top element without removing it', 'Returns stack size'],
      answer: 2,
      explanation: 'peek() shows the top element without modifying the stack.'
    },
    {
      question: 'Tricky: What will be the result of multiple pop operations on an empty stack?',
      options: ['0', 'Underflow', 'Overflow', 'Nothing happens'],
      answer: 1,
      explanation: 'Trying to pop from an empty stack leads to an underflow error.'
    },
    {
      question: 'Program: What will be the output?\nlet s = [];\ns.push(10);\ns.push(20);\ns.pop();\nconsole.log(s[s.length - 1]);',
      options: ['10', '20', 'undefined', 'null'],
      answer: 0,
      explanation: 'After popping 20, the top of the stack is 10.'
    },
    {
      question: 'Which of the following operations would NOT modify the stack?',
      options: ['pop()', 'peek()', 'push()', 'clear()'],
      answer: 1,
      explanation: 'peek() only views the top element without changing the stack.'
    },
    {
      question: 'How do you check if a stack is empty in JavaScript?',
      options: ['stack == null', 'stack.length == 0', 'stack.top == null', 'stack.size == -1'],
      answer: 1,
      explanation: 'If the array’s length is 0, the stack is empty.'
    },
    {
      question: 'Tricky: What is the time complexity of pop() in a stack implemented using an array?',
      options: ['O(n)', 'O(1)', 'O(log n)', 'O(n log n)'],
      answer: 1,
      explanation: 'pop() takes constant time O(1).'
    },
    {
      question: 'Which of the following sequence of operations leaves the stack empty?\npush(1), push(2), pop(), pop()',
      options: ['Stack has 2 elements', 'Stack is empty', 'Stack has 1 element', 'Stack is full'],
      answer: 1,
      explanation: 'Both pushed elements are popped, leaving the stack empty.'
    },
    {
      question: 'Tricky: Can a stack be used to reverse a string?',
      options: ['Yes', 'No', 'Only for numeric strings', 'Only in recursion'],
      answer: 0,
      explanation: 'By pushing each character and then popping, a string can be reversed using a stack.'
    }
  ],
  'Stack using Array':[
    {
      question: 'How is a stack implemented using an array?',
      options: ['FIFO structure with front and rear', 'Using index pointer for top', 'Random access structure', 'Circular array'],
      answer: 1,
      explanation: 'A stack is implemented using an array and a "top" index to track the top element.'
    },
    {
      question: 'Which condition signifies stack overflow in an array implementation?',
      options: ['top == -1', 'top == size - 1', 'top == 0', 'top == null'],
      answer: 1,
      explanation: 'When the top index reaches size - 1, the stack is full and overflow occurs.'
    },
    {
      question: 'What happens when pop() is called on an empty array-based stack?',
      options: ['Removes last element', 'Returns 0', 'Underflow error', 'Adds null'],
      answer: 2,
      explanation: 'Calling pop on an empty stack causes an underflow condition.'
    },
    {
      question: 'Tricky: How do you check if a stack is full in a fixed-size array stack?',
      options: ['top == array.length', 'top == -1', 'top == array.length - 1', 'stack == null'],
      answer: 2,
      explanation: 'A stack is full when top reaches array.length - 1.'
    },
    {
      question: 'Program: What is the output?\nlet stack = [];\nlet top = -1;\nstack[++top] = 10;\nstack[++top] = 20;\nconsole.log(stack[top]);',
      options: ['10', '20', 'undefined', '0'],
      answer: 1,
      explanation: '20 is the topmost element pushed into the array-based stack.'
    },
    {
      question: 'In an array-based stack, what is the initial value of top?',
      options: ['0', '-1', 'null', '1'],
      answer: 1,
      explanation: 'top is initialized to -1 to indicate an empty stack.'
    },
    {
      question: 'Tricky: What is the space complexity of a stack implemented with an array of size n?',
      options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
      answer: 2,
      explanation: 'The array requires O(n) space for n elements.'
    },
    {
      question: 'What is the output?\nlet stack = [];\nstack.push(1);\nstack.push(2);\nstack.pop();\nconsole.log(stack.length);',
      options: ['2', '1', '0', 'undefined'],
      answer: 1,
      explanation: 'One element was popped, so one remains. Length is 1.'
    },
    {
      question: 'Which method is used to insert an element in a stack implemented using array in JavaScript?',
      options: ['enqueue()', 'add()', 'insert()', 'push()'],
      answer: 3,
      explanation: 'push() is used to insert elements at the end of the array (top of the stack).'
    },
    {
      question: 'Tricky: Is it possible to dynamically resize the stack implemented using an array in JavaScript?',
      options: ['Yes, arrays in JS are dynamic', 'No, fixed size', 'Only in C++', 'Only in Java'],
      answer: 0,
      explanation: 'JavaScript arrays are dynamic, so stacks grow automatically unless limited by logic.'
    }
  ],
  'Stack Operations using Linked List':[
    {
      question: 'In a linked list implementation of stack, where are the new elements inserted?',
      options: ['At the end', 'At the front (head)', 'At the middle', 'Random location'],
      answer: 1,
      explanation: 'Elements are inserted at the head to ensure O(1) time complexity for push operation.'
    },
    {
      question: 'Which pointer tracks the top of the stack in a linked list implementation?',
      options: ['rear', 'head', 'tail', 'prev'],
      answer: 1,
      explanation: 'The head pointer is used to keep track of the top of the stack.'
    },
    {
      question: 'Tricky: What is the time complexity of the push() and pop() operations in a stack using a singly linked list?',
      options: ['O(n)', 'O(log n)', 'O(1)', 'O(n log n)'],
      answer: 2,
      explanation: 'Both operations are performed in constant time when using the head of the list.'
    },
    {
      question: 'Program: What is the output?\nclass Node {\n  constructor(data) {\n    this.data = data;\n    this.next = null;\n  }\n}\nlet head = new Node(5);\nhead = { data: 10, next: head };\nconsole.log(head.next.data);',
      options: ['10', '5', 'null', 'undefined'],
      answer: 1,
      explanation: 'head.next points to the previous top, which holds data = 5.'
    },
    {
      question: 'What happens when pop() is called on an empty stack implemented using linked list?',
      options: ['Removes null', 'Returns 0', 'Underflow error', 'Adds null'],
      answer: 2,
      explanation: 'Calling pop on an empty stack results in underflow.'
    },
    {
      question: 'Which of the following correctly represents the push operation in a linked list stack?',
      options: ['Insert at end', 'Insert before tail', 'Insert at head', 'Insert at random'],
      answer: 2,
      explanation: 'Push is done at the head for efficiency.'
    },
    {
      question: 'Tricky: Is memory dynamically allocated in linked list stack implementation?',
      options: ['Yes', 'No', 'Only when pushing', 'Only when popping'],
      answer: 0,
      explanation: 'Each new node is dynamically allocated in memory.'
    },
    {
      question: 'Which node becomes the new top after a pop() operation?',
      options: ['Next node', 'Previous node', 'Last node', 'Null'],
      answer: 0,
      explanation: 'The next node (head.next) becomes the new top after popping.'
    },
    {
      question: 'Program: What is the output?\nclass Node {\n  constructor(val) {\n    this.data = val;\n    this.next = null;\n  }\n}\nlet top = new Node(100);\ntop = new Node(200);\ntop.next = new Node(100);\nconsole.log(top.next.data);',
      options: ['100', '200', 'null', 'undefined'],
      answer: 0,
      explanation: 'top.next.data refers to the node containing 100.'
    },
    {
      question: 'What is the main advantage of using a linked list over an array for stack?',
      options: ['Faster access time', 'Fixed size', 'Dynamic size, no overflow unless memory full', 'Saves memory'],
      answer: 2,
      explanation: 'Linked list stacks can grow dynamically and are not restricted by array size.'
    }
  ],
  'Parenthesis Matching':[
    {
      question: 'Which data structure is best suited for checking balanced parentheses in an expression?',
      options: ['Queue', 'Array', 'Stack', 'Linked List'],
      answer: 2,
      explanation: 'Stack is used to keep track of opening brackets and ensure they match the closing ones.'
    },
    {
      question: 'What is the result of evaluating the expression "[(a+b)*{c/d}]" for balanced parentheses?',
      options: ['Balanced', 'Unbalanced', 'Syntax Error', 'Cannot be checked'],
      answer: 0,
      explanation: 'All types of brackets are correctly opened and closed in the proper order.'
    },
    {
      question: 'Which of these expressions is NOT balanced?',
      options: ['(a+b)', '{[a+(b*c)]}', '[a+b]*(c+d)', '(a+b]*{c/d)'],
      answer: 3,
      explanation: 'Different types of brackets are improperly closed (e.g., opening "(" but closing with "]").'
    },
    {
      question: 'Tricky: Can a single stack be used to check multiple types of brackets like (), {}, []?',
      options: ['No', 'Yes', 'Only for ()', 'Only for nested structures'],
      answer: 1,
      explanation: 'Yes, a stack can be used with logic to differentiate and match bracket types.'
    },
    {
      question: 'What should be pushed onto the stack during parenthesis matching?',
      options: ['Only closing brackets', 'Operators', 'Opening brackets', 'Entire expression'],
      answer: 2,
      explanation: 'Opening brackets are pushed so they can be matched when closing brackets are encountered.'
    },
    {
      question: 'Program: What is the output?\nInput: (a+[b*c]-{d/e})\n',
      options: ['Balanced', 'Unbalanced', 'Runtime Error', 'Syntax Error'],
      answer: 0,
      explanation: 'All brackets are matched and nested properly.'
    },
    {
      question: 'Tricky: What will happen if you push closing brackets to stack and try to match?',
      options: ['Correct match', 'Stack overflow', 'Logic fails', 'Stack underflow'],
      answer: 2,
      explanation: 'The logic will fail because stack should track opening brackets for correct matching.'
    },
    {
      question: 'Which of the following expressions is correctly nested?',
      options: ['((()))', '(()))(', '([)]', '{[(a+b)]}'],
      answer: 3,
      explanation: 'Only the fourth expression is properly nested with correct bracket types.'
    },
    {
      question: 'Program: What is the output of this code?\nfunction checkParen(exp) {\n let stack = [];\n for (let ch of exp) {\n  if (ch === "(") stack.push(ch);\n  else if (ch === ")") {\n   if (!stack.pop()) return false;\n  }\n }\n return stack.length === 0;\n}\nconsole.log(checkParen("((a+b)*(c-d))"));',
      options: ['true', 'false', 'error', 'undefined'],
      answer: 0,
      explanation: 'The expression is balanced and the function will return true.'
    },
    {
      question: 'What is the time complexity of checking balanced parentheses in a string of length n?',
      options: ['O(n^2)', 'O(log n)', 'O(n)', 'O(1)'],
      answer: 2,
      explanation: 'Each character is checked once, so the time complexity is linear O(n).'
    }
  ],
  'Parenthesis Checking':[
    {
      question: 'What is the main purpose of parenthesis checking in an expression?',
      options: ['To count operators', 'To verify expression syntax', 'To check operand types', 'To convert expression'],
      answer: 1,
      explanation: 'Parenthesis checking ensures the expression’s brackets are correctly opened and closed.'
    },
    {
      question: 'Which of the following is a valid balanced expression?',
      options: ['(a+b))', '((a+b)', '(a+b)', 'a+b)('],
      answer: 2,
      explanation: 'Only (a+b) has balanced and properly ordered parentheses.'
    },
    {
      question: 'Which data structure is commonly used for parenthesis checking?',
      options: ['Queue', 'Stack', 'Array', 'Linked List'],
      answer: 1,
      explanation: 'A stack helps match each opening parenthesis with a corresponding closing one.'
    },
    {
      question: 'Tricky: Which of these expressions will return false in a standard parenthesis checking function?',
      options: ['(a+b)', '(a+b', '((a*b)+(c-d))', '(a+b)*(c+d)', '(a+b))('],
      answer: 1,
      explanation: 'The second expression has an unmatched opening parenthesis.'
    },
    {
      question: 'Program: What is the output of this function?\nfunction isValid(s) {\n let stack = [];\n for (let ch of s) {\n  if (ch === "(") stack.push(ch);\n  else if (ch === ")") {\n   if (!stack.pop()) return false;\n  }\n }\n return stack.length === 0;\n}\nconsole.log(isValid("((a+b)*(c-d))"));',
      options: ['true', 'false', 'undefined', 'error'],
      answer: 0,
      explanation: 'All parentheses are matched properly, so the output is true.'
    },
    {
      question: 'What happens when there’s a closing parenthesis with no matching opening one?',
      options: ['Stack overflow', 'Stack underflow', 'Correct match', 'Syntax error'],
      answer: 1,
      explanation: 'The pop operation on an empty stack indicates a mismatched closing parenthesis.'
    },
    {
      question: 'Tricky: Which logic correctly checks for balanced parentheses?',
      options: [
        'Push closing and match with opening',
        'Push opening and match with closing on pop',
        'Ignore opening, match closings only',
        'Push all characters and pop any'
      ],
      answer: 1,
      explanation: 'You must push opening brackets and pop when a closing one is encountered.'
    },
    {
      question: 'What is returned when checking this: "([a+b]*(c+d))" using a correct algorithm?',
      options: ['true', 'false', 'Syntax Error', 'Mismatch'],
      answer: 0,
      explanation: 'All brackets are correctly nested and balanced.'
    },
    {
      question: 'What is the space complexity of parenthesis checking for a string of length n?',
      options: ['O(n)', 'O(1)', 'O(log n)', 'O(n^2)'],
      answer: 0,
      explanation: 'In the worst case, all characters are opening brackets, so O(n) space is used.'
    },
    {
      question: 'Tricky Program: What is the result?\nInput: "[{()}]"\nLogic uses stack and bracket-pair matching.',
      options: ['Balanced', 'Unbalanced', 'Syntax Error', 'Unknown'],
      answer: 0,
      explanation: 'All brackets match their corresponding pairs correctly, so it is balanced.'
    }
  ],
  'Infix, Prefix, Postfix Expressions':[
    {
      question: 'Which of the following is an example of an infix expression?',
      options: ['+AB', 'AB+', 'A+B', '*AB'],
      answer: 2,
      explanation: 'Infix notation places the operator between operands, e.g., A + B.'
    },
    {
      question: 'What is the postfix form of the infix expression (A + B) * C?',
      options: ['A B + C *', 'A B C + *', 'A + B * C', '+ A B C *', '* + A B C'],
      answer: 0,
      explanation: 'In postfix: first A B + (sum), then * C => A B + C *'
    },
    {
      question: 'Which expression format does not require parentheses to maintain the order of operations?',
      options: ['Infix', 'Prefix', 'Postfix', 'Both Prefix and Postfix'],
      answer: 3,
      explanation: 'Both prefix and postfix expressions eliminate the need for parentheses due to their order rules.'
    },
    {
      question: 'Program: What is the postfix form of the infix expression A + B * C?',
      options: ['A B C * +', 'A B + C *', '+ A * B C', '* B C + A'],
      answer: 0,
      explanation: 'B * C is evaluated first, then A is added: A B C * +'
    },
    {
      question: 'Which data structure is used to convert infix to postfix?',
      options: ['Queue', 'Tree', 'Stack', 'Graph'],
      answer: 2,
      explanation: 'A stack is used to temporarily store operators during the conversion.'
    },
    {
      question: 'Evaluate the postfix expression: 5 3 2 * +',
      options: ['16', '11', '10', '13'],
      answer: 3,
      explanation: '3 * 2 = 6, then 5 + 6 = 11. So answer is 11.'
    },
    {
      question: 'What is the prefix of the expression A * (B + C)?',
      options: ['* + A B C', '* A + B C', '+ A * B C', '* + B C A'],
      answer: 1,
      explanation: 'Prefix: operator comes before operands. So * A + B C.'
    },
    {
      question: 'Tricky: Which postfix expression evaluates to (A + B) / (C - D)?',
      options: ['A B + C D - /', 'A B C + D / -', '+ A B / C D -', 'A B + / C D -'],
      answer: 0,
      explanation: 'Postfix keeps operand order: first A + B, then C - D, then /.'
    },
    {
      question: 'Which of the following is **not true** about postfix expressions?',
      options: [
        'Operators appear after operands',
        'Parentheses are required',
        'They are easier to evaluate using stack',
        'They follow left-to-right evaluation'
      ],
      answer: 1,
      explanation: 'Postfix expressions do not require parentheses.'
    },
    {
      question: 'Program: What is the result of evaluating the postfix: 2 3 1 * + 9 -?',
      options: ['-4', '5', '2', '7'],
      answer: 3,
      explanation: '3 * 1 = 3, 2 + 3 = 5, 5 - 9 = -4'
    }
  ],
  'Queue':[
    {
      question: 'Which of the following operations are allowed in a Queue?',
      options: ['Insert at front, delete from rear', 'Insert and delete at both ends', 'Insert at rear, delete from front', 'Insert and delete at front only'],
      answer: 2,
      explanation: 'Queue follows FIFO – insert at rear and delete from front.'
    },
    {
      question: 'Which data structure is typically used to implement a queue?',
      options: ['Stack', 'Linked List', 'Tree', 'Graph'],
      answer: 1,
      explanation: 'Queues can be efficiently implemented using linked lists or arrays.'
    },
    {
      question: 'What will be the result of the following operations: Enqueue(1), Enqueue(2), Dequeue(), Enqueue(3), Dequeue()?',
      options: ['1 2', '2 3', '1 3', '3 1'],
      answer: 2,
      explanation: '1 is dequeued, then 2 is dequeued after inserting 3, so final result is 1 3.'
    },
    {
      question: 'Tricky: What happens if you try to enqueue in a full array-based queue?',
      options: ['Overwrites front', 'Throws Overflow Error', 'Ignores the operation', 'Resizes queue automatically'],
      answer: 1,
      explanation: 'A fixed-size array queue throws overflow when full.'
    },
    {
      question: 'What is the time complexity of enqueue and dequeue operations in a queue?',
      options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
      answer: 0,
      explanation: 'Both operations take O(1) time in a properly implemented queue.'
    },
    {
      question: 'Program: Which queue type allows insertion and deletion at both ends?',
      options: ['Circular Queue', 'Priority Queue', 'Deque', 'Simple Queue'],
      answer: 2,
      explanation: 'A deque (double-ended queue) allows operations from both ends.'
    },
    {
      question: 'What is the initial value of `front` and `rear` in an empty queue (array implementation)?',
      options: ['-1', '0', '1', 'null'],
      answer: 0,
      explanation: 'Both front and rear are typically initialized to -1.'
    },
    {
      question: 'Which of the following is true for Circular Queue?',
      options: [
        'Last position is connected back to the first position',
        'Queue can be extended indefinitely',
        'Front and rear are always equal',
        'It only allows one element'
      ],
      answer: 0,
      explanation: 'In circular queue, rear connects back to front when it reaches end.'
    },
    {
      question: 'Tricky: How to differentiate between full and empty condition in a circular queue?',
      options: [
        'front == rear',
        '(rear + 1) % size == front',
        'rear == size - 1',
        'rear == front + 1'
      ],
      answer: 1,
      explanation: 'In a circular queue, full condition is when (rear + 1) % size == front.'
    },
    {
      question: 'Program: Given queue q = [10, 20, 30], what will be the output after Dequeue and Enqueue(40)?',
      options: ['10, 20, 30, 40', '20, 30, 40', '30, 40', '10, 20, 40'],
      answer: 1,
      explanation: '10 is dequeued, then 40 is enqueued → [20, 30, 40].'
    }
  ],
  'Operations on Queue':[
        {
      question: 'Which of the following are basic queue operations?',
      options: ['enqueue(), dequeue(), peek()', 'push(), pop(), top()', 'insert(), delete(), search()', 'add(), remove(), update()'],
      answer: 0,
      explanation: 'enqueue(), dequeue(), and peek() are the standard queue operations.'
    },
    {
      question: 'What does the enqueue() operation do?',
      options: ['Deletes element from front', 'Adds element at front', 'Adds element at rear', 'Reverses the queue'],
      answer: 2,
      explanation: 'enqueue() inserts the element at the rear of the queue.'
    },
    {
      question: 'Which operation removes an element from the front of a queue?',
      options: ['peek()', 'enqueue()', 'dequeue()', 'pop()'],
      answer: 2,
      explanation: 'dequeue() removes the front element in a queue.'
    },
    {
      question: 'What does peek() do in a queue?',
      options: ['Returns front element without removing it', 'Adds a new element', 'Deletes the rear element', 'Sorts the queue'],
      answer: 0,
      explanation: 'peek() returns the front element without modifying the queue.'
    },
    {
      question: 'Tricky: What happens when you dequeue from an empty queue?',
      options: ['Returns 0', 'Throws Underflow Error', 'Returns null', 'Inserts an element'],
      answer: 1,
      explanation: 'Removing from an empty queue causes an underflow error.'
    },
    {
      question: 'Program: Given a queue q = [1, 2, 3], after two dequeue() and one enqueue(4), what is q?',
      options: ['[2, 3, 4]', '[3, 4]', '[1, 2, 4]', '[4]'],
      answer: 1,
      explanation: '1 and 2 are dequeued, then 4 is enqueued → [3, 4].'
    },
    {
      question: 'Which of the following is used to check whether a queue is full (in array-based implementation)?',
      options: ['rear == front', 'rear == MAX - 1', 'front == -1', 'rear == front + 1'],
      answer: 1,
      explanation: 'When rear reaches the last index, the queue is full in array implementation.'
    },
    {
      question: 'What is the time complexity of enqueue and dequeue operations in a linked list based queue?',
      options: ['O(1)', 'O(n)', 'O(log n)', 'O(n log n)'],
      answer: 0,
      explanation: 'Both operations take O(1) time in a linked list based queue.'
    },
    {
      question: 'Tricky: Can we implement a queue using two stacks?',
      options: ['No', 'Yes, but enqueue will be O(n)', 'Yes, both operations O(1)', 'Only dequeue possible'],
      answer: 1,
      explanation: 'Queue can be implemented using two stacks with one operation taking O(n) time.'
    },
    {
      question: 'Program: What is the output of the following Java code?\nQueue<Integer> q = new LinkedList<>();\nq.add(10);\nq.add(20);\nSystem.out.print(q.remove());',
      options: ['10', '20', '0', 'Exception'],
      answer: 0,
      explanation: 'remove() removes and returns the front element (10).'
    }
  ],
  'Queue using Array':[
    {
      question: 'What is the condition for Queue Overflow in array implementation?',
      options: ['front == rear', 'rear == MAX - 1', 'front == MAX', 'rear == -1'],
      answer: 1,
      explanation: 'When rear reaches the last index (MAX - 1), queue overflow occurs in array implementation.'
    },
    {
      question: 'Which operation inserts an element into the array-based queue?',
      options: ['insert()', 'enqueue()', 'add()', 'push()'],
      answer: 1,
      explanation: 'enqueue() is used to insert an element at the rear of the queue.'
    },
    {
      question: 'What is the initial value of front and rear in an empty array queue?',
      options: ['0', '-1', '1', 'null'],
      answer: 1,
      explanation: 'Both front and rear are initialized to -1 in an empty queue.'
    },
    {
      question: 'Tricky: After several dequeue() operations, how can space at the beginning of the array be reused?',
      options: ['By shrinking array', 'By dynamic array', 'By shifting elements', 'By using circular queue'],
      answer: 3,
      explanation: 'Circular queue allows reuse of freed space after dequeues.'
    },
    {
      question: 'What is the time complexity of enqueue and dequeue operations in array-based queue?',
      options: ['O(1)', 'O(n)', 'O(log n)', 'O(n log n)'],
      answer: 0,
      explanation: 'Both operations are O(1) unless elements are shifted (in which case it becomes O(n)).'
    },
    {
      question: 'Program: What happens in the following code?\nint MAX = 3;\nint queue[] = new int[MAX];\nint rear = -1;\nrear++;\nqueue[rear] = 5;\nrear++;\nqueue[rear] = 10;\nrear++;\nqueue[rear] = 15;\nrear++;\nqueue[rear] = 20;',
      options: ['Queue works normally', 'Queue overflows', 'Queue resets', 'Queue inserts 20'],
      answer: 1,
      explanation: 'rear exceeds MAX - 1, so overflow occurs when trying to insert 20.'
    },
    {
      question: 'What is the purpose of front pointer in a queue?',
      options: ['To insert element', 'To reverse queue', 'To delete element', 'To count size'],
      answer: 2,
      explanation: 'front points to the element that is removed during dequeue.'
    },
    {
      question: 'Tricky: Can array-based queue dynamically grow in Java?',
      options: ['Yes, using arrays', 'No', 'Yes, using ArrayList', 'Only with linked list'],
      answer: 2,
      explanation: 'ArrayList or Queue implementations like LinkedList are used for dynamic queue behavior.'
    },
    {
      question: 'Which of the following represents the front element in array queue?',
      options: ['queue[0]', 'queue[rear]', 'queue[front]', 'queue[MAX]'],
      answer: 2,
      explanation: 'front points to the index of the first (oldest) element.'
    },
    {
      question: 'Program: What is printed?\nint[] queue = {1, 2, 3};\nint front = 0;\nSystem.out.println(queue[front++]);',
      options: ['1', '2', '3', 'Error'],
      answer: 0,
      explanation: 'It prints queue[0], which is 1, and then increments front.'
    }
  ],
  'Queue using Linked List':[
    {
      question: 'In a linked list implementation of a queue, what does the rear pointer point to?',
      options: ['First node', 'Middle node', 'Last node', 'Null'],
      answer: 2,
      explanation: 'In a queue implemented using linked list, rear points to the last node where new elements are enqueued.'
    },
    {
      question: 'What is the time complexity of enqueue and dequeue in a linked list based queue?',
      options: ['O(n)', 'O(log n)', 'O(1)', 'O(n log n)'],
      answer: 2,
      explanation: 'Both enqueue (insert at end) and dequeue (remove from front) are O(1) in linked list queue.'
    },
    {
      question: 'Tricky: What happens if the rear pointer is not updated during enqueue?',
      options: ['Nothing happens', 'Element is added at the wrong position', 'Memory leak occurs', 'Queue becomes stack'],
      answer: 1,
      explanation: 'If rear is not updated, the new element may not be properly linked, breaking the queue structure.'
    },
    {
      question: 'What condition indicates an empty queue in a linked list?',
      options: ['rear == null', 'front == null', 'front == rear', 'rear == -1'],
      answer: 1,
      explanation: 'When front is null, it indicates that the queue has no elements.'
    },
    {
      question: 'Which part of the node is updated during enqueue in a linked list queue?',
      options: ['Front', 'Rear.next', 'Front.next', 'Head'],
      answer: 1,
      explanation: 'rear.next is updated to point to the new node, and then rear is moved to the new node.'
    },
    {
      question: 'Tricky: How can memory be wasted in a linked list based queue?',
      options: ['By not allocating memory', 'By not freeing dequeued nodes', 'By skipping nodes', 'By using arrays'],
      answer: 1,
      explanation: 'If dequeued nodes are not freed (in languages like C), memory leaks can occur.'
    },
    {
      question: 'Program: What does this enqueue function do?\nfunction enqueue(value) {\n  let node = { data: value, next: null };\n  if (!rear) {\n    front = rear = node;\n  } else {\n    rear.next = node;\n    rear = node;\n  }\n}',
      options: ['Adds node at front', 'Adds node at rear', 'Deletes node', 'Does nothing'],
      answer: 1,
      explanation: 'This correctly adds a node at the end (rear) of the queue.'
    },
    {
      question: 'What should be updated in dequeue operation in a linked list queue?',
      options: ['rear', 'front', 'front.next', 'front and rear'],
      answer: 1,
      explanation: 'Only front is updated to the next node in the list.'
    },
    {
      question: 'Tricky: What if front == rear in a queue and we perform dequeue?',
      options: ['Queue becomes circular', 'Both front and rear should be set to null', 'rear moves forward', 'front stays'],
      answer: 1,
      explanation: 'If there was only one element, removing it means the queue becomes empty, so both pointers should be null.'
    },
    {
      question: 'Program: What is printed?\nlet node1 = {data: 10, next: null};\nlet node2 = {data: 20, next: null};\nnode1.next = node2;\nlet front = node1;\nconsole.log(front.next.data);',
      options: ['10', '20', 'null', 'undefined'],
      answer: 1,
      explanation: 'front.next points to node2, so its data is 20.'
    }
  ],
  'Sorting Algorithms':[
    {
      question: 'Which of the following sorting algorithms has the best average-case time complexity?',
      options: ['Bubble Sort', 'Selection Sort', 'Merge Sort', 'Insertion Sort'],
      answer: 2,
      explanation: 'Merge Sort has an average-case time complexity of O(n log n), better than the others listed.'
    },
    {
      question: 'What is the worst-case time complexity of Quick Sort?',
      options: ['O(n log n)', 'O(n^2)', 'O(n)', 'O(log n)'],
      answer: 1,
      explanation: 'Quick Sort has a worst-case complexity of O(n^2) when the pivot leads to unbalanced partitions.'
    },
    {
      question: 'Which sorting algorithm is stable and works efficiently for linked lists?',
      options: ['Quick Sort', 'Merge Sort', 'Heap Sort', 'Selection Sort'],
      answer: 1,
      explanation: 'Merge Sort is preferred for linked lists as it doesn’t require random access and is stable.'
    },
    {
      question: 'Tricky: Which of the following algorithms is not based on comparisons?',
      options: ['Merge Sort', 'Counting Sort', 'Quick Sort', 'Bubble Sort'],
      answer: 1,
      explanation: 'Counting Sort is not comparison-based; it uses array indices for sorting.'
    },
    {
      question: 'Which sorting algorithm repeatedly swaps adjacent elements if they are in the wrong order?',
      options: ['Insertion Sort', 'Bubble Sort', 'Quick Sort', 'Merge Sort'],
      answer: 1,
      explanation: 'Bubble Sort performs repeated adjacent swaps to sort the array.'
    },
    {
      question: 'Program: What will be the output of this?\nlet arr = [5, 2, 9, 1];\narr.sort();\nconsole.log(arr);',
      options: ['[1, 2, 5, 9]', '[5, 2, 9, 1]', '[9, 5, 2, 1]', '[1, 2, 9, 5]'],
      answer: 3,
      explanation: 'JavaScript’s sort converts elements to strings by default. It sorts lexicographically unless a comparator is provided.'
    },
    {
      question: 'Which sorting algorithm is considered in-place and unstable?',
      options: ['Heap Sort', 'Merge Sort', 'Insertion Sort', 'Bubble Sort'],
      answer: 0,
      explanation: 'Heap Sort is in-place (no extra space) but not stable.'
    },
    {
      question: 'Tricky: When is Insertion Sort faster than Quick Sort?',
      options: ['Always', 'Never', 'For small datasets', 'For large datasets'],
      answer: 2,
      explanation: 'Insertion Sort can outperform Quick Sort on very small datasets due to lower overhead.'
    },
    {
      question: 'What is the primary advantage of Merge Sort over Quick Sort?',
      options: ['Less space required', 'More efficient on arrays', 'Stable sorting', 'Faster in all cases'],
      answer: 2,
      explanation: 'Merge Sort is stable while Quick Sort is not necessarily stable.'
    },
    {
      question: 'Program: Identify the sorting algorithm.\nfunction sort(arr) {\n  for (let i = 0; i < arr.length; i++) {\n    let min = i;\n    for (let j = i + 1; j < arr.length; j++) {\n      if (arr[j] < arr[min]) min = j;\n    }\n    [arr[i], arr[min]] = [arr[min], arr[i]];\n  }\n  return arr;\n}',
      options: ['Bubble Sort', 'Selection Sort', 'Insertion Sort', 'Quick Sort'],
      answer: 1,
      explanation: 'The code finds the minimum element and places it at the correct position — this is Selection Sort.'
    }
  ],
  'Trees':[
    {
      question: 'Which of the following is NOT true about binary trees?',
      options: [
        'Each node has at most two children.',
        'All binary trees are binary search trees.',
        'The left subtree contains smaller values than the node in a BST.',
        'Binary trees can be balanced or unbalanced.'
      ],
      answer: 1,
      explanation: 'Not all binary trees are binary search trees (BSTs). BSTs follow a specific order.'
    },
    {
      question: 'What is the height of a tree with a single node?',
      options: ['0', '1', '-1', '2'],
      answer: 0,
      explanation: 'The height of a tree with only one node (the root) is considered 0.'
    },
    {
      question: 'What traversal order visits the root node *after* its subtrees?',
      options: ['Preorder', 'Inorder', 'Postorder', 'Level Order'],
      answer: 2,
      explanation: 'Postorder traversal visits left, right, and then root.'
    },
    {
      question: 'Tricky: How many nodes are there in a full binary tree of height h (0-indexed)?',
      options: ['2^h', '2^h - 1', '2^(h+1) - 1', '2^(h+1)'],
      answer: 2,
      explanation: 'A full binary tree of height h has 2^(h+1) - 1 nodes.'
    },
    {
      question: 'Which data structure is commonly used for level-order traversal of a tree?',
      options: ['Stack', 'Queue', 'Array', 'Linked List'],
      answer: 1,
      explanation: 'A queue is used in level-order traversal (BFS) to process nodes level by level.'
    },
    {
      question: 'Program: What will be the output of the inorder traversal of this tree?\n\n      1\n     / \\\n    2   3\n   / \\\n  4   5',
      options: ['1 2 3 4 5', '4 2 5 1 3', '2 4 5 3 1', '4 5 2 3 1'],
      answer: 1,
      explanation: 'Inorder traversal (Left, Root, Right) = 4 2 5 1 3.'
    },
    {
      question: 'Which traversal is used to get prefix notation of an expression tree?',
      options: ['Inorder', 'Postorder', 'Preorder', 'Level Order'],
      answer: 2,
      explanation: 'Preorder traversal gives prefix notation (operator before operands).'
    },
    {
      question: 'Which tree traversal is best suited for converting a BST into a sorted array?',
      options: ['Preorder', 'Inorder', 'Postorder', 'Level Order'],
      answer: 1,
      explanation: 'Inorder traversal of a BST returns the elements in sorted order.'
    },
    {
      question: 'Tricky: What is the maximum number of nodes at level `l` in a binary tree?',
      options: ['2^l - 1', '2^l', '2l', 'l^2'],
      answer: 1,
      explanation: 'At level l, the max number of nodes is 2^l (starting from level 0).'
    },
    {
      question: 'Code: Identify the traversal.\nfunction traverse(node) {\n  if (node == null) return;\n  console.log(node.data);\n  traverse(node.left);\n  traverse(node.right);\n}',
      options: ['Inorder', 'Postorder', 'Preorder', 'Level Order'],
      answer: 2,
      explanation: 'Root is visited first, then left and right — this is Preorder traversal.'
    }
  ],
  'Types of Tress':[
    {
      question: 'Which of the following is a tree where every node has at most two children?',
      options: ['Binary Tree', 'Ternary Tree', 'B-Tree', 'AVL Tree'],
      answer: 0,
      explanation: 'A binary tree is a hierarchical structure where each node has at most two children.'
    },
    {
      question: 'Which type of binary tree has all levels completely filled except possibly the last?',
      options: ['Complete Binary Tree', 'Full Binary Tree', 'Skewed Tree', 'Perfect Binary Tree'],
      answer: 0,
      explanation: 'A Complete Binary Tree has all levels filled except the last, which is filled left to right.'
    },
    {
      question: 'Which type of tree is used in database indexing and file systems?',
      options: ['Binary Search Tree', 'AVL Tree', 'B-Tree', 'Red-Black Tree'],
      answer: 2,
      explanation: 'B-Trees are balanced trees widely used in databases and file systems for indexing.'
    },
    {
      question: 'Which tree has each node with either 0 or 2 children?',
      options: ['Full Binary Tree', 'Complete Binary Tree', 'AVL Tree', 'Heap Tree'],
      answer: 0,
      explanation: 'A Full Binary Tree ensures each node has 0 or exactly 2 children.'
    },
    {
      question: 'Tricky: Which tree is always height-balanced and self-adjusts after insertions/deletions?',
      options: ['Binary Search Tree', 'Heap Tree', 'AVL Tree', 'Complete Tree'],
      answer: 2,
      explanation: 'AVL Tree is a height-balanced self-adjusting binary search tree.'
    },
    {
      question: 'What is a degenerate (or pathological) tree?',
      options: ['Tree with no children', 'Tree where each parent has only one child', 'Balanced tree', 'Tree with all leaf nodes at the same level'],
      answer: 1,
      explanation: 'A degenerate tree behaves like a linked list, with each node having only one child.'
    },
    {
      question: 'Which type of tree traversal is most commonly used to evaluate expression trees?',
      options: ['Inorder', 'Postorder', 'Preorder', 'Level Order'],
      answer: 1,
      explanation: 'Postorder traversal is used to evaluate expression trees where operands are evaluated before operators.'
    },
    {
      question: 'Program: What kind of tree is this?\n\n       1\n      / \\\n     2   3\n    / \\\n   4   5\n',
      options: ['Full Binary Tree', 'Complete Binary Tree', 'Perfect Binary Tree', 'Skewed Tree'],
      answer: 0,
      explanation: 'Each node has either 0 or 2 children – this is a Full Binary Tree.'
    },
    {
      question: 'Tricky: Which of the following tree types allows multiple keys in a node and multiple children?',
      options: ['AVL Tree', 'B-Tree', 'Heap Tree', 'Binary Tree'],
      answer: 1,
      explanation: 'B-Tree is a multiway search tree with multiple keys per node.'
    },
    {
      question: 'What is the minimum number of nodes in a full binary tree of height 3?',
      options: ['7', '8', '9', '15'],
      answer: 0,
      explanation: 'A full binary tree of height 3 (root at height 0) has 2^(3+1) - 1 = 15 nodes.'
    }
  ],
  'Operations on Types of Trees':[
    {
      question: 'Which operation in a Binary Search Tree (BST) has O(h) time complexity in the worst case?',
      options: ['Insertion', 'Traversal', 'Finding height', 'Level-order traversal'],
      answer: 0,
      explanation: 'Insertion, search, and deletion in BST can take O(h), where h is the height of the tree.'
    },
    {
      question: 'Which traversal is used to clone a binary tree?',
      options: ['Preorder', 'Postorder', 'Inorder', 'Level-order'],
      answer: 0,
      explanation: 'Preorder traversal is used to clone or copy the structure and values of a tree.'
    },
    {
      question: 'Which tree operation maintains balance after insertions or deletions?',
      options: ['Traversal', 'Balancing', 'Heapify', 'Rotation'],
      answer: 3,
      explanation: 'Rotation (left or right) is used in AVL and Red-Black Trees to maintain balance.'
    },
    {
      question: 'Which operation in a B-Tree might lead to node splitting?',
      options: ['Deletion', 'Traversal', 'Search', 'Insertion'],
      answer: 3,
      explanation: 'Insertion in a B-Tree can cause node overflow and result in node splitting.'
    },
    {
      question: 'Tricky: Which traversal visits all leaves of a binary tree in left-to-right order?',
      options: ['Inorder', 'Postorder', 'Preorder', 'Only leaves traversal'],
      answer: 0,
      explanation: 'Inorder traversal will visit all nodes, and leaves are naturally visited in left-to-right order.'
    },
    {
      question: 'Program: What is the output of this operation?\n\nfunction height(node) {\n  if (!node) return -1;\n  return 1 + Math.max(height(node.left), height(node.right));\n}',
      options: ['Counts nodes', 'Returns level', 'Returns tree height', 'Checks balance'],
      answer: 2,
      explanation: 'This recursive function calculates the height of the tree.'
    },
    {
      question: 'Which tree type uses rebalancing techniques like rotations to optimize search time?',
      options: ['Binary Tree', 'B-Tree', 'AVL Tree', 'Heap'],
      answer: 2,
      explanation: 'AVL Trees use rotations to maintain balance after insert/delete operations.'
    },
    {
      question: 'What operation is performed in a Binary Heap to restore the heap property after deletion?',
      options: ['Trickle down', 'Bubble up', 'Rotation', 'Reorder'],
      answer: 0,
      explanation: 'Trickle down (heapify) restores heap structure after removing root.'
    },
    {
      question: 'Which of the following is required to delete a node with two children in a BST?',
      options: ['Replace with leaf', 'Replace with max of left subtree', 'Replace with min of right subtree', 'Directly delete'],
      answer: 2,
      explanation: 'The deleted node is replaced with the in-order successor (min value in right subtree).'
    },
    {
      question: 'Tricky: What is the time complexity of inserting into a perfectly balanced BST with n nodes?',
      options: ['O(n)', 'O(log n)', 'O(1)', 'O(n log n)'],
      answer: 1,
      explanation: 'For balanced BSTs (like AVL), insertions take O(log n) time.'
    }
  ],
  'Graphs':[
    {
      question: 'Which of the following data structures is most suitable to represent a sparse graph?',
      options: ['Adjacency matrix', 'Adjacency list', '2D array', 'Edge list'],
      answer: 1,
      explanation: 'Adjacency list is space-efficient for sparse graphs because it stores only existing edges.'
    },
    {
      question: 'Which traversal algorithm uses a queue and explores neighbors level by level?',
      options: ['Depth First Search', 'Breadth First Search', 'Topological Sort', 'Dijkstra’s Algorithm'],
      answer: 1,
      explanation: 'BFS uses a queue to traverse the graph level by level.'
    },
    {
      question: 'Which graph traversal algorithm uses recursion or a stack?',
      options: ['BFS', 'DFS', 'Prim’s Algorithm', 'Bellman-Ford'],
      answer: 1,
      explanation: 'DFS uses a stack (explicit or implicit via recursion) to explore deeper paths first.'
    },
    {
      question: 'Tricky: How many edges are there in a complete undirected graph with n vertices?',
      options: ['n', 'n(n-1)', 'n(n-1)/2', 'n²'],
      answer: 2,
      explanation: 'A complete undirected graph with n vertices has n(n-1)/2 edges.'
    },
    {
      question: 'Program: What does this code do?\n\nfunction dfs(v, visited) {\n  visited[v] = true;\n  for (let u of graph[v]) {\n    if (!visited[u]) dfs(u, visited);\n  }\n}',
      options: ['BFS traversal', 'DFS traversal', 'Shortest path', 'Cycle detection'],
      answer: 1,
      explanation: 'The code performs DFS traversal on the graph.'
    },
    {
      question: 'Which algorithm is used to find the shortest path in a graph with non-negative edge weights?',
      options: ['Prim’s Algorithm', 'Kruskal’s Algorithm', 'Dijkstra’s Algorithm', 'DFS'],
      answer: 2,
      explanation: 'Dijkstra’s algorithm is used for shortest paths when edge weights are non-negative.'
    },
    {
      question: 'What is the time complexity of BFS for a graph with V vertices and E edges?',
      options: ['O(V)', 'O(E)', 'O(V + E)', 'O(V × E)'],
      answer: 2,
      explanation: 'BFS has a time complexity of O(V + E) since all vertices and edges are visited.'
    },
    {
      question: 'Which algorithm is best for detecting a cycle in an undirected graph?',
      options: ['DFS with parent check', 'BFS with visited set', 'Topological sort', 'Dijkstra’s algorithm'],
      answer: 0,
      explanation: 'DFS with parent tracking is used to detect cycles in undirected graphs.'
    },
    {
      question: 'Tricky: Can a graph have cycles if it is acyclic?',
      options: ['Yes', 'No', 'Only in directed graphs', 'Depends on number of vertices'],
      answer: 1,
      explanation: 'By definition, an acyclic graph does not contain any cycles.'
    },
    {
      question: 'Which of the following algorithms finds a minimum spanning tree?',
      options: ['Kruskal’s Algorithm', 'Dijkstra’s Algorithm', 'DFS', 'Bellman-Ford Algorithm'],
      answer: 0,
      explanation: 'Kruskal’s algorithm is used to find the minimum spanning tree in a graph.'
    }
  ],
  'Types of Graphs':[
    {
      question: 'Which of the following is a characteristic of a directed graph?',
      options: ['Edges have direction', 'No loops allowed', 'Vertices must be integers', 'Edges form trees'],
      answer: 0,
      explanation: 'In directed graphs, each edge has a direction from one vertex to another.'
    },
    {
      question: 'Which of the following graphs contains no cycles?',
      options: ['Cyclic graph', 'Acyclic graph', 'Directed graph', 'Weighted graph'],
      answer: 1,
      explanation: 'An acyclic graph does not contain any cycles.'
    },
    {
      question: 'What is a complete graph?',
      options: ['A graph with no edges', 'A tree with all nodes', 'A graph where every vertex connects to every other vertex', 'A graph with self-loops'],
      answer: 2,
      explanation: 'In a complete graph, every vertex is directly connected to all other vertices.'
    },
    {
      question: 'Tricky: How many edges are in a complete directed graph with n vertices (excluding self-loops)?',
      options: ['n', 'n(n-1)/2', 'n(n-1)', 'n²'],
      answer: 2,
      explanation: 'Each vertex can point to (n-1) others: n × (n-1) total edges.'
    },
    {
      question: 'Which type of graph allows multiple edges between the same pair of vertices?',
      options: ['Simple graph', 'Multigraph', 'Tree', 'Planar graph'],
      answer: 1,
      explanation: 'Multigraphs can have multiple edges between the same vertices.'
    },
    {
      question: 'Which graph has all edges of equal weight?',
      options: ['Directed Graph', 'Unweighted Graph', 'Weighted Graph', 'Bipartite Graph'],
      answer: 1,
      explanation: 'Unweighted graphs treat all edges as having equal cost or weight.'
    },
    {
      question: 'Which of these is true about a bipartite graph?',
      options: ['It contains cycles of odd length', 'Its vertices can be divided into two disjoint sets', 'It always has even edges', 'It must be complete'],
      answer: 1,
      explanation: 'Bipartite graphs split vertices into two disjoint sets such that no two vertices within the same set are adjacent.'
    },
    {
      question: 'Tricky: Which of these graphs can never be bipartite?',
      options: ['Tree', 'Complete graph with 3 vertices', 'Cycle of 4 vertices', 'Graph with no edges'],
      answer: 1,
      explanation: 'A complete graph with 3 vertices contains an odd-length cycle, which disqualifies it from being bipartite.'
    },
    {
      question: 'Program: Which type of graph does the following adjacency matrix represent?\n\n[[0,1,1],[1,0,1],[1,1,0]]',
      options: ['Directed Graph', 'Undirected Complete Graph', 'Multigraph', 'Sparse Graph'],
      answer: 1,
      explanation: 'All non-diagonal elements are 1, indicating every vertex is connected to all others — a complete graph.'
    },
    {
      question: 'Which of the following best describes a weighted graph?',
      options: ['Each edge has a numeric cost', 'All vertices have weights', 'It’s always undirected', 'No loops allowed'],
      answer: 0,
      explanation: 'In weighted graphs, each edge is assigned a weight or cost.'
    }
  ]
},
'C':{
  'Basic Structure of C': [
  {
    question: 'Which of the following is the correct structure of a C program?',
    options: [
      'header files → main → functions',
      'functions → main → header files',
      'main → header files → functions',
      'header files → functions → main'
    ],
    answer: 0,
    explanation: 'A typical C program starts with header files, followed by main() and user-defined functions.'
  },
  {
    question: 'Which function is essential in every C program?',
    options: ['start()', 'init()', 'main()', 'program()'],
    answer: 2,
    explanation: 'main() is the entry point of every C program.'
  },
  {
    question: 'Where should header files be placed in a C program?',
    options: ['After main()', 'Inside main()', 'Before main()', 'Anywhere'],
    answer: 2,
    explanation: 'Header files are included at the top of a C program before main().'
  },
  {
    question: 'What is the purpose of #include<stdio.h> in a C program?',
    options: [
      'It declares functions.',
      'It defines user-defined functions.',
      'It includes standard I/O library functions.',
      'It creates output.'
    ],
    answer: 2,
    explanation: '#include<stdio.h> provides declarations for standard I/O functions like printf and scanf.'
  },
  {
    question: 'Which keyword is used to define a function in C?',
    options: ['func', 'define', 'int', 'function'],
    answer: 2,
    explanation: 'Functions in C are defined using return type keywords like int, void, etc.'
  },
  {
    question: 'Which part of a C program contains variable declarations and logic?',
    options: ['Header file', 'Preprocessor section', 'main()', 'Compiler'],
    answer: 2,
    explanation: 'main() contains the declarations, logic, and function calls in most C programs.'
  },
  {
    question: 'What will be the output of the following program?\n\n#include<stdio.h>\nint main() {\n  printf("Hello World");\n  return 0;\n}',
    options: ['Compile-time error', 'Hello World', 'Segmentation fault', 'No output'],
    answer: 1,
    explanation: 'The program prints "Hello World" to the console.'
  },
  {
    question: 'What does the return 0; in the main function signify?',
    options: [
      'Indicates error occurred',
      'Terminates the OS',
      'Indicates successful execution',
      'Starts execution'
    ],
    answer: 2,
    explanation: 'return 0; indicates the program ran successfully.'
  },
  {
    question: 'Which section handles library files inclusion in C?',
    options: ['Definition section', 'Preprocessor directives', 'Compilation section', 'Execution section'],
    answer: 1,
    explanation: 'Preprocessor directives handle header file inclusion, using #include.'
  },
  {
    question: 'Choose the correct output:\n\n#include<stdio.h>\nint main() {\n  int x = 5;\n  printf("%d", x);\n  return 0;\n}',
    options: ['x', '5', '%d', 'Error'],
    answer: 1,
    explanation: 'The variable x has value 5, which is printed using printf("%d", x).'
  }
],
'Variables & Datatypes': [
  {
    question: 'Which of the following is a valid variable declaration in C?',
    options: ['int 1value;', 'int value1;', 'float double;', 'char@name;'],
    answer: 1,
    explanation: 'Variable names in C must start with a letter or underscore. "value1" is valid.'
  },
  {
    question: 'What is the size of an int variable (in bytes) on a typical 32-bit system?',
    options: ['2', '4', '8', '1'],
    answer: 1,
    explanation: 'On a 32-bit system, int usually occupies 4 bytes.'
  },
  {
    question: 'Which data type is best suited to store a single character?',
    options: ['int', 'char', 'float', 'string'],
    answer: 1,
    explanation: 'The char data type is used to store single characters and occupies 1 byte.'
  },
  {
    question: 'What is the default value of a local variable in C?',
    options: ['0', 'garbage value', 'null', 'undefined'],
    answer: 1,
    explanation: 'Local variables in C are not initialized by default, so they hold garbage values.'
  },
  {
    question: 'Which format specifier is used to read a float value using scanf()?',
    options: ['%f', '%d', '%c', '%lf'],
    answer: 0,
    explanation: '%f is used to scan float values. %lf is for double.'
  },
  {
    question: 'Which of the following is NOT a valid C datatype?',
    options: ['double', 'real', 'int', 'char'],
    answer: 1,
    explanation: 'real is not a valid datatype in standard C.'
  },
  {
    question: 'What will be the output of this code?\n\n#include<stdio.h>\nint main() {\n  float a = 5/2;\n  printf("%f", a);\n  return 0;\n}',
    options: ['2.500000', '2.000000', '2', 'Error'],
    answer: 1,
    explanation: 'Integer division 5/2 results in 2.0, which is stored as 2.000000 in float.'
  },
  {
    question: 'What is the correct way to declare a constant integer in C?',
    options: ['int const a = 10;', 'const int a = 10;', '#define a = 10;', 'Both 1 and 2'],
    answer: 3,
    explanation: 'Both int const and const int are valid ways to declare constants.'
  },
  {
    question: 'Which of the following correctly initializes multiple variables in one line?',
    options: ['int a = 1, b = 2;', 'int a, b = 2, c;', 'int a = b = c = 5;', 'int a == 1, b == 2;'],
    answer: 0,
    explanation: 'int a = 1, b = 2; is valid. The rest have syntax issues.'
  },
  {
    question: 'Which of the following best describes a variable in C?',
    options: ['A constant value', 'A memory location', 'A function', 'A header file'],
    answer: 1,
    explanation: 'A variable in C is a named memory location that stores data.'
  }
],
'Operators': [
  {
    question: 'Which of the following is the correct syntax for the modulus operator in C?',
    options: ['%', 'mod', '%%', '&'],
    answer: 0,
    explanation: 'The % operator is used to compute the remainder in integer division.'
  },
  {
    question: 'What is the result of the following expression: 5 + 2 * 3?',
    options: ['21', '11', '15', '7'],
    answer: 1,
    explanation: 'Multiplication has higher precedence than addition. So, 2*3 = 6, then 5+6 = 11.'
  },
  {
    question: 'Which operator is used to access the value stored at a pointer address?',
    options: ['&', '*', '->', '%'],
    answer: 1,
    explanation: '* is the dereference operator, used to access the value stored at an address.'
  },
  {
    question: 'What is the output of the following code?\n\nint a = 5, b = 2;\nprintf("%d", a/b);',
    options: ['2', '2.5', '3', 'Error'],
    answer: 0,
    explanation: 'Integer division results in 2. The decimal part is truncated.'
  },
  {
    question: 'Which of the following is the logical AND operator in C?',
    options: ['&', '&&', '|', '||'],
    answer: 1,
    explanation: '&& is used for logical AND in C.'
  },
  {
    question: 'What does the expression (++a) do?',
    options: ['Increments a after using it', 'Increments a before using it', 'No change to a', 'Decrements a'],
    answer: 1,
    explanation: '++a is a pre-increment operator, meaning it increments a before evaluation.'
  },
  {
    question: 'Which of the following is a ternary operator?',
    options: ['++', '--', '? :', '=='],
    answer: 2,
    explanation: '? : is the ternary operator used for conditional expressions.'
  },
  {
    question: 'What is the result of 10 & 7 in binary (AND operation)?',
    options: ['2', '3', '6', '7'],
    answer: 0,
    explanation: '10 = 1010, 7 = 0111; 1010 & 0111 = 0010 = 2.'
  },
  {
    question: 'Which of the following statements is true about relational operators in C?',
    options: ['== compares values for equality', '= is a comparison operator', '!= assigns a value', '>= means less than'],
    answer: 0,
    explanation: '== is used to compare if two values are equal.'
  },
  {
    question: 'What is the result of this expression?\nint x = 4;\nint y = x++ + ++x;',
    options: ['10', '9', '8', '11'],
    answer: 3,
    explanation: 'x++ is 4 (then becomes 5), ++x is 6. So y = 4 + 6 = 10.'
  }
],
'Format Specifiers and Escape Sequences': [
  {
    question: 'Which format specifier is used to print an integer in C?',
    options: ['%c', '%d', '%f', '%s'],
    answer: 1,
    explanation: '%d is used to print integers in C.'
  },
  {
    question: 'What will be the output of `printf("%c", 65);`?',
    options: ['65', 'A', 'Error', 'a'],
    answer: 1,
    explanation: '65 is the ASCII value of the character A.'
  },
  {
    question: 'Which format specifier is used to print a float value?',
    options: ['%d', '%f', '%lf', '%c'],
    answer: 1,
    explanation: '%f is used for float values. %lf is used for double.'
  },
  {
    question: 'What does the escape sequence `\\n` represent?',
    options: ['Tab', 'Newline', 'Backslash', 'Null character'],
    answer: 1,
    explanation: '\\n is the newline escape sequence.'
  },
  {
    question: 'What will `printf("Hello\\tWorld");` print?',
    options: ['HelloWorld', 'Hello\tWorld', 'Hello World', 'Hello\\tWorld'],
    answer: 1,
    explanation: '\\t inserts a horizontal tab space.'
  },
  {
    question: 'What is the output of `printf("%s", "C\\nProgramming");`?',
    options: ['C\\nProgramming', 'C Programming', 'C\nProgramming', 'Error'],
    answer: 2,
    explanation: '\\n is interpreted as a newline, so it prints C then goes to a new line and prints Programming.'
  },
  {
    question: 'Which format specifier is used for printing addresses (pointers)?',
    options: ['%u', '%x', '%p', '%a'],
    answer: 2,
    explanation: '%p is used to print a pointer (memory address).'
  },
  {
    question: 'What is the purpose of the escape sequence `\\\"` in a printf statement?',
    options: ['To print a double quote', 'To end the string', 'To print a backslash', 'To start a comment'],
    answer: 0,
    explanation: '\\\" prints a double quote inside a string.'
  },
  {
    question: 'Choose the correct way to print the percentage symbol (%) in output.',
    options: ['%%', '%', '/%', '\\%'],
    answer: 0,
    explanation: '%% is used to escape the % symbol in printf.'
  },
  {
    question: 'Which of these is NOT a valid escape sequence in C?',
    options: ['\\n', '\\t', '\\a', '\\x'],
    answer: 3,
    explanation: '\\x is used for hexadecimal, but alone it’s invalid unless followed by a hex value like \\x41.'
  }
],
'Control Statements': [
  {
    question: 'What is the output of the following code?\n\nint x = 10;\nif (x > 5)\n  printf("A");\nelse\n  printf("B");',
    options: ['A', 'B', 'AB', 'Nothing'],
    answer: 0,
    explanation: 'Since x is greater than 5, "A" will be printed.'
  },
  {
    question: 'Which keyword is used to terminate a loop or switch case prematurely in C?',
    options: ['stop', 'exit', 'break', 'terminate'],
    answer: 2,
    explanation: '`break` is used to exit from loops or switch statements.'
  },
  {
    question: 'What is the output of the following?\n\nint x = 0;\nwhile(x < 3) {\n  printf("%d", x);\n  x++;\n}',
    options: ['012', '123', '321', 'Error'],
    answer: 0,
    explanation: 'The loop runs while x < 3, printing 0, 1, and 2.'
  },
  {
    question: 'Which loop is guaranteed to execute at least once?',
    options: ['for', 'while', 'do-while', 'None of these'],
    answer: 2,
    explanation: 'The `do-while` loop executes the body first, then checks the condition.'
  },
  {
    question: 'What will be the output of the following code?\n\nfor(int i = 1; i < 3; i++)\n  for(int j = 1; j <= 2; j++)\n    printf("*");',
    options: ['**', '****', '***', 'Error'],
    answer: 1,
    explanation: 'Nested loop: i runs 2 times, j runs 2 times = 4 times "*".'
  },
  {
    question: 'What is the purpose of the `continue` statement?',
    options: ['Exits loop', 'Skips current iteration', 'Stops the program', 'Skips next iteration'],
    answer: 1,
    explanation: '`continue` skips the remaining loop body for current iteration.'
  },
  {
    question: 'What is the output of the following code?\n\nint x = 5;\nif (x == 5)\n  if (x < 10)\n    printf("A");\n  else\n    printf("B");',
    options: ['A', 'B', 'AB', 'Error'],
    answer: 0,
    explanation: 'Nested if executes correctly. x == 5 and x < 10 both true.'
  },
  {
    question: 'Which of the following statements is true about `switch` in C?',
    options: ['`case` can be a float', 'Duplicate case values allowed', '`default` is optional', '`switch` works with strings'],
    answer: 2,
    explanation: '`default` is optional in switch; float and strings are not allowed.'
  },
  {
    question: 'What happens if you omit `break` in a `switch` case?',
    options: ['It skips to next case', 'It throws an error', 'It continues executing all following cases', 'It restarts the switch'],
    answer: 2,
    explanation: 'Omitting `break` causes fall-through to the next case(s).'
  },
  {
    question: 'What will the following code output?\n\nint a = 3;\nif (a = 5)\n  printf("True");\nelse\n  printf("False");',
    options: ['True', 'False', 'Error', 'Nothing'],
    answer: 0,
    explanation: 'a = 5 is an assignment, which returns true (non-zero), so "True" is printed.'
  }
],
'Loops': [
  {
    question: 'Which loop structure in C checks the condition after executing the loop body?',
    options: ['for', 'while', 'do-while', 'none'],
    answer: 2,
    explanation: '`do-while` loop executes the body first, then checks the condition.'
  },
  {
    question: 'What is the output of the following code?\n\nint i = 0;\ndo {\n  printf("%d ", i);\n  i++;\n} while(i < 3);',
    options: ['0 1 2', '1 2 3', '0 1 2 3', 'Error'],
    answer: 0,
    explanation: 'The loop prints values of i from 0 to 2 before stopping.'
  },
  {
    question: 'How many times will the following loop execute?\n\nfor (int i = 1; i <= 5; i++) {}',
    options: ['4', '5', '6', 'infinite'],
    answer: 1,
    explanation: 'i runs from 1 to 5, inclusive, so it runs 5 times.'
  },
  {
    question: 'Which loop is best suited when the number of iterations is known?',
    options: ['while', 'do-while', 'for', 'none of these'],
    answer: 2,
    explanation: '`for` loop is preferred when the iteration count is known beforehand.'
  },
  {
    question: 'What is the output?\n\nint i = 1;\nwhile (i <= 3) {\n  printf("%d ", i);\n  i++;\n}',
    options: ['1 2 3', '0 1 2', '2 3 4', '1 2 3 4'],
    answer: 0,
    explanation: 'It prints i from 1 to 3.'
  },
  {
    question: 'What does the following code do?\n\nfor(;;) {\n  printf("Hello");\n}',
    options: ['Infinite Hello', 'Error', 'No output', 'Prints Hello once'],
    answer: 0,
    explanation: '`for(;;)` is an infinite loop with no condition to break it.'
  },
  {
    question: 'What is the output of this code?\n\nint i = 5;\nwhile(i-- > 0) {\n  printf("%d ", i);\n}',
    options: ['5 4 3 2 1', '4 3 2 1 0', '5 4 3 2 1 0', 'Error'],
    answer: 1,
    explanation: 'Post-decrement prints 4 to 0.'
  },
  {
    question: 'Identify the error in this code:\n\nfor(int i = 0; i < 10; i--)\n  printf("%d ", i);',
    options: ['i should be declared outside', 'Infinite loop', 'Syntax error', 'None'],
    answer: 1,
    explanation: 'i-- causes the loop to never reach termination; infinite loop.'
  },
  {
    question: 'What is the output of this tricky loop?\n\nfor (int i = 0; i < 10; i += 2)\n  if (i % 4 == 0)\n    continue;\n  else\n    printf("%d ", i);',
    options: ['0 2 4 6 8', '2 6', '2 4 6 8', '4 8'],
    answer: 1,
    explanation: 'Only i = 2 and i = 6 pass the if condition check.'
  },
  {
    question: 'Which of the following statements is true?',
    options: ['A `while` loop must have a condition.', '`do-while` executes only if condition is true.', '`for` loop is always faster than `while`.', 'All loops must include break.'],
    answer: 0,
    explanation: 'A `while` loop must include a condition to function properly.'
  }
],
'Typecasting': [
  {
    question: 'What is typecasting in C?',
    options: ['Converting one data type to another', 'Copying data', 'Checking type compatibility', 'Creating new types'],
    answer: 0,
    explanation: 'Typecasting refers to converting a variable from one data type to another.'
  },
  {
    question: 'What is the output of the code?\n\nfloat f = (float)5/2;',
    options: ['2', '2.0', '2.5', 'Error'],
    answer: 2,
    explanation: 'Casting 5 to float before division makes the result 2.5.'
  },
  {
    question: 'Which of the following is a valid example of explicit typecasting?',
    options: ['int x = 10.5;', 'float y = 10;', 'int z = (int)10.5;', 'char c = "A";'],
    answer: 2,
    explanation: '(int)10.5 explicitly converts the float 10.5 to integer 10.'
  },
  {
    question: 'What is the output?\n\nint a = 10;\nint b = 3;\nfloat result = (float)(a / b);',
    options: ['3.0', '3.3', '3', 'Error'],
    answer: 0,
    explanation: 'a / b is 3 (integer division), then cast to 3.0.'
  },
  {
    question: 'Which type conversion happens automatically in C?',
    options: ['Explicit', 'Implicit', 'Manual', 'Functional'],
    answer: 1,
    explanation: 'Implicit conversion happens when types are automatically converted by the compiler.'
  },
  {
    question: 'What is the output?\n\nint a = 5;\nfloat b = 2.0;\nfloat c = a / b;',
    options: ['2.0', '2.5', '2', 'Error'],
    answer: 1,
    explanation: 'Integer a is implicitly cast to float; result is 2.5.'
  },
  {
    question: 'Which of the following casts will truncate the decimal part?',
    options: ['float a = 2.5;', 'int b = (int)2.9;', 'double d = 4.0;', 'char c = "B";'],
    answer: 1,
    explanation: 'Casting 2.9 to int results in 2 (truncation of decimal part).'
  },
  {
    question: 'What is the result of the following?\n\nint x = 7;\ndouble y = 2;\nprintf("%f", x / y);',
    options: ['3.5', '3.0', '3.00', 'Compiler Error'],
    answer: 1,
    explanation: 'x / y uses implicit type conversion to double, but x/y is still integer division.'
  },
  {
    question: 'Choose the correct typecast to avoid integer division in:\n\nint a = 8, b = 3;\nfloat result = ?;',
    options: ['result = a / b;', 'result = float(a / b);', 'result = (float)(a / b);', 'result = (float)a / b;'],
    answer: 3,
    explanation: '(float)a promotes the expression to float, so 8 / 3 = 2.666...'
  },
  {
    question: 'Which statement about casting is TRUE?',
    options: ['(float)5/2 gives 2', '(float)(5/2) gives 2.5', '(int)3.7 gives 3', 'C does not support typecasting'],
    answer: 2,
    explanation: '(int)3.7 truncates the decimal and gives 3.'
  }
],
'Functions': [
  {
    question: 'What is a function in C?',
    options: ['A variable', 'A pointer', 'A reusable block of code', 'A preprocessor directive'],
    answer: 2,
    explanation: 'A function is a block of code designed to perform a specific task and can be reused.'
  },
  {
    question: 'Which keyword is used to declare a function in C?',
    options: ['func', 'define', 'void', 'return type (like int, float, void)'],
    answer: 3,
    explanation: 'Functions are declared using their return type followed by the function name.'
  },
  {
    question: 'What is the output?\n\nint fun() { return 5; }\nvoid main() {\n    printf("%d", fun());\n}',
    options: ['5', '0', 'Compiler Error', 'Garbage Value'],
    answer: 0,
    explanation: 'Function returns 5, which is printed.'
  },
  {
    question: 'Which of the following is **not** true about functions in C?',
    options: ['A function can call itself', 'Functions cannot return arrays', 'Functions must return a value', 'Functions can be nested'],
    answer: 3,
    explanation: 'C does not support nested functions (functions defined inside other functions).'
  },
  {
    question: 'What is a function prototype?',
    options: ['A function without a body', 'A function defined in a library', 'Declaration of function before main()', 'A function with parameters'],
    answer: 2,
    explanation: 'A function prototype declares the function’s name, return type, and parameters before use.'
  },
  {
    question: 'What will this code print?\n\nvoid show();\nint main() {\n  show();\n  return 0;\n}\nvoid show() {\n  printf("Hi");\n}',
    options: ['Hi', 'Error', 'Nothing', 'Garbage'],
    answer: 0,
    explanation: 'The function `show()` is declared before `main()` and defined after, which is valid.'
  },
  {
    question: 'Which function is always called first when a C program starts?',
    options: ['start()', 'init()', 'main()', 'first()'],
    answer: 2,
    explanation: 'The `main()` function is the entry point of every C program.'
  },
  {
    question: 'What is the output?\n\nvoid test(int x) { x = 20; }\nint main() {\n  int x = 10;\n  test(x);\n  printf("%d", x);\n}',
    options: ['10', '20', 'Garbage', 'Error'],
    answer: 0,
    explanation: 'Function arguments are passed by value in C, so the original `x` remains unchanged.'
  },
  {
    question: 'Which of the following is **not** required for function overloading in C?',
    options: ['Different parameter types', 'Same function name', 'Different number of arguments', 'It is not supported'],
    answer: 3,
    explanation: 'C does **not** support function overloading. This is a C++ feature.'
  },
  {
    question: 'Which function from C library is used to calculate the square root of a number?',
    options: ['power()', 'sqrt()', 'root()', 'exp()'],
    answer: 1,
    explanation: '`sqrt()` is the standard library function used to compute square roots, found in `<math.h>`.'
  }
],
'Arrays': [
  {
    question: 'What is the correct syntax to declare an array of 10 integers in C?',
    options: ['int arr;', 'int arr(10);', 'int arr[10];', 'int[10] arr;'],
    answer: 2,
    explanation: 'int arr[10]; is the correct way to declare an array of 10 integers in C.'
  },
  {
    question: 'What is the index of the first element in a C array?',
    options: ['1', '0', '-1', 'Depends on compiler'],
    answer: 1,
    explanation: 'Array indexing in C starts from 0.'
  },
  {
    question: 'What will this code print?\n\nint a[] = {1, 2, 3};\nprintf("%d", a[1]);',
    options: ['1', '2', '3', 'Garbage Value'],
    answer: 1,
    explanation: 'a[1] accesses the second element of the array which is 2.'
  },
  {
    question: 'Which of the following statements about arrays in C is false?',
    options: [
      'Arrays store elements in contiguous memory locations.',
      'Array index starts from 1.',
      'Array elements can be accessed using indices.',
      'Size of the array must be a constant expression.'
    ],
    answer: 1,
    explanation: 'In C, array indexing starts from 0, not 1.'
  },
  {
    question: 'What happens if you access out-of-bounds index in an array?',
    options: ['Compile-time error', 'Run-time error', 'Undefined behavior', 'Returns 0'],
    answer: 2,
    explanation: 'Accessing out-of-bound indices results in undefined behavior in C.'
  },
  {
    question: 'Which of the following accesses the last element of an array `int arr[5];`?',
    options: ['arr[5]', 'arr[4]', 'arr[6]', 'arr[0]'],
    answer: 1,
    explanation: 'Array of size 5 has indices from 0 to 4. So, arr[4] is the last element.'
  },
  {
    question: 'What is the output?\n\nint arr[] = {10, 20, 30};\nprintf("%d", *(arr + 2));',
    options: ['10', '20', '30', 'Garbage'],
    answer: 2,
    explanation: 'arr + 2 points to third element, *(arr + 2) = 30.'
  },
  {
    question: 'What is the result of sizeof(arr) if arr is declared as int arr[10];?',
    options: ['10', '20', '40', 'Depends on system'],
    answer: 2,
    explanation: 'Each int is 4 bytes typically, so 10 * 4 = 40 bytes.'
  },
  {
    question: 'Which of the following initializes all elements of array `int arr[5]` to 0?',
    options: ['int arr[5];', 'int arr[5] = {0};', 'int arr[5] = {1};', 'int arr[] = 0;'],
    answer: 1,
    explanation: 'Using {0} initializes the first element to 0 and the rest to 0 automatically.'
  },
  {
    question: 'What is the output?\n\nint a[3] = {5};\nfor(int i=0; i<3; i++) printf("%d ", a[i]);',
    options: ['5 0 0', '5 5 5', 'Garbage', '0 0 5'],
    answer: 0,
    explanation: 'Only the first element is initialized to 5, the rest are zero-initialized.'
  }
],
'Pointers': [
  {
    question: 'What does a pointer in C store?',
    options: ['A value', 'An address', 'A data type', 'A variable name'],
    answer: 1,
    explanation: 'A pointer stores the memory address of another variable.'
  },
  {
    question: 'Which of the following declares a pointer to an integer?',
    options: ['int *p;', 'int p*;', 'int &p;', 'pointer<int> p;'],
    answer: 0,
    explanation: 'int *p; correctly declares a pointer to an integer in C.'
  },
  {
    question: 'What will be the output?\n\nint a = 10;\nint *p = &a;\nprintf("%d", *p);',
    options: ['10', 'Address of a', 'Garbage', 'Compilation error'],
    answer: 0,
    explanation: '*p dereferences the pointer to get the value of `a`, which is 10.'
  },
  {
    question: 'What will be the result of the following code?\n\nint a = 5;\nint *p;\np = &a;\n*p = *p + 1;\nprintf("%d", a);',
    options: ['5', '6', 'Garbage value', 'Error'],
    answer: 1,
    explanation: 'Pointer `p` points to `a` and increments its value. So `a` becomes 6.'
  },
  {
    question: 'What is the output?\n\nint *p = NULL;\nprintf("%d", *p);',
    options: ['0', 'NULL', 'Segmentation fault', '1'],
    answer: 2,
    explanation: 'Dereferencing a NULL pointer causes undefined behavior (likely a segmentation fault).'
  },
  {
    question: 'Which operator is used to get the value at the address pointed to by a pointer?',
    options: ['&', '*', '#', '@'],
    answer: 1,
    explanation: 'The * (dereference) operator is used to access the value at the pointer’s address.'
  },
  {
    question: 'What is the output?\n\nint a = 10;\nint *p = &a;\nint **pp = &p;\nprintf("%d", **pp);',
    options: ['10', 'Address of p', 'Address of a', 'Garbage'],
    answer: 0,
    explanation: '**pp dereferences twice to get the value of `a`, which is 10.'
  },
  {
    question: 'Which of the following is true about pointers in C?',
    options: [
      'You can assign any integer to a pointer',
      'Pointers can only point to int types',
      'A pointer must be dereferenced to access the value it points to',
      'Pointers are only used for arrays'
    ],
    answer: 2,
    explanation: 'To access the value stored at the address, a pointer must be dereferenced using `*`.'
  },
  {
    question: 'What is the result of the following?\n\nint arr[3] = {10, 20, 30};\nint *p = arr;\nprintf("%d", *(p + 2));',
    options: ['10', '20', '30', '40'],
    answer: 2,
    explanation: 'p + 2 points to the third element of the array, i.e., 30.'
  },
  {
    question: 'Which of the following is NOT valid?',
    options: ['int *p;', 'float *p;', 'char *p;', 'int &p;'],
    answer: 3,
    explanation: 'int &p; is invalid in C; it uses reference syntax from C++.'
  }
],
'Call by Value & Call by Reference': [
  {
    question: 'Which parameter passing method copies the actual value into the function?',
    options: ['Call by Reference', 'Call by Value', 'Pointer Passing', 'None'],
    answer: 1,
    explanation: 'Call by Value passes a copy of the variable, so changes do not affect the original.'
  },
  {
    question: 'What will be the output?\n\nvoid fun(int x) { x = 20; }\nint main() {\n  int a = 10;\n  fun(a);\n  printf("%d", a);\n}',
    options: ['10', '20', 'Garbage', 'Error'],
    answer: 0,
    explanation: 'Since x is passed by value, changing it inside fun() does not affect a.'
  },
  {
    question: 'What is passed when using call by reference in C?',
    options: ['Copy of the variable', 'Address of the variable', 'Value of variable', 'Reference object'],
    answer: 1,
    explanation: 'Call by reference is simulated in C using pointers, which pass the address of a variable.'
  },
  {
    question: 'What is the output?\n\nvoid update(int *x) { *x = *x + 5; }\nint main() {\n  int a = 10;\n  update(&a);\n  printf("%d", a);\n}',
    options: ['10', '15', '5', 'Error'],
    answer: 1,
    explanation: 'The address of a is passed, so *x modifies the original value.'
  },
  {
    question: 'Which of the following is NOT true for Call by Value?',
    options: [
      'Changes in function do not affect original variable',
      'Copies actual value',
      'Uses pointers to modify values',
      'Default in C'
    ],
    answer: 2,
    explanation: 'Call by value does not use pointers; thats used in call by reference.'
  },
  {
    question: 'What will this code output?\n\nvoid swap(int a, int b) {\n  int temp = a; a = b; b = temp;\n}\nint main() {\n  int x = 5, y = 10;\n  swap(x, y);\n  printf("%d %d", x, y);\n}',
    options: ['10 5', '5 10', 'Error', 'Garbage'],
    answer: 1,
    explanation: 'swap() is using call by value, so x and y remain unchanged.'
  },
  {
    question: 'How can we achieve call by reference in C?',
    options: ['By using arrays', 'By using functions', 'By using pointers', 'By using loops'],
    answer: 2,
    explanation: 'Pointers are used to pass addresses and simulate call by reference.'
  },
  {
    question: 'What is the output?\n\nvoid add(int *a, int *b) {\n  *a = *a + *b;\n}\nint main() {\n  int x = 3, y = 7;\n  add(&x, &y);\n  printf("%d", x);\n}',
    options: ['3', '7', '10', '0'],
    answer: 2,
    explanation: 'The function modifies the value of x using its address, so x becomes 10.'
  },
  {
    question: 'Which of the following is a drawback of call by value?',
    options: [
      'Security issues',
      'Changes in value reflect back',
      'Memory usage increases due to copying',
      'It is slower than call by reference'
    ],
    answer: 2,
    explanation: 'Call by value copies data, which increases memory usage for large data.'
  },
  {
    question: 'Which code correctly swaps values using call by reference?\nA: void swap(int *a, int *b) {\n int temp = *a; *a = *b; *b = temp;\n}',
    options: ['A only', 'Not possible in C', 'Needs classes', 'Use inline functions'],
    answer: 0,
    explanation: 'In C, we use pointers to implement call by reference and swap values.'
  }
],
'Strings': [
  {
    question: 'Which header file is required for using string functions like strcpy() and strlen()?',
    options: ['stdio.h', 'stdlib.h', 'string.h', 'ctype.h'],
    answer: 2,
    explanation: 'The <string.h> header file contains all standard string functions.'
  },
  {
    question: 'What will be the output of the following code?\n\nchar str[] = "Hello";\nprintf("%d", strlen(str));',
    options: ['5', '6', 'Error', 'Garbage'],
    answer: 0,
    explanation: 'strlen counts characters until the null terminator. "Hello" has 5 characters.'
  },
  {
    question: 'Which function is used to copy one string into another in C?',
    options: ['strcat()', 'strcpy()', 'strcmp()', 'strrev()'],
    answer: 1,
    explanation: 'strcpy(dest, src) copies the contents of src into dest.'
  },
  {
    question: 'What will be the output?\n\nchar str1[10] = "Hi";\nchar str2[] = "World";\nstrcat(str1, str2);\nprintf("%s", str1);',
    options: ['Hi', 'World', 'HiWorld', 'Error'],
    answer: 2,
    explanation: 'strcat() appends str2 to str1, so output is HiWorld.'
  },
  {
    question: 'What does strcmp() return when two strings are equal?',
    options: ['1', '0', '-1', 'Error'],
    answer: 1,
    explanation: 'strcmp() returns 0 when both strings are identical.'
  },
  {
    question: 'Which of the following correctly declares a string in C?',
    options: [
      'char name[10];',
      'char name = "Hello";',
      'string name = "Hello";',
      'char name();'
    ],
    answer: 0,
    explanation: 'char name[10] reserves space for a string of up to 9 characters + null terminator.'
  },
  {
    question: 'What is the issue in this code?\n\nchar s[5] = "Hello";',
    options: [
      'Nothing is wrong',
      'No null character will be stored',
      'Array is too small',
      'Hello is not a string'
    ],
    answer: 2,
    explanation: '"Hello" needs 6 spaces including the null character, but only 5 are allocated.'
  },
  {
    question: 'What will be the output?\n\nchar str1[] = "abc";\nchar str2[] = "ABC";\nprintf("%d", strcmp(str1, str2));',
    options: ['0', '< 0', '> 0', 'Error'],
    answer: 2,
    explanation: 'strcmp is case-sensitive. "a" > "A", so result is > 0.'
  },
  {
    question: 'Which function is used to reverse a string?',
    options: ['strrev()', 'reverse()', 'revstr()', 'rev()'],
    answer: 0,
    explanation: 'strrev() is used to reverse a string in some compilers, but it’s not standard.'
  },
  {
    question: 'Which of the following is NOT a valid string function in C?',
    options: ['strcat()', 'strcpy()', 'strcmp()', 'strjoin()'],
    answer: 3,
    explanation: 'strjoin() is not a standard C string function.'
  }
],
'String Functions': [
  {
    question: 'Which function returns the length of a string in C?',
    options: ['strlen()', 'strcpy()', 'strcmp()', 'strcat()'],
    answer: 0,
    explanation: 'strlen() returns the number of characters in a string excluding the null terminator.'
  },
  {
    question: 'What is the output of:\n\nchar str[] = "hello";\nprintf("%d", strlen(str));',
    options: ['4', '5', '6', 'Error'],
    answer: 1,
    explanation: 'strlen("hello") returns 5, as it excludes the null terminator.'
  },
  {
    question: 'Which function copies a string to another?',
    options: ['strcpy()', 'strcat()', 'strcmp()', 'strrev()'],
    answer: 0,
    explanation: 'strcpy(dest, src) copies the contents of src into dest.'
  },
  {
    question: 'What is the output of:\n\nchar str1[20] = "Good";\nchar str2[] = "Morning";\nstrcat(str1, str2);\nprintf("%s", str1);',
    options: ['GoodMorning', 'Good', 'Morning', 'Error'],
    answer: 0,
    explanation: 'strcat appends str2 to str1, resulting in GoodMorning.'
  },
  {
    question: 'Which function compares two strings and returns 0 if they are equal?',
    options: ['strcmp()', 'strcpy()', 'strlen()', 'strcat()'],
    answer: 0,
    explanation: 'strcmp() returns 0 if both strings are equal.'
  },
  {
    question: 'What does `strncpy()` do?',
    options: [
      'Copies n characters from source to destination',
      'Compares n characters',
      'Joins two strings',
      'Calculates length'
    ],
    answer: 0,
    explanation: 'strncpy(dest, src, n) copies n characters from src to dest.'
  },
  {
    question: 'Which function finds the first occurrence of a character in a string?',
    options: ['strchr()', 'strrchr()', 'strstr()', 'strlen()'],
    answer: 0,
    explanation: 'strchr() returns a pointer to the first occurrence of a character.'
  },
  {
    question: 'What will `strstr("programming", "gram")` return?',
    options: ['gramming', 'programming', 'NULL', 'Error'],
    answer: 0,
    explanation: 'strstr returns a pointer to the first occurrence of the substring.'
  },
  {
    question: 'Which function is used to reverse a string (non-standard)?',
    options: ['strrev()', 'strcpy()', 'strcat()', 'strchr()'],
    answer: 0,
    explanation: 'strrev() reverses a string but is not part of the C standard library.'
  },
  {
    question: 'What is a possible issue with this code?\n\nchar s[4];\nstrcpy(s, "code");',
    options: [
      'No issue',
      's will store only "cod"',
      'Buffer overflow',
      'strcpy will not copy anything'
    ],
    answer: 2,
    explanation: '"code" requires 5 bytes including null character, but s[4] is too small.'
  }
],
'Structures': [
  {
    question: 'What is the correct syntax to define a structure in C?',
    options: [
      'struct Person { char name[20]; int age; };',
      'structure Person { char name[20]; int age; };',
      'Person { name[20]; age; };',
      'struct { name[20]; age; };'
    ],
    answer: 0,
    explanation: 'The correct way to define a structure is using `struct` keyword followed by name and members.'
  },
  {
    question: 'How do you declare a variable of a structure named `Person`?',
    options: [
      'struct Person p1;',
      'Person p1;',
      'struct p1 Person;',
      'Person.struct p1;'
    ],
    answer: 0,
    explanation: 'You need to use `struct Person` when declaring a variable unless a typedef is used.'
  },
  {
    question: 'Which operator is used to access structure members using a pointer?',
    options: ['.', '->', '&', '*'],
    answer: 1,
    explanation: 'The arrow operator `->` is used to access members through a pointer to a structure.'
  },
  {
    question: 'What is the output?\n\nstruct A { int x; } a = {5};\nprintf("%d", a.x);',
    options: ['Garbage value', '0', '5', 'Compilation error'],
    answer: 2,
    explanation: 'a.x is correctly initialized to 5.'
  },
  {
    question: 'Can a structure in C contain another structure as a member?',
    options: ['Yes', 'No', 'Only in C++', 'Only with pointers'],
    answer: 0,
    explanation: 'Structures in C can be nested, meaning one structure can contain another.'
  },
  {
    question: 'What will happen?\n\nstruct A { int x; };\nA a1;\nprintf("%d", a1.x);',
    options: [
      'Compilation error',
      'Runtime error',
      'Garbage value',
      '0'
    ],
    answer: 2,
    explanation: 'Without initialization, structure members hold garbage values.'
  },
  {
    question: 'What is the size of this structure?\n\nstruct X { char a; int b; };',
    options: ['5', '8', '4', 'Depends on compiler'],
    answer: 3,
    explanation: 'Due to padding/alignment, the size may vary by compiler; typically 8 on 32-bit systems.'
  },
  {
    question: 'Which keyword is used to avoid using "struct" every time?',
    options: ['define', 'typedef', 'alias', 'structname'],
    answer: 1,
    explanation: '`typedef` can create an alias, allowing you to skip the `struct` keyword while declaring variables.'
  },
  {
    question: 'How do you dynamically allocate memory for a structure?',
    options: [
      'malloc(sizeof(struct A))',
      'alloc(struct A)',
      'sizeof(malloc(struct A))',
      'new struct A'
    ],
    answer: 0,
    explanation: 'malloc is used to dynamically allocate memory for structures in C.'
  },
  {
    question: 'What is the output?\n\nstruct S { int a; }; struct S s = {10}; struct S *p = &s;\nprintf("%d", (*p).a);',
    options: ['10', 'Garbage', 'Address', 'Error'],
    answer: 0,
    explanation: '(*p).a accesses the member `a` of structure `s` using pointer `p`.'
  }
],
'Unions': [
  {
    question: 'Which keyword is used to define a union in C?',
    options: ['struct', 'union', 'enum', 'define'],
    answer: 1,
    explanation: 'The `union` keyword is used to define a union in C.'
  },
  {
    question: 'How does memory allocation differ between structures and unions?',
    options: [
      'Structure members share memory; union members have separate memory',
      'Both have the same memory allocation',
      'Union members share memory; structure members have separate memory',
      'Only structures allocate memory'
    ],
    answer: 2,
    explanation: 'In unions, all members share the same memory; in structures, each member has its own memory.'
  },
  {
    question: 'What is the size of the following union?\n\nunion U { int a; char b; };',
    options: ['4', '1', '5', 'Depends on compiler'],
    answer: 0,
    explanation: 'The size of a union is equal to the size of its largest member. Here, `int` is 4 bytes.'
  },
  {
    question: 'Which of the following best describes the use of unions?',
    options: [
      'To save memory by using one variable for multiple purposes',
      'To define constants',
      'To group different functions',
      'To store arrays'
    ],
    answer: 0,
    explanation: 'Unions are used when only one variable is used at a time, saving memory.'
  },
  {
    question: 'What happens if multiple members of a union are assigned values?',
    options: [
      'All values are retained',
      'Last assigned member overwrites previous ones',
      'Compilation error',
      'Undefined behavior'
    ],
    answer: 1,
    explanation: 'Only the most recently assigned member value is retained due to shared memory.'
  },
  {
    question: 'What will be the output?\n\nunion U { int x; float y; } u; u.x = 10;\nprintf("%f", u.y);',
    options: ['10.0', 'Undefined output', '0.0', 'Compilation error'],
    answer: 1,
    explanation: 'Accessing one union member after writing to another can lead to undefined results.'
  },
  {
    question: 'Can unions have nested structures?',
    options: ['Yes', 'No', 'Only with pointers', 'Only in C++'],
    answer: 0,
    explanation: 'Yes, unions can have structures as members and vice versa.'
  },
  {
    question: 'What will the following program output?\n\nunion data { int i; char ch; } d;\nd.i = 65;\nprintf("%c", d.ch);',
    options: ['A', '65', 'Error', 'Undefined'],
    answer: 0,
    explanation: 'Assigning 65 to `int i` and printing `char ch` results in ASCII character A.'
  },
  {
    question: 'How is memory shared in a union?',
    options: [
      'Each member has unique memory',
      'Memory is allocated based on the largest member',
      'Each member takes maximum memory',
      'No memory is allocated'
    ],
    answer: 1,
    explanation: 'The memory of a union is allocated as per the size of the largest member.'
  },
  {
    question: 'Which of the following is a correct union declaration?',
    options: [
      'union data { int a; float b; };',
      'structure data { int a; float b; };',
      'class data { int a; float b; };',
      'union data [ int a, float b ];'
    ],
    answer: 0,
    explanation: 'Correct union syntax uses the keyword `union` followed by the member list in curly braces.'
  }
],
'Static Variables': [
  {
    question: 'What is the scope of a static variable declared inside a function?',
    options: ['Global', 'Local to the function', 'File-level', 'Block-level'],
    answer: 1,
    explanation: 'A static variable inside a function maintains local scope but retains its value between function calls.'
  },
  {
    question: 'What is the initial value of a static variable in C if not explicitly initialized?',
    options: ['0', 'Garbage value', 'NULL', 'Depends on compiler'],
    answer: 0,
    explanation: 'Static variables are automatically initialized to 0 if not initialized explicitly.'
  },
  {
    question: 'Which of the following is true about static variables in C?',
    options: [
      'They lose their value when function exits',
      'They retain value between function calls',
      'They are only declared in main()',
      'They cannot be initialized'
    ],
    answer: 1,
    explanation: 'Static variables keep their value even after the function exits.'
  },
  {
    question: 'What is the output?\n\nvoid func() {\n  static int x = 0;\n  x++;\n  printf("%d ", x);\n}\n\nint main() {\n  func(); func(); func();\n}',
    options: ['1 1 1', '1 2 3', '0 1 2', 'Error'],
    answer: 1,
    explanation: 'Static variable retains its value, so x is incremented on each call.'
  },
  {
    question: 'Where is the memory for static variables allocated?',
    options: ['Stack', 'Heap', 'Code Segment', 'Data Segment'],
    answer: 3,
    explanation: 'Static variables are stored in the data segment of memory.'
  },
  {
    question: 'What is the lifetime of a static variable?',
    options: ['Till function execution ends', 'Till program ends', 'Only during declaration', 'Till main() ends'],
    answer: 1,
    explanation: 'A static variable exists for the lifetime of the program.'
  },
  {
    question: 'Can a static variable be declared outside all functions?',
    options: ['No', 'Yes, but only in C++', 'Yes, it becomes private to the file', 'Only in main()'],
    answer: 2,
    explanation: 'Static global variables have file scope and cannot be accessed from other files.'
  },
  {
    question: 'What is the effect of the static keyword on a global variable?',
    options: [
      'It becomes accessible globally',
      'It becomes private to the file',
      'It becomes a constant',
      'It is stored in stack memory'
    ],
    answer: 1,
    explanation: 'Static global variables have internal linkage, so they’re only accessible within the file.'
  },
  {
    question: 'What happens if you initialize a static variable multiple times inside a function?',
    options: ['It gives a warning', 'It resets the value each time', 'It is initialized only once', 'Compilation error'],
    answer: 2,
    explanation: 'A static variable is initialized only once, regardless of how many times the function is called.'
  },
  {
    question: 'Which of these statements is true?',
    options: [
      'Static variables can be declared only inside functions',
      'Static variables must be declared in global scope',
      'Static variables retain their values between calls',
      'Static variables are faster than automatic variables'
    ],
    answer: 2,
    explanation: 'The main use of static variables is to retain their values between function calls.'
  }
],
'Dynamic Memory Allocation': [
  {
    question: 'Which of the following functions is used to allocate memory dynamically in C?',
    options: ['malloc()', 'alloc()', 'new()', 'create()'],
    answer: 0,
    explanation: '`malloc()` is used to allocate memory dynamically at runtime in C.'
  },
  {
    question: 'What is the return type of malloc() function?',
    options: ['int', 'void*', 'char*', 'float*'],
    answer: 1,
    explanation: '`malloc()` returns a void pointer which can be typecast to the required type.'
  },
  {
    question: 'What will happen if dynamic memory is not freed after usage?',
    options: ['Compile-time error', 'Memory leak', 'Garbage value', 'Segmentation fault'],
    answer: 1,
    explanation: 'If dynamically allocated memory is not freed, it causes memory leaks.'
  },
  {
    question: 'Which of the following is used to release dynamically allocated memory?',
    options: ['delete()', 'dealloc()', 'free()', 'remove()'],
    answer: 2,
    explanation: '`free()` is used to release memory allocated using malloc(), calloc(), or realloc().'
  },
  {
    question: 'What will be the output?\n\nint *p = malloc(sizeof(int));\n*p = 5;\nprintf("%d", *p);',
    options: ['5', '0', 'Garbage value', 'Error'],
    answer: 0,
    explanation: 'Memory is allocated and value 5 is stored, so it prints 5.'
  },
  {
    question: 'Which function initializes the allocated memory to zero?',
    options: ['malloc()', 'calloc()', 'realloc()', 'init()'],
    answer: 1,
    explanation: '`calloc()` not only allocates memory but also initializes it to zero.'
  },
  {
    question: 'What is the difference between malloc() and calloc()?',
    options: [
      'malloc() allocates memory; calloc() doesn’t',
      'calloc() allocates and initializes memory; malloc() doesn’t initialize',
      'malloc() is faster than calloc()', 
      'calloc() returns NULL by default'
    ],
    answer: 1,
    explanation: 'calloc() allocates and initializes memory to 0, while malloc() allocates uninitialized memory.'
  },
  {
    question: 'What will be the output?\n\nint *p = NULL;\np = (int*)malloc(0);\nif(p) printf("Allocated"); else printf("Not Allocated");',
    options: ['Allocated', 'Not Allocated', 'Segmentation Fault', 'Error'],
    answer: 1,
    explanation: 'malloc(0) returns NULL or a unique pointer depending on the implementation, so usually "Not Allocated".'
  },
  {
    question: 'Which function can be used to change the size of previously allocated memory?',
    options: ['malloc()', 'calloc()', 'realloc()', 'resize()'],
    answer: 2,
    explanation: '`realloc()` is used to resize previously allocated memory blocks.'
  },
  {
    question: 'What will happen if you access memory beyond the allocated size?',
    options: [
      'Compiler detects and throws error',
      'It’s automatically resized',
      'Undefined behavior or segmentation fault',
      'Returns NULL'
    ],
    answer: 2,
    explanation: 'Accessing memory outside allocated bounds causes undefined behavior or segmentation fault.'
  }
],
'Storage classes': [
  {
    question: 'Which of the following is not a valid storage class in C?',
    options: ['auto', 'register', 'static', 'mutable'],
    answer: 3,
    explanation: '`mutable` is a C++ keyword, not valid in C.'
  },
  {
    question: 'What is the default storage class of a local variable?',
    options: ['auto', 'static', 'extern', 'register'],
    answer: 0,
    explanation: 'By default, local variables in C use the `auto` storage class.'
  },
  {
    question: 'What is the output?\n\nvoid func() {\n  static int x = 0;\n  x++;\n  printf("%d ", x);\n}\nint main() {\n  func(); func(); func();\n}',
    options: ['1 2 3', '0 1 2', '1 1 1', '3 2 1'],
    answer: 0,
    explanation: '`static` retains its value across multiple function calls.'
  },
  {
    question: 'Which storage class requests the variable to be stored in a CPU register?',
    options: ['auto', 'register', 'static', 'extern'],
    answer: 1,
    explanation: '`register` requests the variable to be stored in a CPU register for faster access.'
  },
  {
    question: 'What will happen if a variable declared as `register` is accessed using its address?',
    options: ['It works fine', 'Gives address of register', 'Compiler error', 'Segmentation fault'],
    answer: 2,
    explanation: 'You cannot take the address of a `register` variable. It causes a compiler error.'
  },
  {
    question: 'Which storage class is used to make a variable accessible across multiple files?',
    options: ['auto', 'register', 'static', 'extern'],
    answer: 3,
    explanation: '`extern` is used to declare variables accessible across multiple files.'
  },
  {
    question: 'Which storage class retains the value of a variable even after the function ends?',
    options: ['auto', 'register', 'static', 'extern'],
    answer: 2,
    explanation: '`static` keeps the variable value persistent across function calls.'
  },
  {
    question: 'Which keyword is used to define a global variable in another file?',
    options: ['static', 'auto', 'register', 'extern'],
    answer: 3,
    explanation: '`extern` is used to declare a global variable that is defined in another file.'
  },
  {
    question: 'What is the scope of a `static` variable declared inside a function?',
    options: ['Global', 'Block', 'Function', 'File'],
    answer: 2,
    explanation: 'The scope of a `static` variable declared inside a function is local to the function.'
  },
  {
    question: 'Which of the following is true about `auto` variables?',
    options: [
      'They are globally accessible',
      'They retain value between calls',
      'They are stored in registers',
      'They are automatically created and destroyed with block execution'
    ],
    answer: 3,
    explanation: '`auto` variables are local and destroyed once the block ends.'
  }
],
'Predefined Macros & Pre-processor Directives': [
  {
    question: 'Which symbol is used to begin a preprocessor directive in C?',
    options: ['#', '$', '@', '&'],
    answer: 0,
    explanation: 'Preprocessor directives in C begin with the `#` symbol.'
  },
  {
    question: 'What does the macro `__FILE__` represent?',
    options: ['Current line number', 'Current file name', 'Compiler version', 'Current date'],
    answer: 1,
    explanation: '`__FILE__` is a predefined macro that holds the current filename as a string.'
  },
  {
    question: 'What is the output?\n\n#define MAX 10\nint main() {\n  printf("%d", MAX * 2);\n}',
    options: ['20', '102', 'Compilation error', 'MAX * 2'],
    answer: 0,
    explanation: 'Macro replaces `MAX` with 10, so output is `10 * 2 = 20`.'
  },
  {
    question: 'What is the output?\n\n#define SQUARE(x) x * x\nint main() {\n  printf("%d", SQUARE(3 + 1));\n}',
    options: ['16', '12', '7', 'Compiler error'],
    answer: 1,
    explanation: 'SQUARE(3 + 1) becomes 3 + 1 * 3 + 1 = 3 + 3 + 1 = 7. Parentheses are missing in macro.'
  },
  {
    question: 'Which macro gives the current line number in the source file?',
    options: ['__LINE__', '__FILE__', '__TIME__', '__DATE__'],
    answer: 0,
    explanation: '`__LINE__` expands to the current line number.'
  },
  {
    question: 'What is the purpose of `#ifndef` and `#define` in header files?',
    options: ['To declare functions', 'To define constants', 'To prevent multiple inclusion', 'To include another file'],
    answer: 2,
    explanation: 'They are used to prevent multiple inclusion of header files.'
  },
  {
    question: 'Which directive is used to include standard library files?',
    options: ['#define', '#include', '#ifdef', '#pragma'],
    answer: 1,
    explanation: '`#include` is used to include header or library files.'
  },
  {
    question: 'What does `#undef` do in C?',
    options: ['Undefines a function', 'Removes a macro definition', 'Stops compilation', 'Ignores header file'],
    answer: 1,
    explanation: '`#undef` is used to remove a previously defined macro.'
  },
  {
    question: 'What is the output?\n\n#define A 5\n#undef A\n#define A 10\nint main() {\n  printf("%d", A);\n}',
    options: ['5', '10', 'Error', '0'],
    answer: 1,
    explanation: '`A` is first defined as 5, then undefined and redefined as 10.'
  },
  {
    question: 'Which directive can conditionally compile part of the code?',
    options: ['#ifdef', '#pragma', '#include', '#error'],
    answer: 0,
    explanation: '`#ifdef` checks if a macro is defined and compiles the code accordingly.'
  }
],
'File Modes': [
  {
    question: 'Which file mode is used to open a file for reading only?',
    options: ['"r"', '"w"', '"a"', '"r+"'],
    answer: 0,
    explanation: '"r" mode opens a file for reading. If the file doesn’t exist, fopen() returns NULL.'
  },
  {
    question: 'Which file mode creates a file for writing and overwrites if it already exists?',
    options: ['"w"', '"a"', '"r+"', '"w+"'],
    answer: 0,
    explanation: '"w" creates a new file or truncates the existing file to zero length for writing.'
  },
  {
    question: 'What does the "a" file mode do?',
    options: ['Appends to a file', 'Reads a file', 'Overwrites a file', 'Deletes a file'],
    answer: 0,
    explanation: '"a" opens a file for appending data at the end. Creates the file if it does not exist.'
  },
  {
    question: 'Which mode allows both reading and writing from the beginning of the file?',
    options: ['"r+"', '"w+"', '"a+"', '"r"'],
    answer: 0,
    explanation: '"r+" opens the file for both reading and writing from the beginning.'
  },
  {
    question: 'Which of the following modes will create a file if it does not exist and allow writing?',
    options: ['"r"', '"w"', '"r+"', '"r++"'],
    answer: 1,
    explanation: '"w" will create the file if it does not exist and allow writing.'
  },
  {
    question: 'What happens when you open a file in "w+" mode?',
    options: ['Only read is allowed', 'Only write is allowed', 'File is opened for read/write and content is deleted', 'File is opened for append'],
    answer: 2,
    explanation: '"w+" mode allows both reading and writing, but deletes existing content.'
  },
  {
    question: 'Which mode should you use to preserve existing data and allow writing at the end?',
    options: ['"a"', '"r+"', '"w+"', '"a+"'],
    answer: 3,
    explanation: '"a+" opens a file for both reading and appending at the end.'
  },
  {
    question: 'What will happen if you use fopen() in "r" mode for a file that doesn’t exist?',
    options: ['Creates new file', 'Appends data', 'Returns NULL', 'Deletes file'],
    answer: 2,
    explanation: '"r" mode requires the file to exist. fopen() returns NULL if the file is not found.'
  },
  {
    question: 'Which mode allows reading, writing, and appending to a file?',
    options: ['"w+"', '"a+"', '"r+"', '"w"'],
    answer: 1,
    explanation: '"a+" mode allows both reading and writing/appending to the file.'
  },
  {
    question: 'Choose the correct mode to read from and write to a file without truncating it:',
    options: ['"r+"', '"w+"', '"a+"', '"rw"'],
    answer: 0,
    explanation: '"r+" allows both reading and writing without truncating the file.'
  }
]
},
'C++':{
  'Basic Structure of C++':[
  {
    question: 'What is the correct syntax to start a C++ program?',
    options: ['int main()', 'void main()', '#include<iostream>', 'using namespace std;'],
    answer: 0,
    explanation: 'Every C++ program must have a main function, typically declared as int main().'
  },
  {
    question: 'Which of the following is a correct comment in C++?',
    options: ['/* comment */', '# comment', '// comment', 'Both /* comment */ and // comment'],
    answer: 3,
    explanation: 'C++ supports both block (/* */) and line (//) comments.'
  },
  {
    question: 'What is the use of #include <iostream> in C++?',
    options: ['To include input/output stream objects', 'To define a class', 'To write comments', 'To create a loop'],
    answer: 0,
    explanation: '#include <iostream> allows use of input/output functions like cout and cin.'
  },
  {
    question: 'Which line is mandatory to access standard C++ library functions without prefixing std::?',
    options: ['using namespace std;', '#include<iostream>', 'main()', 'void main()'],
    answer: 0,
    explanation: 'using namespace std; eliminates the need to prefix std:: before standard functions.'
  },
  {
    question: 'Choose the correct structure of a C++ program.',
    options: ['Header → Main → Functions', 'Main → Header → Return', 'Header → using → Main → Return', 'using → Main → Header'],
    answer: 2,
    explanation: 'A basic structure includes headers, using directive, main function, and return statement.'
  },
  {
    question: 'What does the following code output?\n#include<iostream>\nusing namespace std;\nint main() {\n  cout << "C++";\n  return 0;\n}',
    options: ['C++', 'C++\n', 'error', 'No output'],
    answer: 0,
    explanation: 'The cout prints "C++" to the output.'
  },
  {
    question: 'Which header file is essential to use "cout" and "cin"?',
    options: ['<iostream>', '<stdlib.h>', '<stdio.h>', '<conio.h>'],
    answer: 0,
    explanation: 'iostream contains declarations for input/output stream objects like cout and cin.'
  },
  {
    question: 'What does the return 0; statement signify in main()?',
    options: ['Successful program termination', 'End of input', 'Output starts', 'An error'],
    answer: 0,
    explanation: 'return 0 indicates successful program execution to the operating system.'
  },
  {
    question: 'Which of the following is NOT part of the basic structure of a C++ program?',
    options: ['#include directive', 'main() function', 'using namespace', 'scanf()'],
    answer: 3,
    explanation: 'scanf() is a C-style function and not typically used in C++.'
  },
  {
    question: 'Identify the error in this code:\n#include<iostream>\nint main() {\ncout << "Hello";\nreturn 0;\n}',
    options: ['Missing semicolon', 'cout should be in quotes', 'Missing using namespace std;', 'Invalid return'],
    answer: 2,
    explanation: 'Without using namespace std or std:: prefix, cout is undefined.'
  }
],
'Variables & Comments': [
  {
    question: 'Which is a valid variable declaration in C++?',
    options: ['int 1value;', 'float $price;', 'char name;', 'double total-amount;'],
    answer: 2,
    explanation: 'Variable names must start with a letter and cannot include symbols like $ or -.'
  },
  {
    question: 'What is the correct way to comment a single line in C++?',
    options: ['/* This is a comment', '-- This is a comment', '# This is a comment', '// This is a comment'],
    answer: 3,
    explanation: 'C++ uses // for single-line comments.'
  },
  {
    question: 'Which of the following is a multi-line comment in C++?',
    options: ['// Comment //', '/* Comment */', '<!-- Comment -->', '# Comment'],
    answer: 1,
    explanation: 'Multi-line comments in C++ are enclosed between /* and */.'
  },
  {
    question: 'What will be the value of variable "x" after this code runs?\nint x = 5;\nx = x + 2;',
    options: ['5', '2', '7', 'Error'],
    answer: 2,
    explanation: 'x is incremented by 2, resulting in 7.'
  },
  {
    question: 'What is wrong with the following declaration?\nint float = 10;',
    options: ['Nothing', 'int cannot be used like this', 'float is a keyword', 'Missing semicolon'],
    answer: 2,
    explanation: 'float is a reserved keyword and cannot be used as a variable name.'
  },
  {
    question: 'Which of the following is NOT a valid variable name in C++?',
    options: ['_temp', 'intValue', 'data@home', 'my_var'],
    answer: 2,
    explanation: 'Variable names cannot contain special characters like @.'
  },
  {
    question: 'What is the default value of an uninitialized local variable in C++?',
    options: ['0', 'Garbage value', 'null', 'False'],
    answer: 1,
    explanation: 'Local variables in C++ are not automatically initialized; they hold garbage values.'
  },
  {
    question: 'Which of the following best describes a variable in C++?',
    options: ['A constant value', 'A memory location to store data', 'A type of function', 'A reserved keyword'],
    answer: 1,
    explanation: 'Variables are named memory locations to store data values.'
  },
  {
    question: 'What will this code print?\nint a = 10;\nint b = a;\ncout << b;',
    options: ['a', '10', 'b', 'Error'],
    answer: 1,
    explanation: 'b is assigned the value of a, which is 10.'
  },
  {
    question: 'Which of the following statements is true about comments in C++?',
    options: ['They increase the program’s execution time', 'They are executed during runtime', 'They are ignored by the compiler', 'They must end with a period'],
    answer: 2,
    explanation: 'Comments are ignored by the compiler and are used for code documentation.'
  }
],
'Conditional Statements & Loops': [
  {
    question: 'Which of the following is the correct syntax for an if statement in C++?',
    options: ['if x > 0:', 'if (x > 0) then', 'if (x > 0)', 'if x > 0 then'],
    answer: 2,
    explanation: 'The correct syntax is: if (condition)'
  },
  {
    question: 'What is the output of the following code?\nint x = 5;\nif (x == 5) cout << "Yes"; else cout << "No";',
    options: ['Yes', 'No', 'Error', 'Nothing'],
    answer: 0,
    explanation: 'Since x is equal to 5, "Yes" will be printed.'
  },
  {
    question: 'Which loop is guaranteed to run at least once?',
    options: ['for loop', 'while loop', 'do-while loop', 'infinite loop'],
    answer: 2,
    explanation: 'do-while loop checks the condition after executing the loop body at least once.'
  },
  {
    question: 'How many times will this loop run?\nfor (int i = 0; i < 3; i++) cout << i;',
    options: ['1', '2', '3', '4'],
    answer: 2,
    explanation: 'The loop runs for i = 0, 1, 2 — total 3 times.'
  },
  {
    question: 'What is the output of:\nint i = 0;\nwhile (i < 3) { cout << i; i++; }',
    options: ['012', '123', '321', 'infinite loop'],
    answer: 0,
    explanation: 'The loop prints 0, 1, and 2 before i becomes 3 and exits.'
  },
  {
    question: 'What will this code print?\nint x = 10;\nif (x > 5) {\n  if (x < 20)\n    cout << "A";\n  else\n    cout << "B";\n} else cout << "C";',
    options: ['A', 'B', 'C', 'AB'],
    answer: 0,
    explanation: 'x is 10, which is >5 and <20, so "A" is printed.'
  },
  {
    question: 'Which of the following is NOT a valid loop in C++?',
    options: ['for', 'foreach', 'while', 'do-while'],
    answer: 1,
    explanation: 'C++ does not have a foreach loop by default (like in some other languages).'
  },
  {
    question: 'What is the output?\nint x = 1;\ndo {\n  cout << x;\n  x++;\n} while(x < 4);',
    options: ['123', '0123', '234', 'Error'],
    answer: 0,
    explanation: 'The loop prints 1, 2, and 3 before exiting.'
  },
  {
    question: 'Which statement can be used to skip an iteration of a loop?',
    options: ['break', 'return', 'exit', 'continue'],
    answer: 3,
    explanation: 'continue skips the rest of the current iteration and continues with the next.'
  },
  {
    question: 'Which loop structure is best when the number of iterations is known?',
    options: ['while', 'do-while', 'for', 'goto'],
    answer: 2,
    explanation: 'for loops are preferred when the number of iterations is known.'
  }
],
'Patterns': [
  {
    question: 'Which loop is most commonly used to generate patterns in C++?',
    options: ['while loop', 'do-while loop', 'for loop', 'goto'],
    answer: 2,
    explanation: 'for loop is typically used for patterns due to its concise control over iterations.'
  },
  {
    question: 'What is the output of this code?\nfor(int i=1; i<=3; i++) {\n  for(int j=1; j<=i; j++) {\n    cout << "*";\n  }\n  cout << endl;\n}',
    options: ['***', '*\n*\n*', '*\n**\n***', 'Error'],
    answer: 2,
    explanation: 'This prints a right-angled triangle pattern with stars.'
  },
  {
    question: 'How many times will "*" be printed in the following code?\nfor(int i=0; i<4; i++) {\n  for(int j=0; j<3; j++) {\n    cout << "*";\n  }\n}',
    options: ['3', '4', '7', '12'],
    answer: 3,
    explanation: 'Outer loop runs 4 times, inner loop 3 times => 4*3 = 12 stars.'
  },
  {
    question: 'Which nested loop pattern produces a pyramid shape?',
    options: ['Increasing rows with decreasing columns', 'Equal row-column iterations', 'Rows with spacing and stars', 'None'],
    answer: 2,
    explanation: 'A pyramid requires spaces before stars in each row.'
  },
  {
    question: 'What does this code produce?\nint i, j, n = 3;\nfor(i = 1; i <= n; i++) {\n  for(j = 1; j <= n-i; j++) cout << " ";\n  for(j = 1; j <= i; j++) cout << "*";\n  cout << endl;\n}',
    options: ['Straight line', 'Inverted triangle', 'Right-angled triangle', 'Right-aligned triangle'],
    answer: 3,
    explanation: 'This creates a right-aligned triangle with stars.'
  },
  {
    question: 'What pattern is formed by this code?\nfor(int i=1; i<=3; i++) {\n  for(int j=1; j<=3; j++) {\n    cout << i << " ";\n  }\n  cout << endl;\n}',
    options: ['1 2 3\n1 2 3\n1 2 3', '1 1 1\n2 2 2\n3 3 3', 'Error', '1 1 1'],
    answer: 1,
    explanation: 'Each row prints the row number repeatedly.'
  },
  {
    question: 'Choose the correct nested loop structure for a hollow square of size n.',
    options: ['Two nested loops with if-else conditions for edges', 'Single loop with counter', 'Nested loop with only one cout', 'Three nested loops'],
    answer: 0,
    explanation: 'You must check and print “*” only at edges using if conditions.'
  },
  {
    question: 'Tricky: What is the output for:\nint n = 2;\nfor(int i=0;i<n;++i){\n for(int j=0;j<n;++j){\n   cout<<i+j<<" ";\n }\n cout<<endl;\n}',
    options: ['0 1\n0 1', '0 1\n1 2', '0 1\n2 3', '1 2\n2 3'],
    answer: 1,
    explanation: 'When i=0: 0+0=0, 0+1=1; i=1: 1+0=1, 1+1=2.'
  },
  {
    question: 'What is the main difference between pattern printing and normal output logic?',
    options: ['Patterns use switch statements', 'Patterns rely heavily on nested loops and indexing', 'Only while loops are allowed', 'They use recursion only'],
    answer: 1,
    explanation: 'Pattern printing is usually achieved with nested loops and control of row/column behavior.'
  },
  {
    question: 'Which condition prints a lower triangle in a square matrix?',
    options: ['if (i < j)', 'if (i >= j)', 'if (i == j)', 'if (j > i)'],
    answer: 1,
    explanation: 'i >= j prints elements on and below the main diagonal.'
  }
],
'Datatypes': [
  {
    question: 'Which of the following is a valid integer datatype in C++?',
    options: ['float', 'char', 'bool', 'int'],
    answer: 3,
    explanation: 'int is used for integer values in C++.'
  },
  {
    question: 'What is the size of a `double` datatype in most modern compilers?',
    options: ['2 bytes', '4 bytes', '8 bytes', '16 bytes'],
    answer: 2,
    explanation: 'Typically, double occupies 8 bytes in C++.'
  },
  {
    question: 'Which of the following datatypes is used to store a single character?',
    options: ['char', 'string', 'int', 'float'],
    answer: 0,
    explanation: 'char stores a single ASCII character.'
  },
  {
    question: 'Tricky: What is the output of this code?\n\nint x = 5.6;\ncout << x;',
    options: ['5.6', '6', '5', 'Error'],
    answer: 2,
    explanation: 'The float 5.6 is typecasted to int, so decimal part is truncated. Output: 5.'
  },
  {
    question: 'Which datatype is used for storing true/false values in C++?',
    options: ['int', 'bool', 'char', 'float'],
    answer: 1,
    explanation: 'bool is the correct datatype for Boolean logic.'
  },
  {
    question: 'What will be the output of this program?\n\nbool x = -10;\ncout << x;',
    options: ['0', '1', '-10', 'Error'],
    answer: 1,
    explanation: 'Any non-zero value in a bool context is considered true (1).'
  },
  {
    question: 'Which one is not a fundamental data type in C++?',
    options: ['int', 'float', 'array', 'char'],
    answer: 2,
    explanation: 'array is a derived data type, not fundamental.'
  },
  {
    question: 'What is the default value of a local `int` variable in C++?',
    options: ['0', 'Garbage', 'NULL', 'Depends on OS'],
    answer: 1,
    explanation: 'Local variables are not initialized by default in C++, so they hold garbage values.'
  },
  {
    question: 'Which of the following can be used to define a floating-point variable?',
    options: ['float', 'double', 'long double', 'All of the above'],
    answer: 3,
    explanation: 'All three types are valid floating-point types in C++.'
  },
  {
    question: 'Which of the following best defines a literal constant in C++?',
    options: ['A variable with changing value', 'A fixed value written directly in code', 'A pointer', 'A user-defined type'],
    answer: 1,
    explanation: 'A literal constant is a value written directly in code, like 5, 3.14, or \'A\'.'
  }
],
'Header files & Operators': [
  {
    question: 'Which header file is used to perform input and output operations in C++?',
    options: ['stdio.h', 'iostream', 'conio.h', 'stdlib.h'],
    answer: 1,
    explanation: '<iostream> provides cin and cout for input/output in C++.'
  },
  {
    question: 'Which operator is used to access members of a structure or class through a pointer?',
    options: ['.', '->', '&', '*'],
    answer: 1,
    explanation: 'The arrow operator (->) is used to access members through a pointer.'
  },
  {
    question: 'What will be the output of this code?\n\nint a = 5, b = 2;\ncout << a / b;',
    options: ['2.5', '2', '2.0', 'Compilation Error'],
    answer: 1,
    explanation: 'Since both a and b are integers, result is 2 (integer division).'
  },
  {
    question: 'Which of the following is not a logical operator in C++?',
    options: ['&&', '||', '!', '&'],
    answer: 3,
    explanation: '& is a bitwise operator, not a logical operator.'
  },
  {
    question: 'Which header file includes the string class in C++?',
    options: ['<string.h>', '<cstring>', '<string>', '<str>'],
    answer: 2,
    explanation: '<string> is the correct C++ header file for the string class.'
  },
  {
    question: 'Tricky: What does this code output?\n\nint x = 4;\ncout << (x++ * 2);',
    options: ['8', '10', '4', 'Error'],
    answer: 0,
    explanation: 'x++ returns 4, then x becomes 5. So, 4 * 2 = 8 is printed.'
  },
  {
    question: 'Which operator cannot be overloaded in C++?',
    options: ['+', '[]', '::', '<<'],
    answer: 2,
    explanation: 'Scope resolution operator (::) cannot be overloaded.'
  },
  {
    question: 'What is the use of the sizeof operator?',
    options: ['To allocate memory', 'To find address', 'To find size of a data type', 'To declare variables'],
    answer: 2,
    explanation: 'sizeof is used to find the number of bytes a data type or variable occupies.'
  },
  {
    question: 'Which of the following is the correct way to include a user-defined header file?',
    options: ['#include <myfile.h>', '#include "myfile.h"', '#include [myfile.h]', '#import "myfile.h"'],
    answer: 1,
    explanation: 'User-defined headers are included using double quotes.'
  },
  {
    question: 'What will be the result of the expression: 5 & 3?',
    options: ['1', '3', '5', '0'],
    answer: 0,
    explanation: 'Bitwise AND of 0101 & 0011 = 0001 = 1.'
  }
],
'Reference Variables & Typecasting': [
  {
    question: 'Which of the following declares a reference variable in C++?',
    options: ['int &a = b;', 'int *a = &b;', 'ref int a = b;', 'int a = &b;'],
    answer: 0,
    explanation: 'int &a = b; declares a reference to variable b.'
  },
  {
    question: 'What is the output of the following code?\n\nint x = 10;\nint &ref = x;\nref = 20;\ncout << x;',
    options: ['10', '20', '0', 'Compilation Error'],
    answer: 1,
    explanation: 'ref is a reference to x, so changing ref also changes x to 20.'
  },
  {
    question: 'Which of the following statements is true about references in C++?',
    options: ['References can be reassigned to another variable', 'References must be initialized when declared', 'References can be NULL', 'A reference is the same as a pointer'],
    answer: 1,
    explanation: 'References must be initialized at the time of declaration and cannot be NULL.'
  },
  {
    question: 'Which of the following is an example of implicit typecasting?',
    options: ['int a = 10.5;', 'float a = (float)10;', 'char ch = static_cast<char>(100);', 'double d = (double)5'],
    answer: 0,
    explanation: 'Assigning 10.5 to an int performs implicit typecasting by truncating the decimal.'
  },
  {
    question: 'What is the result of this expression?\nint a = 5;\ndouble b = a / 2;',
    options: ['2.5', '2.0', '2', 'Error'],
    answer: 2,
    explanation: 'a and 2 are integers, so integer division occurs. Result is 2, stored in b.'
  },
  {
    question: 'What does the following code output?\nfloat a = 5.5;\nint b = (int)a;\ncout << b;',
    options: ['5', '6', '5.5', 'Compilation Error'],
    answer: 0,
    explanation: '(int)a converts 5.5 to 5 by truncating the decimal.'
  },
  {
    question: 'Which of these casts is recommended in modern C++ for converting int to float?',
    options: ['(float)a', 'float(a)', 'static_cast<float>(a)', 'convert<float>(a)'],
    answer: 2,
    explanation: 'static_cast is preferred in modern C++ for explicit type conversion.'
  },
  {
    question: 'Which of the following is NOT a valid type of casting in C++?',
    options: ['static_cast', 'dynamic_cast', 'retype_cast', 'reinterpret_cast'],
    answer: 2,
    explanation: 'retype_cast is not a valid type casting operator in C++.'
  },
  {
    question: 'What is the output?\n\nint a = 10;\nint *p = &a;\nint &ref = *p;\nref = 30;\ncout << a;',
    options: ['10', '30', 'Garbage', 'Error'],
    answer: 1,
    explanation: 'ref is a reference to the value pointed by p, which is a. So, a becomes 30.'
  },
  {
    question: 'Which of the following uses C-style typecasting?',
    options: ['int a = static_cast<int>(5.5);', 'int a = (int)5.5;', 'int a = convert<int>(5.5);', 'int a = reinterpret_cast<int>(5.5);'],
    answer: 1,
    explanation: '(int)5.5 is the syntax for C-style casting.'
  }
],
'Constants,Manipulators & Operator Precedence': [
  {
    question: 'Which keyword is used to declare a constant variable in C++?',
    options: ['const', 'define', 'static', 'final'],
    answer: 0,
    explanation: '`const` is used to declare constant variables whose values cannot be changed after initialization.'
  },
  {
    question: 'What is the output of the following code?\nconst int x = 10;\nx = 20;\ncout << x;',
    options: ['10', '20', 'Compilation Error', 'Runtime Error'],
    answer: 2,
    explanation: 'You cannot modify a constant variable; this causes a compilation error.'
  },
  {
    question: 'Which header file is required to use manipulators like `setw` and `setprecision`?',
    options: ['<manipulator>', '<iomanip>', '<iostream>', '<stdio.h>'],
    answer: 1,
    explanation: 'The `<iomanip>` header provides support for input/output manipulators.'
  },
  {
    question: 'What will be the output?\ncout << setw(5) << 42;',
    options: ['42', '  42', '   42', '    42'],
    answer: 3,
    explanation: '`setw(5)` sets the field width to 5 characters, right-aligning the value.'
  },
  {
    question: 'Which manipulator is used to control the number of digits printed after the decimal point?',
    options: ['setw', 'fixed', 'setprecision', 'setfill'],
    answer: 2,
    explanation: '`setprecision` sets the number of digits displayed after the decimal in floating-point numbers.'
  },
  {
    question: 'What is the output of this expression?\nint result = 10 + 2 * 3;',
    options: ['36', '30', '16', '12'],
    answer: 2,
    explanation: 'Multiplication (*) has higher precedence than addition (+), so 2*3 = 6, then 10+6 = 16.'
  },
  {
    question: 'Which of the following has the highest operator precedence in C++?',
    options: ['++ (increment)', '* (multiplication)', '== (equal to)', '= (assignment)'],
    answer: 0,
    explanation: 'The increment (++) operator has higher precedence than multiplication, equality, and assignment.'
  },
  {
    question: 'Which manipulator is used to fill blank spaces with a specific character?',
    options: ['setw', 'setprecision', 'setfill', 'setblank'],
    answer: 2,
    explanation: '`setfill` is used to fill the blank spaces created by setw with a specified character.'
  },
  {
    question: 'What is the output?\ncout << setfill(\'*\') << setw(5) << 42;',
    options: ['42***', '***42', '*** 42', '42   '],
    answer: 1,
    explanation: '`setfill('*')` fills the extra spaces created by `setw(5)` with asterisks before the number.'
  },
  {
    question: 'Which operator has right-to-left associativity?',
    options: ['=', '+', '*', '=='],
    answer: 0,
    explanation: 'The assignment (=) operator is right-associative, meaning evaluation starts from the right.'
  }
],
'Pointers': [
  {
    question: 'What does a pointer store in C++?',
    options: ['Value of a variable', 'Address of a variable', 'Size of a variable', 'Type of a variable'],
    answer: 1,
    explanation: 'A pointer stores the address of another variable.'
  },
  {
    question: 'What is the output?\nint a = 5;\nint *p = &a;\ncout << *p;',
    options: ['a', '5', '&a', 'Compilation Error'],
    answer: 1,
    explanation: 'The * operator dereferences the pointer, giving the value stored at the address.'
  },
  {
    question: 'Which of the following correctly declares a pointer?',
    options: ['int ptr;', 'int *ptr;', 'int ptr*;', 'ptr int*;'],
    answer: 1,
    explanation: 'int *ptr declares a pointer to an integer.'
  },
  {
    question: 'What will happen if a pointer is not initialized?',
    options: ['It will store 0', 'It will store null', 'It will contain garbage', 'It will cause an error'],
    answer: 2,
    explanation: 'Uninitialized pointers contain garbage values and may lead to undefined behavior.'
  },
  {
    question: 'What is a dangling pointer?',
    options: ['A pointer that never points', 'A pointer that points to freed memory', 'A null pointer', 'None of these'],
    answer: 1,
    explanation: 'A dangling pointer points to memory that has already been freed or deallocated.'
  },
  {
    question: 'Which operator is used to access the address of a variable?',
    options: ['*', '&', '^', '%'],
    answer: 1,
    explanation: 'The & operator is used to get the address of a variable.'
  },
  {
    question: 'Can you perform pointer arithmetic on void pointers?',
    options: ['Yes', 'No', 'Only in C++', 'Only in C'],
    answer: 1,
    explanation: 'Void pointers cannot be directly used in pointer arithmetic because they have no defined size.'
  },
  {
    question: 'What is the output?\nint x = 10;\nint *p = &x;\n(*p)++; cout << x;',
    options: ['10', '11', 'Compilation error', 'Undefined'],
    answer: 1,
    explanation: '(*p)++ increases the value at address p, so x becomes 11.'
  },
  {
    question: 'Which keyword is used to allocate memory dynamically?',
    options: ['malloc', 'alloc', 'new', 'calloc'],
    answer: 2,
    explanation: 'The `new` operator is used in C++ for dynamic memory allocation.'
  },
  {
    question: 'Which function deallocates memory allocated with new?',
    options: ['delete()', 'free()', 'dispose()', 'delete'],
    answer: 3,
    explanation: 'The `delete` operator is used to free memory allocated with `new` in C++.'
  }
],
'Arrays': [
  {
    question: 'Which of the following correctly declares an array of 10 integers?',
    options: ['int arr[10];', 'int arr();', 'int arr{10};', 'int arr;'],
    answer: 0,
    explanation: 'int arr[10]; declares an array of 10 integers.'
  },
  {
    question: 'What is the index of the first element in a C++ array?',
    options: ['0', '1', '-1', 'Depends on array type'],
    answer: 0,
    explanation: 'Array indexing starts at 0 in C++.'
  },
  {
    question: 'What is the output?\nint arr[] = {1, 2, 3};\ncout << arr[1];',
    options: ['1', '2', '3', 'Compilation error'],
    answer: 1,
    explanation: 'arr[1] accesses the second element of the array, which is 2.'
  },
  {
    question: 'What happens if you access an array index out of bounds?',
    options: ['Returns 0', 'Returns NULL', 'Compilation error', 'Undefined behavior'],
    answer: 3,
    explanation: 'Accessing out-of-bounds index leads to undefined behavior in C++.'
  },
  {
    question: 'Which of the following is true about arrays in C++?',
    options: ['Arrays can grow at runtime', 'Arrays store elements in contiguous memory', 'Arrays cannot store integers', 'Array size can be changed later'],
    answer: 1,
    explanation: 'Arrays are stored in contiguous memory locations.'
  },
  {
    question: 'What is the size of this array?\nint arr[] = {1,2,3,4};',
    options: ['3', '4', '5', 'Depends on compiler'],
    answer: 1,
    explanation: 'The array has 4 elements: 1, 2, 3, and 4.'
  },
  {
    question: 'Which loop is preferred to traverse arrays in C++?',
    options: ['while', 'for', 'do-while', 'goto'],
    answer: 1,
    explanation: '`for` loops are generally preferred for array traversal because of the fixed size.'
  },
  {
    question: 'What is the output?\nint arr[5] = {};\ncout << arr[2];',
    options: ['Garbage', '0', '2', 'Compilation error'],
    answer: 1,
    explanation: 'Uninitialized elements in an array initialized with `{}` are set to 0.'
  },
  {
    question: 'Which of these can be used to pass arrays to functions?',
    options: ['By value', 'By reference', 'As pointer', 'All of the above'],
    answer: 2,
    explanation: 'Arrays are passed to functions using pointers (decay to pointer).'
  },
  {
    question: 'Which is a valid way to declare a 2D array in C++?',
    options: ['int arr[2,2];', 'int arr[2][2];', 'int arr(2)(2);', 'int arr{2,2};'],
    answer: 1,
    explanation: 'int arr[2][2]; is the correct syntax for a 2D array.'
  }
],
'Enums': [
  {
    question: 'What is an enum in C++?',
    options: ['A data type for strings', 'A user-defined type with named constants', 'An array of integers', 'A class of constants'],
    answer: 1,
    explanation: 'An enum is a user-defined type that assigns names to a set of integral constants.'
  },
  {
    question: 'Which is the correct way to define an enum?',
    options: ['enum Color {RED, GREEN, BLUE};', 'enum = {RED, GREEN, BLUE};', 'Color enum {RED, GREEN};', 'enum Color = {RED, GREEN};'],
    answer: 0,
    explanation: 'This is the correct syntax for defining an enum.'
  },
  {
    question: 'What is the default value of the first enumerator in an enum?',
    options: ['0', '1', '-1', 'Depends on compiler'],
    answer: 0,
    explanation: 'By default, enumeration starts at 0 unless specified.'
  },
  {
    question: 'Can enum values be explicitly assigned in C++?',
    options: ['Yes', 'No', 'Only for the first value', 'Only for the last value'],
    answer: 0,
    explanation: 'You can explicitly assign any or all enum values.'
  },
  {
    question: 'What is the output?\nenum Days {Mon=1, Tue, Wed};\ncout << Wed;',
    options: ['1', '2', '3', 'Compilation Error'],
    answer: 2,
    explanation: 'Tue is 2, Wed is 3 because enum values auto-increment.'
  },
  {
    question: 'Which of the following is NOT true about enums in C++?',
    options: ['Enums can be declared globally', 'Enums can hold float values', 'Enum values are integers', 'Enums improve code readability'],
    answer: 1,
    explanation: 'Enum values must be integral; they cannot be floats.'
  },
  {
    question: 'Which is a strongly typed enum introduced in C++11?',
    options: ['enum class', 'strict enum', 'enum struct', 'enum++'],
    answer: 0,
    explanation: '`enum class` is a strongly typed and scoped enumeration introduced in C++11.'
  },
  {
    question: 'What is the default underlying type of enum in C++?',
    options: ['float', 'char', 'int', 'double'],
    answer: 2,
    explanation: 'The default underlying type of enum is int.'
  },
  {
    question: 'Can two enum constants have the same value in C++?',
    options: ['Yes', 'No', 'Only with typedefs', 'Only in enum class'],
    answer: 0,
    explanation: 'You can assign same value to multiple enum constants.'
  },
  {
    question: 'What happens if an enum variable is printed directly using cout?',
    options: ['Error', 'Value is printed', 'Name is printed', 'Address is printed'],
    answer: 1,
    explanation: 'The underlying integer value of the enum constant is printed.'
  }
],
'Inline Functions, Default Arguments and Constant Arguments': [
  {
    question: 'What is an inline function in C++?',
    options: [
      'A function with a small body',
      'A function whose code is substituted at the point of call',
      'A function defined in header file only',
      'A function that must return int'
    ],
    answer: 1,
    explanation: 'Inline functions allow the compiler to insert the function’s body where the function is called to reduce overhead.'
  },
  {
    question: 'Which keyword is used to define an inline function?',
    options: ['inline', 'function', 'define', 'static'],
    answer: 0,
    explanation: '`inline` is the keyword used before the function definition to suggest inlining to the compiler.'
  },
  {
    question: 'When does the compiler avoid inlining a function?',
    options: [
      'When the function is very short',
      'When the function contains loops or recursion',
      'When the function is defined inside a class',
      'When the function returns a float'
    ],
    answer: 1,
    explanation: 'Inlining is avoided if the function has recursion, loops, or is too complex.'
  },
  {
    question: 'What are default arguments in C++?',
    options: [
      'Arguments passed automatically from OS',
      'Arguments with predefined values used if not passed',
      'Arguments that must be passed as 0',
      'Arguments used in constructors only'
    ],
    answer: 1,
    explanation: 'Default arguments provide fallback values when parameters are not passed.'
  },
  {
    question: 'Which is valid function declaration using default arguments?',
    options: [
      'void display(int a = 5, int b);',
      'void display(int a = 5, int b = 10);',
      'void display(int a, int b = 10, int c);',
      'void display(int a == 5, int b == 10);'
    ],
    answer: 1,
    explanation: 'Default values must be assigned from right to left in the parameter list.'
  },
  {
    question: 'How many times can you provide default values for a function parameter?',
    options: ['Only once', 'Twice', 'As many times as used', 'Unlimited'],
    answer: 0,
    explanation: 'You can provide default values only once, either in the declaration or in the definition.'
  },
  {
    question: 'What is a constant argument in C++?',
    options: [
      'An argument that is passed by constant pointer',
      'An argument whose value cannot be modified in the function',
      'An argument that is always an integer',
      'An argument that must be passed in uppercase'
    ],
    answer: 1,
    explanation: 'Using `const` in parameters ensures the argument value is not modified inside the function.'
  },
  {
    question: 'What is the output?\nvoid show(const int x) {\n  x++;\n  cout << x;\n}',
    options: ['Increments x and prints', '0', 'Error', '1'],
    answer: 2,
    explanation: 'You cannot modify a const argument, so `x++` results in a compilation error.'
  },
  {
    question: 'Which is a valid use of all three: inline, default, and const?',
    options: [
      'inline void func(const int x = 10);',
      'inline void func(int const x = 10);',
      'const void func(inline int x = 10);',
      'void inline const func(int x = 10);'
    ],
    answer: 1,
    explanation: '`inline void func(int const x = 10);` is a valid syntax combining all three.'
  },
  {
    question: 'Which of the following is **false** about inline, default, and const arguments?',
    options: [
      'Default arguments reduce the number of overloaded functions',
      'Inline functions always increase performance',
      'Const arguments enhance code safety',
      'Inline functions are suggestions to the compiler'
    ],
    answer: 1,
    explanation: 'Inlining does not always guarantee better performance; sometimes it increases code size.'
  }
],
'Recursion & Recursive Functions': [
  {
    question: 'What is recursion in C++?',
    options: [
      'A loop that calls itself',
      'A function that calls another function',
      'A function that calls itself',
      'A class calling another class'
    ],
    answer: 2,
    explanation: 'Recursion is a technique where a function calls itself to solve smaller instances of a problem.'
  },
  {
    question: 'Which of the following is essential in every recursive function?',
    options: ['Loop', 'Base condition', 'Global variable', 'Static variable'],
    answer: 1,
    explanation: 'A base condition is necessary to prevent infinite recursion and terminate the function.'
  },
  {
    question: 'What will be the output?\nint fun(int n) {\n  if (n == 0) return 0;\n  return n + fun(n-1);\n}\ncout << fun(4);',
    options: ['0', '4', '10', 'Compile error'],
    answer: 2,
    explanation: 'The recursive sum is 4 + 3 + 2 + 1 + 0 = 10.'
  },
  {
    question: 'What happens if there is no base condition in a recursive function?',
    options: ['Compile error', 'Nothing happens', 'Infinite recursion (stack overflow)', 'Program exits successfully'],
    answer: 2,
    explanation: 'Without a base case, recursion continues indefinitely, eventually causing a stack overflow.'
  },
  {
    question: 'Which problem is best solved using recursion?',
    options: ['Sorting large files', 'Calculating factorial', 'Finding maximum in array', 'Switch case operations'],
    answer: 1,
    explanation: 'Problems like factorial, Fibonacci, and tree traversals are naturally recursive.'
  },
  {
    question: 'What is the output?\nint fact(int n) {\n  if(n<=1) return 1;\n  return n * fact(n-1);\n}\ncout << fact(5);',
    options: ['120', '60', '24', 'None'],
    answer: 0,
    explanation: 'fact(5) = 5*4*3*2*1 = 120.'
  },
  {
    question: 'What kind of recursion is used when the recursive call is the last statement in the function?',
    options: ['Backtracking', 'Head recursion', 'Tail recursion', 'Direct recursion'],
    answer: 2,
    explanation: 'Tail recursion occurs when the recursive call is the final operation in the function.'
  },
  {
    question: 'Which is NOT an advantage of recursion?',
    options: ['Simpler code for complex problems', 'Reduces need for loop structures', 'Faster execution always', 'Easier to read for some algorithms'],
    answer: 2,
    explanation: 'Recursive functions are sometimes slower due to overhead and stack usage.'
  },
  {
    question: 'What will be the output?\nvoid print(int n) {\n if (n == 0) return;\n cout << n << " ";\n print(n - 1);\n}\nprint(3);',
    options: ['3 2 1', '1 2 3', '0 1 2 3', '3 2 1 0'],
    answer: 0,
    explanation: 'It prints in decreasing order: 3 2 1.'
  },
  {
    question: 'Which of the following is true about recursion?',
    options: [
      'Every recursive function can be written iteratively',
      'Recursive functions can’t return values',
      'Recursive functions need static variables',
      'Recursion is only used in sorting'
    ],
    answer: 0,
    explanation: 'Any recursive logic can be transformed into an iterative version using loops and a stack.'
  }
],
'Function Overloading': [
  {
    question: 'What is function overloading in C++?',
    options: [
      'Using multiple classes with the same name',
      'Using same name functions with different return types',
      'Using same name functions with different parameters',
      'Using same function in multiple files'
    ],
    answer: 2,
    explanation: 'Function overloading allows multiple functions with the same name but different parameter lists.'
  },
  {
    question: 'Which of the following is allowed in function overloading?',
    options: [
      'Changing only the return type',
      'Changing the number of parameters',
      'Changing parameter names',
      'Same parameter list with different function names'
    ],
    answer: 1,
    explanation: 'Function overloading is based on different parameter types or number of parameters.'
  },
  {
    question: 'What is the output of this code?\nvoid display(int x) { cout << "int"; }\nvoid display(double y) { cout << "double"; }\ndisplay(10.5);',
    options: ['int', 'double', 'Error', 'None'],
    answer: 1,
    explanation: '10.5 is a double, so the second overloaded function is called.'
  },
  {
    question: 'Which concept is most related to function overloading?',
    options: ['Inheritance', 'Polymorphism', 'Encapsulation', 'Abstraction'],
    answer: 1,
    explanation: 'Function overloading is a type of compile-time (static) polymorphism.'
  },
  {
    question: 'What happens if two overloaded functions differ only by return type?',
    options: ['It compiles and runs', 'It results in ambiguity', 'It throws an exception', 'It calls both functions'],
    answer: 1,
    explanation: 'Return type alone cannot distinguish overloaded functions; it leads to ambiguity.'
  },
  {
    question: 'What is the output?\nint add(int a, int b) { return a + b; }\ndouble add(double a, double b) { return a + b; }\ncout << add(5, 2.5);',
    options: ['7.5', '7', 'Compile error', 'Ambiguity error'],
    answer: 0,
    explanation: 'add(double, double) is called due to type promotion of 5 to 5.0.'
  },
  {
    question: 'Can default arguments be used with overloaded functions?',
    options: ['Yes, but with care to avoid ambiguity', 'No, it’s not allowed', 'Only in constructors', 'Only in templates'],
    answer: 0,
    explanation: 'Yes, but if default parameters cause two signatures to look the same, it causes ambiguity.'
  },
  {
    question: 'Is this overloading valid?\nvoid func(int);\nint func(int);',
    options: ['Yes', 'No', 'Depends on compiler', 'Only in templates'],
    answer: 1,
    explanation: 'This is not valid overloading because the signature differs only by return type.'
  },
  {
    question: 'Which of the following statements is TRUE about function overloading?',
    options: [
      'Overloaded functions must differ in return type',
      'Overloaded functions must differ in name',
      'Overloaded functions must differ in number or type of parameters',
      'Overloading requires inheritance'
    ],
    answer: 2,
    explanation: 'Functions must differ by number or type of parameters to be overloaded.'
  },
  {
    question: 'What will be the output?\nvoid test(int a) { cout << "int"; }\nvoid test(char a) { cout << "char"; }\ntest(65);',
    options: ['int', 'char', 'intchar', 'Ambiguous'],
    answer: 0,
    explanation: 'Even though 65 could be char, it is an int literal, so test(int) is called.'
  }
],
'Nesting Member Functions': [
  {
    question: 'What does nesting of member functions mean in C++?',
    options: [
      'Calling one class function from another in a different class',
      'Calling one class function from another within the same class',
      'Using nested classes only',
      'Using functions as arguments'
    ],
    answer: 1,
    explanation: 'Nesting of member functions means calling one member function from another within the same class.'
  },
  {
    question: 'Which of the following is true about nesting member functions?',
    options: [
      'It is not allowed in C++',
      'A static member function cannot be nested',
      'Only private functions can be nested',
      'A member function can call another member function of the same class'
    ],
    answer: 3,
    explanation: 'Any member function can call another member function of the same class directly.'
  },
  {
    question: 'What is the output of the following?\nclass A {\n  int square(int x) { return x*x; }\n  public:\n  void display() { cout << square(5); }\n};\nA obj; obj.display();',
    options: ['25', '5', 'Error', '0'],
    answer: 0,
    explanation: 'The public function display() calls the private function square() inside the same class.'
  },
  {
    question: 'Can private member functions be called by other member functions in the same class?',
    options: ['Yes', 'No', 'Only if friend function is used', 'Only in derived classes'],
    answer: 0,
    explanation: 'Private member functions can be accessed by other functions inside the same class.'
  },
  {
    question: 'Which scenario best demonstrates nesting of member functions?',
    options: [
      'One class inheriting another',
      'Constructor calling another class function',
      'Member function invoking another function in the same class',
      'Friend function accessing a class'
    ],
    answer: 2,
    explanation: 'A member function calling another function inside the same class is considered nesting.'
  },
  {
    question: 'What is the output?\nclass Test {\n  int multiply(int x, int y) { return x * y; }\n  public:\n  void compute() {\n    cout << multiply(3, 4);\n  }\n};\nTest t; t.compute();',
    options: ['7', '12', 'Error', '0'],
    answer: 1,
    explanation: 'Function compute() calls multiply() from inside the same class, output is 12.'
  },
  {
    question: 'Why is nesting member functions useful?',
    options: [
      'It restricts access to global functions',
      'It allows logical grouping and reuse of logic',
      'It reduces object creation',
      'It supports overloading'
    ],
    answer: 1,
    explanation: 'Nesting helps in logically structuring reusable logic within class functions.'
  },
  {
    question: 'Can a member function call itself and also another member function in the same class?',
    options: ['No', 'Only if it is static', 'Yes', 'Only in inheritance'],
    answer: 2,
    explanation: 'Yes, it can call itself (recursion) or any other member function.'
  },
  {
    question: 'What is the output?\nclass Example {\n  int getNumber() { return 10; }\n  public:\n  void showNumber() { cout << getNumber(); }\n};\nExample e; e.showNumber();',
    options: ['10', 'Error', 'getNumber', '0'],
    answer: 0,
    explanation: 'The showNumber() function calls the private getNumber(), which is allowed.'
  },
  {
    question: 'In nesting member functions, access specifiers such as private or public affect:',
    options: [
      'Whether function can call another',
      'Only access from outside the class',
      'Calling inside class is not allowed',
      'It depends on compiler'
    ],
    answer: 1,
    explanation: 'Access specifiers control access from outside, but member functions can call each other regardless.'
  }
],
'Friend classes,Friend functions & Member Friend Functions': [
  {
    question: 'What is a friend function in C++?',
    options: [
      'A function inside the class',
      'A function that can access private and protected members of a class',
      'A derived class function',
      'A virtual function'
    ],
    answer: 1,
    explanation: 'A friend function is not a member of the class but can access its private and protected members.'
  },
  {
    question: 'How is a friend function declared?',
    options: [
      'Inside main()',
      'Inside the class with the keyword `friend`',
      'Outside the class',
      'Using `public` access specifier'
    ],
    answer: 1,
    explanation: 'Friend functions are declared inside the class using the `friend` keyword.'
  },
  {
    question: 'What will be the output?\nclass A {\n  int x = 10;\n  friend void show(A);\n};\nvoid show(A a) { cout << a.x; }',
    options: ['Error', '10', 'Garbage value', 'Undefined'],
    answer: 1,
    explanation: 'The friend function `show()` can access private data member `x` of class A.'
  },
  {
    question: 'Which of the following is true about friend functions?',
    options: [
      'They can only access public data',
      'They are member functions',
      'They are not in the scope of the class but can access its members',
      'They can be inherited'
    ],
    answer: 2,
    explanation: 'Friend functions are not members but are given access to class members.'
  },
  {
    question: 'Can a class be a friend of another class?',
    options: ['No', 'Yes', 'Only if both classes inherit a base class', 'Only in multiple inheritance'],
    answer: 1,
    explanation: 'Yes, a class can be declared as a friend of another class using the `friend class` declaration.'
  },
  {
    question: 'What does this do?\nclass B;\nclass A {\n  int x = 5;\n  friend class B;\n};\nclass B {\n  public:\n  void show(A a) { cout << a.x; }\n};',
    options: ['Error', '5', 'Undefined behavior', '0'],
    answer: 1,
    explanation: 'Class B is a friend of A and can access its private members like `x`.'
  },
  {
    question: 'What is a member friend function?',
    options: [
      'A member of another class that’s a friend of this class',
      'A function declared both as a member and as a friend',
      'A virtual member function',
      'A friend function that belongs to another class'
    ],
    answer: 3,
    explanation: 'A member of another class can be declared as a friend of a different class.'
  },
  {
    question: 'Which of the following is false about friend functions?',
    options: [
      'They can access private members',
      'They are declared using `friend`',
      'They are inherited by derived classes',
      'They are not members of the class'
    ],
    answer: 2,
    explanation: 'Friend functions are not inherited by derived classes.'
  },
  {
    question: 'Can a friend function be overloaded?',
    options: ['No', 'Yes', 'Only with templates', 'Only static functions'],
    answer: 1,
    explanation: 'Yes, friend functions can be overloaded like normal functions.'
  },
  {
    question: 'Which of the following statements is correct?\n1. A friend function can be a member of another class\n2. A friend class can access all private members of another class',
    options: [
      'Only 1 is correct',
      'Only 2 is correct',
      'Both 1 and 2 are correct',
      'Both are incorrect'
    ],
    answer: 2,
    explanation: 'Both are true. Friend functions can be members of other classes, and friend classes have full access.'
  }
],
'Copy Constructor': [
  {
    question: 'What is a copy constructor in C++?',
    options: ['A constructor used to copy an object', 'A constructor with two parameters', 'A static constructor', 'None of the above'],
    answer: 0,
    explanation: 'A copy constructor creates a new object by copying an existing object.'
  },
  {
    question: 'Which of the following correctly defines a copy constructor?',
    options: ['A(const A& obj)', 'A(A obj)', 'A(*obj)', 'copy(A)'],
    answer: 0,
    explanation: 'The standard syntax for a copy constructor is A(const A& obj).'
  },
  {
    question: 'When is a copy constructor called?',
    options: ['Object destruction', 'Passing object by reference', 'Returning object by value', 'During inheritance'],
    answer: 2,
    explanation: 'A copy constructor is called when an object is passed or returned by value.'
  },
  {
    question: 'What happens if you don’t define a copy constructor in your class?',
    options: ['Compiler gives error', 'A default copy constructor is provided', 'Object cannot be copied', 'Object is moved'],
    answer: 1,
    explanation: 'The compiler provides a default copy constructor unless a user-defined one exists.'
  },
  {
    question: 'Which of the following may lead to shallow copy issues?',
    options: ['Primitive data members', 'Dynamic memory allocation', 'Static members', 'Public data'],
    answer: 1,
    explanation: 'Shallow copy can lead to issues with dynamically allocated memory (e.g., double deletion).'
  },
  {
    question: 'Can a copy constructor be private?',
    options: ['Yes', 'No', 'Only in inheritance', 'Only with friend functions'],
    answer: 0,
    explanation: 'Yes, making it private can prevent object copying (used in singleton patterns).'
  },
  {
    question: 'Which of the following uses a copy constructor?\nA a1;\nA a2 = a1;',
    options: ['Default constructor', 'Assignment operator', 'Copy constructor', 'Destructor'],
    answer: 2,
    explanation: 'a2 = a1 invokes the copy constructor at initialization.'
  },
  {
    question: 'Can a copy constructor call another constructor inside it?',
    options: ['Yes using constructor delegation', 'No', 'Only if virtual', 'Only if default'],
    answer: 0,
    explanation: 'Constructor delegation is allowed in C++11 and later.'
  },
  {
    question: 'Which keyword can be used to prevent copying of an object in C++11?',
    options: ['static', 'const', 'delete', 'restrict'],
    answer: 2,
    explanation: 'You can delete the copy constructor using `= delete` to prevent copying.'
  },
  {
    question: 'Choose the correct output:\nclass A { public: int x; A(int i) { x = i; } A(const A& a) { x = a.x + 10; } };\nA a(5); A b = a; cout << b.x;',
    options: ['5', '10', '15', 'Compilation error'],
    answer: 2,
    explanation: 'Copy constructor adds 10 to x, so output is 15.'
  }
],
'Destructor': [
  {
    question: 'What is a destructor in C++?',
    options: ['A function that creates an object', 'A function called when object is destroyed', 'A function to copy objects', 'A function to initialize objects'],
    answer: 1,
    explanation: 'Destructor cleans up resources when an object goes out of scope.'
  },
  {
    question: 'Which of these is the correct way to define a destructor in class A?',
    options: ['~A()', 'A()', 'delete A()', 'destructor A()'],
    answer: 0,
    explanation: 'Destructor has the same name as the class, prefixed with a tilde (~).'
  },
  {
    question: 'How many destructors can a class have?',
    options: ['Multiple', 'One', 'Zero', 'Two'],
    answer: 1,
    explanation: 'A class can have only one destructor, which cannot be overloaded.'
  },
  {
    question: 'When is the destructor automatically called?',
    options: ['Object initialization', 'Object copying', 'Object destruction', 'Object return'],
    answer: 2,
    explanation: 'Destructor is called when the object goes out of scope or is explicitly deleted.'
  },
  {
    question: 'Which of the following requires a destructor?',
    options: ['Primitive variable', 'Array', 'File stream or pointer object', 'Static variable'],
    answer: 2,
    explanation: 'Resources like file streams and dynamic memory must be released by a destructor.'
  },
  {
    question: 'Can a destructor be virtual?',
    options: ['Yes', 'No', 'Only in Java', 'Only static'],
    answer: 0,
    explanation: 'Virtual destructors ensure proper cleanup in inheritance hierarchies.'
  },
  {
    question: 'Which of the following is true about destructors in inheritance?',
    options: [
      'Destructor of base is called before derived',
      'Destructor of derived is called before base',
      'Only derived destructor is called',
      'Destructor is not inherited'
    ],
    answer: 1,
    explanation: 'Destructor of derived class is called first, then base class.'
  },
  {
    question: 'What is the output?\nclass A { public: ~A() { cout << "A"; } };\nint main() { A a; }',
    options: ['Nothing', 'A', 'Compilation error', 'Segmentation fault'],
    answer: 1,
    explanation: 'The destructor will run at the end of main, printing "A".'
  },
  {
    question: 'What happens if a class managing heap memory lacks a destructor?',
    options: ['No effect', 'Memory leak', 'Runtime error', 'Stack overflow'],
    answer: 1,
    explanation: 'Without a destructor, dynamic memory may not be released properly, causing leaks.'
  },
  {
    question: 'Which of the following is FALSE about destructors?',
    options: [
      'They can be virtual',
      'They take no arguments',
      'They are automatically invoked',
      'They can be overloaded'
    ],
    answer: 3,
    explanation: 'Destructors cannot be overloaded — only one per class is allowed.'
  }
],
'Virtual Base Class & Virtual Functions': [
  {
    question: 'What is the purpose of a virtual base class in C++?',
    options: [
      'To define abstract classes',
      'To resolve ambiguity in multiple inheritance',
      'To overload functions',
      'To implement recursion'
    ],
    answer: 1,
    explanation: 'Virtual base classes help avoid duplicate base class instances in diamond inheritance.'
  },
  {
    question: 'Which keyword is used to make a base class virtual?',
    options: ['abstract', 'virtual', 'base', 'override'],
    answer: 1,
    explanation: 'The "virtual" keyword is used when inheriting a class to make it a virtual base.'
  },
  {
    question: 'What is a virtual function in C++?',
    options: [
      'A function that can be overloaded',
      'A function with no definition',
      'A function that supports runtime polymorphism',
      'A template function'
    ],
    answer: 2,
    explanation: 'Virtual functions enable runtime polymorphism (dynamic dispatch).'
  },
  {
    question: 'Which of these correctly demonstrates a virtual base class?',
    options: [
      'class B {}; class D : virtual B {};',
      'class B {}; class D : B virtual {};',
      'class B : virtual {}; class D : B {};',
      'class virtual B {}; class D : B {};'
    ],
    answer: 0,
    explanation: 'The correct syntax is: class D : virtual B.'
  },
  {
    question: 'What will this output?\nclass A { public: virtual void show() { cout << "A"; } };\nclass B : public A { public: void show() { cout << "B"; } };\nint main() { A* a = new B(); a->show(); }',
    options: ['A', 'B', 'AB', 'Error'],
    answer: 1,
    explanation: 'Since show() is virtual and object is of B, it calls B’s implementation.'
  },
  {
    question: 'Which of the following is required for virtual functions to work correctly?',
    options: ['Static function', 'Base class pointer', 'Friend function', 'Private inheritance'],
    answer: 1,
    explanation: 'Virtual functions work via base class pointers/references pointing to derived objects.'
  },
  {
    question: 'What is the correct output?\nclass A { public: A() { cout << "A"; } };\nclass B : virtual public A { public: B() { cout << "B"; } };\nclass C : virtual public A { public: C() { cout << "C"; } };\nclass D : public B, public C { public: D() { cout << "D"; } };\nint main() { D d; }',
    options: ['ABCD', 'ACBD', 'ABCD', 'ACBD', 'ABCD'],
    answer: 0,
    explanation: 'A is constructed only once due to virtual inheritance; final order is A B C D.'
  },
  {
    question: 'Which of these statements is TRUE about virtual destructors?',
    options: [
      'They are used to destroy static members',
      'They ensure derived destructors are called',
      'They work only in base classes',
      'They don’t affect virtual functions'
    ],
    answer: 1,
    explanation: 'Virtual destructors ensure that derived class destructors are called during deletion.'
  },
  {
    question: 'What happens if a virtual function is not overridden in the derived class?',
    options: [
      'Program crashes',
      'Compiler error',
      'Base class version is called',
      'Undefined behavior'
    ],
    answer: 2,
    explanation: 'If not overridden, the base class version of the virtual function is executed.'
  },
  {
    question: 'Which of the following keywords disables further overriding of a virtual function in C++11?',
    options: ['virtual', 'final', 'sealed', 'override'],
    answer: 1,
    explanation: 'The "final" specifier prevents further overriding of virtual functions.'
  }
],
'Constructor Overloading': [
  {
    question: 'What is constructor overloading in C++?',
    options: [
      'Using multiple classes in a single file',
      'Defining multiple constructors with the same name but different parameters',
      'Using a constructor inside another constructor',
      'Using inheritance with constructors'
    ],
    answer: 1,
    explanation: 'Constructor overloading means having multiple constructors with different parameter lists.'
  },
  {
    question: 'Which of the following is valid constructor overloading?',
    options: [
      'MyClass() and MyClass()',
      'MyClass(int x) and MyClass(int y)',
      'MyClass(int x) and MyClass(float x)',
      'MyClass(int x, int y) and MyClass(int x, int y)'
    ],
    answer: 2,
    explanation: 'Constructor overloading requires a difference in the number or types of parameters.'
  },
  {
    question: 'What will this code print?\nclass Test {\n  public:\n    Test() { cout << "Default"; }\n    Test(int) { cout << "Param"; }\n};\nint main() { Test t(5); }',
    options: ['Default', 'Param', 'DefaultParam', 'Error'],
    answer: 1,
    explanation: 'Constructor with int parameter is called, so it prints "Param".'
  },
  {
    question: 'Can constructor overloading be done with default arguments?',
    options: ['Yes', 'No', 'Only in templates', 'Only in abstract classes'],
    answer: 0,
    explanation: 'Yes, but overuse of default arguments can lead to ambiguity.'
  },
  {
    question: 'Which constructor will be called?\nclass A {\n  public:\n    A(int x) { cout << "int"; }\n    A(float x) { cout << "float"; }\n};\nint main() { A a(10.5); }',
    options: ['int', 'float', 'Error', 'Ambiguous'],
    answer: 1,
    explanation: '10.5 is a double literal, which matches float better than int due to conversion rules.'
  },
  {
    question: 'What will happen?\nclass Demo {\n  public:\n    Demo(int a = 0) { cout << "One"; }\n    Demo() { cout << "Two"; }\n};',
    options: ['Compiler Error', 'Runtime Error', 'Works Fine', 'Undefined Behavior'],
    answer: 0,
    explanation: 'Ambiguity error occurs because both constructors match Demo().'
  },
  {
    question: 'Can constructors be overloaded in derived classes as well?',
    options: ['Yes', 'No', 'Only if base class is virtual', 'Only in templates'],
    answer: 0,
    explanation: 'Constructors can be overloaded in both base and derived classes independently.'
  },
  {
    question: 'What is the advantage of constructor overloading?',
    options: [
      'Faster compilation',
      'Larger executables',
      'Flexibility to create objects in multiple ways',
      'Automatic destructor calling'
    ],
    answer: 2,
    explanation: 'It allows creating objects with different initialization values and formats.'
  },
  {
    question: 'Which constructor is called?\nclass Example {\n  public:\n    Example(int a) { cout << "Int"; }\n    Example(char c) { cout << "Char"; }\n};\nint main() { Example e(\'A\'); }',
    options: ['Char', 'Int', 'Error', 'None'],
    answer: 0,
    explanation: 'The constructor with char parameter is selected for \'A\'.'
  },
  {
    question: 'Is it mandatory to define a default constructor when overloading constructors?',
    options: ['Yes', 'No', 'Only in structs', 'Only if using static members'],
    answer: 1,
    explanation: 'It’s not mandatory unless you want to create objects without arguments.'
  }
],
'Containers,List & Map': [
  {
    question: 'Which of the following is a sequence container in C++ STL?',
    options: ['map', 'list', 'set', 'unordered_map'],
    answer: 1,
    explanation: '`list` is a doubly-linked list and is part of the sequence containers in STL.'
  },
  {
    question: 'What is the time complexity to access an element in a std::map?',
    options: ['O(1)', 'O(n)', 'O(log n)', 'O(n log n)'],
    answer: 2,
    explanation: 'std::map is implemented as a balanced BST (like Red-Black Tree), hence O(log n) access.'
  },
  {
    question: 'Which of the following is true about std::list in STL?',
    options: [
      'Random access is allowed',
      'It is implemented as a dynamic array',
      'Insertion/deletion at ends is efficient',
      'Duplicates are not allowed'
    ],
    answer: 2,
    explanation: '`std::list` allows efficient insertion/deletion at both ends and anywhere in the list.'
  },
  {
    question: 'What does the following code print?\nstd::list<int> l = {10, 20, 30};\nauto it = l.begin();\nadvance(it, 2);\ncout << *it;',
    options: ['10', '20', '30', 'Undefined'],
    answer: 2,
    explanation: '`advance(it, 2)` moves the iterator to the 3rd element (30).'
  },
  {
    question: 'Which container stores key-value pairs in sorted order?',
    options: ['vector', 'list', 'map', 'unordered_map'],
    answer: 2,
    explanation: '`map` stores elements as key-value pairs sorted by key using a comparator.'
  },
  {
    question: 'What will this code output?\nstd::map<string, int> m;\nm["a"] = 1;\nm["b"] = 2;\nm["a"] = 5;\ncout << m["a"];',
    options: ['1', '5', '0', 'Error'],
    answer: 1,
    explanation: 'The second assignment `m["a"] = 5` overwrites the value for key "a". So output is 5.'
  },
  {
    question: 'Which container is best suited for frequent insertion and deletion at any position?',
    options: ['vector', 'list', 'array', 'map'],
    answer: 1,
    explanation: '`std::list` provides fast insertion and deletion at any position in O(1) time.'
  },
  {
    question: 'Can std::map have duplicate keys?',
    options: ['Yes', 'No', 'Only for int keys', 'Only for custom keys'],
    answer: 1,
    explanation: '`std::map` does not allow duplicate keys. Use `multimap` if duplicates are needed.'
  },
  {
    question: 'What is the difference between map and unordered_map?',
    options: [
      'map is faster',
      'unordered_map stores keys in sorted order',
      'unordered_map uses hashing and has average O(1) access',
      'Both are same'
    ],
    answer: 2,
    explanation: '`unordered_map` uses hash tables internally and has average O(1) access time.'
  },
  {
    question: 'What does the following program do?\nstd::list<int> l = {1, 2, 3};\nl.reverse();\nfor(int x : l) cout << x << " ";',
    options: ['1 2 3', '3 2 1', 'Error', 'Nothing'],
    answer: 1,
    explanation: '`reverse()` reverses the list in-place. The output is 3 2 1.'
  }
],
'C++ Functional Templates': [
  {
    question: 'What is the purpose of a function template in C++?',
    options: [
      'To overload a function with the same logic',
      'To define a function for generic types',
      'To inherit from base class',
      'To define multiple classes in one'
    ],
    answer: 1,
    explanation: 'Function templates allow defining a generic function that works with any data type.'
  },
  {
    question: 'Which keyword is used to define a function template?',
    options: ['class', 'typename', 'template', 'generic'],
    answer: 2,
    explanation: '`template` is the correct keyword used to define function templates.'
  },
  {
    question: 'What will the following template function output?\ntemplate<typename T>\nT add(T a, T b) { return a + b; }\nint main() { cout << add(2, 3); }',
    options: ['5', '23', 'Compile error', 'Undefined'],
    answer: 0,
    explanation: 'add(2, 3) returns 5 since both are integers and operator+ is defined for int.'
  },
  {
    question: 'What happens when a template function is called with arguments of different types?',
    options: [
      'Compiler will deduce the common type',
      'Compiler error unless explicitly specified',
      'It runs fine',
      'It automatically casts'
    ],
    answer: 1,
    explanation: 'The compiler needs all arguments to be of the same type or you must explicitly specify the type.'
  },
  {
    question: 'Identify the correct syntax to define a function template.',
    options: [
      'template T func(T a)',
      'template<class T> T func(T a)',
      'template(type T) func(T a)',
      'T template func(T a)'
    ],
    answer: 1,
    explanation: 'Correct syntax: `template<class T>` or `template<typename T>`.'
  },
  {
    question: 'What will be the output?\ntemplate<typename T>\nvoid swapVal(T &a, T &b) {\n T temp = a; a = b; b = temp; }\nint main() {\n int x = 10, y = 20; swapVal(x, y);\n cout << x << " " << y; }',
    options: ['10 20', '20 10', 'Error', '0 0'],
    answer: 1,
    explanation: 'The values of x and y are swapped using the generic template.'
  },
  {
    question: 'Which of the following is true about function templates?',
    options: [
      'They can be overloaded',
      'They must be specialized',
      'They cannot use references',
      'They always require explicit type arguments'
    ],
    answer: 0,
    explanation: 'Function templates can be overloaded just like regular functions.'
  },
  {
    question: 'What is template instantiation?',
    options: [
      'Creating an object of a class template',
      'Generating a specific version of a function from a template',
      'Using inheritance in templates',
      'None of the above'
    ],
    answer: 1,
    explanation: 'Template instantiation is the process of generating a function/class from a template with specific types.'
  },
  {
    question: 'What will be the output?\ntemplate<class T>\nT multiply(T a, T b) { return a * b; }\nint main() { cout << multiply(3.5, 2); }',
    options: ['7.0', '5.5', 'Error', '7'],
    answer: 0,
    explanation: 'multiply(3.5, 2) returns 7.0 as the operation works with double.'
  },
  {
    question: 'Can function templates have default arguments?',
    options: ['Yes', 'No', 'Only in class templates', 'Only if argument is int'],
    answer: 0,
    explanation: 'Yes, function templates can have default arguments like regular functions.'
  }
]
}
}

    const questions = (quizData[language] && quizData[language][subtopic]) || [];
    let currentQuestion = 0;
    let userAnswers = new Array(questions.length).fill(null);
    let timer;
    let timeLeft = 60;

    const timerDiv = document.getElementById('timer');
    const questionContainer = document.getElementById('question-container');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');

    function startTimer() {
      clearInterval(timer);
      timeLeft = 60;
      timerDiv.textContent = `Time Left: ${timeLeft}s`;
      timer = setInterval(() => {
        timeLeft--;
        timerDiv.textContent = `Time Left: ${timeLeft}s`;
        if (timeLeft <= 0) {
          clearInterval(timer);
          alert('Time up for this question!');
          nextQuestion();
        }
      }, 1000);
    }

    function loadQuestion() {
      const q = questions[currentQuestion];
      questionContainer.innerHTML = `<h2>Q${currentQuestion + 1}: ${q.question}</h2>`;
      q.options.forEach((opt, idx) => {
        const div = document.createElement('div');
        div.className = 'option';
        div.innerHTML = `
          <label>
            <input type="radio" name="option" value="${idx}" ${userAnswers[currentQuestion] === idx ? 'checked' : ''}>
            ${opt}
          </label>
        `;
        questionContainer.appendChild(div);
      });
      startTimer();
      prevBtn.disabled = currentQuestion === 0;
      nextBtn.style.display = currentQuestion === questions.length - 1 ? 'none' : 'inline-block';
      submitBtn.style.display = currentQuestion === questions.length - 1 ? 'block' : 'none';
    }

    function saveAnswer() {
      const selected = document.querySelector('input[name="option"]:checked');
      if (selected) {
        userAnswers[currentQuestion] = parseInt(selected.value);
      }
    }

    function nextQuestion() {
      saveAnswer();
      if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
      }
    }

    function prevQuestion() {
      saveAnswer();
      if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
      }
    }

    prevBtn.onclick = prevQuestion;
    nextBtn.onclick = nextQuestion;

    submitBtn.onclick = () => {
      saveAnswer();
      clearInterval(timer);
      let correct = 0;
      let wrong = 0;
      questions.forEach((q, idx) => {
        if (userAnswers[idx] === q.answer) {
          correct++;
        } else {
          wrong++;
        }
      });
      // Store results in sessionStorage
      sessionStorage.setItem('quizResults', JSON.stringify({
        language,
        subtopic,
        questions,
        userAnswers,
        correct,
        wrong
      }));
      window.location.href = 'results.html';
    };

    loadQuestion();