/**
 * AI CHATBOT — TECHNICAL INTERVIEW SIMULATION PLATFORM
 * Tagline: "Think sharper. Perform better."
 * Full-stack Client Application Logic
 */

(function () {
  'use strict';

  /* ==========================================================================
     PHASE 3: COMPREHENSIVE QUESTION BANK (38 HIGH-QUALITY C++ QUESTIONS)
     Distribution:
     - OOP Fundamentals: 6
     - Inheritance: 5
     - Polymorphism: 5
     - Exception Handling: 8 (Key Assessment Topic)
     - Templates: 8 (Key Assessment Topic)
     - STL: 6
     ========================================================================== */

  const QUESTION_BANK = [
    // -------------------------------------------------------------------------
    // 1. OOP FUNDAMENTALS (6 Questions)
    // -------------------------------------------------------------------------
    {
      id: "oop_1",
      topic: "OOP Fundamentals",
      difficulty: 1, // Foundation
      question: "What is the fundamental difference between a Class and an Object in C++? How is memory allocated for each?",
      keywords: [
        { term: "blueprint", synonyms: ["template", "user-defined data type", "prototype", "design", "specification"], weight: 2.0, isCore: true },
        { term: "instance", synonyms: ["entity", "realization", "variable of class"], weight: 2.0, isCore: true },
        { term: "memory", synonyms: ["heap", "stack", "allocated", "storage", "instantiation"], weight: 1.5, isCore: false },
        { term: "state and behavior", synonyms: ["data members and member functions", "attributes and methods", "properties"], weight: 1.0, isCore: false }
      ],
      hint: "Think about user-defined blueprints versus physical runtime entities that occupy memory space.",
      explanation: "A Class is a user-defined blueprint or specification that declares data members and member functions; it consumes no memory for object state until instantiated. An Object is a concrete instance of a class that is allocated storage on either the stack (automatic storage) or the heap (dynamic via new).",
      example: "class Car {\n    int speed;\n};\nCar c1; // c1 is an instance (object) allocated memory on stack",
      commonMistakes: "Claiming that declaring a class allocates memory for variables before any object is created."
    },
    {
      id: "oop_2",
      topic: "OOP Fundamentals",
      difficulty: 1,
      question: "Explain the concept of Encapsulation in C++. How do access specifiers help enforce data hiding?",
      keywords: [
        { term: "bundling", synonyms: ["wrapping", "binding", "combining", "grouping"], weight: 2.0, isCore: true },
        { term: "data hiding", synonyms: ["protecting data", "hiding internal details", "preventing direct access", "restricted access"], weight: 2.5, isCore: true },
        { term: "access specifiers", synonyms: ["private", "public", "protected"], weight: 1.5, isCore: false },
        { term: "getters and setters", synonyms: ["accessor", "mutator", "member functions", "methods"], weight: 1.0, isCore: false }
      ],
      hint: "Focus on wrapping data and member methods into a single unit and guarding variables with private access.",
      explanation: "Encapsulation binds data and the functions that manipulate that data into a single unit (class). It enforces data hiding by declaring sensitive state as 'private', preventing direct outside tampering, while exposing controlled access through 'public' getter and setter methods.",
      example: "class BankAccount {\nprivate:\n    double balance;\npublic:\n    double getBalance() const { return balance; }\n    void deposit(double amt) { if (amt > 0) balance += amt; }\n};",
      commonMistakes: "Confusing encapsulation (wrapping and protecting data) with abstraction (hiding implementation complexity)."
    },
    {
      id: "oop_3",
      topic: "OOP Fundamentals",
      difficulty: 2, // Intermediate
      question: "What is Abstraction in C++, and how is it achieved using Abstract Classes and Pure Virtual Functions?",
      keywords: [
        { term: "essential features", synonyms: ["hiding complexity", "hiding implementation details", "showing only relevant details", "interface"], weight: 2.5, isCore: true },
        { term: "pure virtual function", synonyms: ["= 0", "virtual function without body", "abstract method"], weight: 2.5, isCore: true },
        { term: "abstract class", synonyms: ["cannot be instantiated", "base class contract", "interface class"], weight: 1.5, isCore: true }
      ],
      hint: "Mention showing essential features while hiding background details, and the '= 0' syntax.",
      explanation: "Abstraction displays only essential attributes and behaviors to the outside world while hiding complex internal implementation mechanics. In C++, an Abstract Class contains at least one pure virtual function ('virtual void draw() = 0;'), defining an interface contract that derived classes must implement.",
      example: "class Shape {\npublic:\n    virtual void draw() = 0; // Pure virtual function -> Shape is abstract\n};",
      commonMistakes: "Attempting to instantiate an abstract class directly using 'Shape s;'."
    },
    {
      id: "oop_4",
      topic: "OOP Fundamentals",
      difficulty: 1,
      question: "What are Constructors and Destructors in C++? Describe Member Initializer Lists and when they are mandatory.",
      keywords: [
        { term: "constructor", synonyms: ["initialization", "same name as class", "object creation"], weight: 2.0, isCore: true },
        { term: "destructor", synonyms: ["cleanup", "tilde", "~", "deallocation", "resource release"], weight: 2.0, isCore: true },
        { term: "initializer list", synonyms: ["colon syntax", "member initialization", "direct initialization"], weight: 2.0, isCore: true },
        { term: "const and reference", synonyms: ["const members", "reference members", "base class without default constructor"], weight: 1.5, isCore: false }
      ],
      hint: "Discuss automatic invocation at creation and destruction, plus const or reference members in initialization lists.",
      explanation: "A constructor initializes an object when created, having the same name as the class without a return type. A destructor (~ClassName) automatically releases resources when an object leaves scope. Member initializer lists initialize members before the constructor body executes, and are mandatory for const members, references, and base classes lacking default constructors.",
      example: "class Point {\n    const int x;\n    int& ref;\npublic:\n    Point(int a, int& b) : x(a), ref(b) {} // Initializer list mandatory\n};",
      commonMistakes: "Trying to assign to a const member inside the constructor body instead of using an initializer list."
    },
    {
      id: "oop_5",
      topic: "OOP Fundamentals",
      difficulty: 2,
      question: "Explain the difference between Shallow Copy and Deep Copy in C++. Why is a custom Copy Constructor essential when managing dynamic memory?",
      keywords: [
        { term: "shallow copy", synonyms: ["memberwise copy", "default copy", "copies pointer address", "same memory location"], weight: 2.0, isCore: true },
        { term: "deep copy", synonyms: ["allocates new memory", "duplicate memory", "copies pointed data", "separate memory"], weight: 2.5, isCore: true },
        { term: "dangling pointer", synonyms: ["double free", "double deletion", "crash", "shared pointer issue"], weight: 2.0, isCore: true },
        { term: "copy constructor", synonyms: ["const ClassName&", "custom copy"], weight: 1.5, isCore: false }
      ],
      hint: "Explain what happens when two objects point to the same heap address and both destructors run.",
      explanation: "A shallow copy performs a member-by-member copy of values. If a class contains raw pointers to heap memory, shallow copy merely duplicates the memory address, causing two objects to point to the same memory. When both objects destruct, a double-free runtime crash occurs. A deep copy allocates new heap memory and copies the actual values.",
      example: "class Buffer {\n    int* data;\npublic:\n    Buffer(const Buffer& other) { // Deep copy\n        data = new int(*other.data);\n    }\n    ~Buffer() { delete data; }\n};",
      commonMistakes: "Failing to allocate new memory in the copy constructor, leading to dangling pointers."
    },
    {
      id: "oop_6",
      topic: "OOP Fundamentals",
      difficulty: 2,
      question: "What is the purpose of the 'this' pointer and 'static' data members and member functions in C++?",
      keywords: [
        { term: "this pointer", synonyms: ["current object address", "implicit pointer", "pointer to invoking object"], weight: 2.5, isCore: true },
        { term: "static member", synonyms: ["class variable", "shared across all instances", "one copy in memory", "scope resolution ::"], weight: 2.5, isCore: true },
        { term: "static function", synonyms: ["no this pointer", "cannot access non-static members", "class level function"], weight: 1.5, isCore: false }
      ],
      hint: "Remember 'this' resolves naming conflicts between parameters and members; 'static' belongs to the class itself.",
      explanation: "The 'this' pointer is an implicit constant pointer passed to non-static member functions that holds the address of the invoking instance. 'static' data members belong to the class itself rather than individual objects; only one copy exists in memory shared by all instances. Static member functions do not receive a 'this' pointer and can only access other static members.",
      example: "class Counter {\n    int count;\npublic:\n    static int totalCount;\n    void setCount(int count) { this->count = count; }\n    static int getTotal() { return totalCount; }\n};",
      commonMistakes: "Trying to use the 'this' pointer or accessing non-static member variables inside a static member function."
    },

    // -------------------------------------------------------------------------
    // 2. INHERITANCE (5 Questions)
    // -------------------------------------------------------------------------
    {
      id: "inh_1",
      topic: "Inheritance",
      difficulty: 1,
      question: "What is Inheritance in C++? Briefly explain the five types of inheritance supported in C++.",
      keywords: [
        { term: "code reusability", synonyms: ["derived class", "base class", "parent child relationship", "subclassing"], weight: 2.0, isCore: true },
        { term: "single inheritance", synonyms: ["one base one derived"], weight: 1.0, isCore: false },
        { term: "multiple inheritance", synonyms: ["multiple base classes", "two base classes"], weight: 1.5, isCore: true },
        { term: "multilevel", synonyms: ["chain of inheritance", "grandparent parent child"], weight: 1.0, isCore: false },
        { term: "hierarchical and hybrid", synonyms: ["tree inheritance", "combination of types"], weight: 1.0, isCore: false }
      ],
      hint: "Name Single, Multiple, Multilevel, Hierarchical, and Hybrid inheritance, stressing code reusability.",
      explanation: "Inheritance allows a derived class to acquire properties and behaviors from one or more base classes, promoting code reusability. The 5 types are: 1) Single (one base to one derived), 2) Multiple (derived from two or more base classes), 3) Multilevel (chain of inheritance A->B->C), 4) Hierarchical (multiple derived classes from one base), and 5) Hybrid (combination of two or more types).",
      example: "class A {};\nclass B : public A {}; // Single\nclass C : public A, public B {}; // Multiple",
      commonMistakes: "Thinking C++ does not support multiple inheritance (unlike Java or C#)."
    },
    {
      id: "inh_2",
      topic: "Inheritance",
      difficulty: 2,
      question: "How do access specifiers (public, protected, private) affect inheritance modes in C++?",
      keywords: [
        { term: "public inheritance", synonyms: ["is-a relationship", "public remains public", "protected remains protected"], weight: 2.0, isCore: true },
        { term: "protected inheritance", synonyms: ["public becomes protected", "protected remains protected"], weight: 1.5, isCore: true },
        { term: "private inheritance", synonyms: ["implemented in terms of", "all members become private in derived"], weight: 2.0, isCore: true },
        { term: "base private members", synonyms: ["never accessible directly", "hidden from derived"], weight: 1.5, isCore: false }
      ],
      hint: "Remember: private members of the base class are never directly accessible by derived classes in any mode.",
      explanation: "The inheritance access specifier defines the upper bound of visibility for inherited members: In 'public' inheritance, base public members stay public and protected stay protected. In 'protected' inheritance, base public and protected members become protected. In 'private' inheritance, all inherited members become private in the derived class. In all modes, base private members remain inaccessible directly.",
      example: "class Base { public: int x; protected: int y; private: int z; };\nclass Derived : private Base {\n    // x and y become private; z is inaccessible\n};",
      commonMistakes: "Assuming private inheritance gives derived class access to private members of the base class."
    },
    {
      id: "inh_3",
      topic: "Inheritance",
      difficulty: 2,
      question: "What is the Diamond Problem in C++ multiple inheritance, and why does it cause compiler ambiguity?",
      keywords: [
        { term: "ambiguity", synonyms: ["multiple copies", "duplicate subobject", "compiler error", "conflict"], weight: 2.5, isCore: true },
        { term: "multiple inheritance", synonyms: ["two intermediate classes", "common ancestor", "diamond shape"], weight: 2.0, isCore: true },
        { term: "two copies of base", synonyms: ["duplicate base class", "two instances of Grandparent"], weight: 2.0, isCore: true }
      ],
      hint: "Draw a diamond: Class A is inherited by B and C, which are both inherited by D. How many copies of A does D receive?",
      explanation: "The Diamond Problem occurs when a derived class (D) inherits from two intermediate classes (B and C) that both inherit from a common base class (A). Because D receives two separate copies of A's members (one via B and one via C), accessing any member of A from D causes a compiler ambiguity error.",
      example: "class A { public: int val; };\nclass B : public A {};\nclass C : public A {};\nclass D : public B, public C {}; // D has two copies of val -> Ambiguity!",
      commonMistakes: "Assuming the compiler automatically chooses one copy without requiring virtual inheritance."
    },
    {
      id: "inh_4",
      topic: "Inheritance",
      difficulty: 3, // Advanced
      question: "How do Virtual Base Classes solve the Diamond Problem in C++? Explain the runtime mechanics.",
      keywords: [
        { term: "virtual inheritance", synonyms: ["virtual base class", "virtual keyword in inheritance", "class B : virtual public A"], weight: 2.5, isCore: true },
        { term: "single shared copy", synonyms: ["single subobject", "one instance of base", "shared base subobject", "no duplication"], weight: 2.5, isCore: true },
        { term: "most derived class", synonyms: ["D initializes A", "constructor responsibility", "vptr adjustment"], weight: 1.5, isCore: false }
      ],
      hint: "Use 'virtual' keyword in intermediate inheritance so that only one shared base subobject is constructed.",
      explanation: "Declaring intermediate classes with virtual inheritance ('class B : virtual public A') ensures that only a single, shared subobject of base class A exists inside the most derived class D. Furthermore, the most derived class (D) becomes responsible for directly invoking the virtual base class (A) constructor, completely resolving ambiguity.",
      example: "class A { public: int x; A(int v) : x(v) {} };\nclass B : virtual public A { public: B() : A(10) {} };\nclass C : virtual public A { public: C() : A(10) {} };\nclass D : public B, public C { public: D() : A(42) {} }; // Only one copy of A!",
      commonMistakes: "Thinking virtual functions and virtual base classes are the same feature."
    },
    {
      id: "inh_5",
      topic: "Inheritance",
      difficulty: 2,
      question: "What is the exact execution order of Constructors and Destructors in an inheritance hierarchy in C++?",
      keywords: [
        { term: "base first", synonyms: ["base constructor first", "top to bottom", "order of derivation"], weight: 2.5, isCore: true },
        { term: "derived first for destructor", synonyms: ["reverse order", "bottom to top", "derived destructor first"], weight: 2.5, isCore: true },
        { term: "virtual destructor", synonyms: ["virtual ~Base()", "prevent memory leak", "delete through base pointer"], weight: 1.5, isCore: false }
      ],
      hint: "Base constructors execute first (foundation must exist before extension); destructors execute in reverse order.",
      explanation: "Constructors execute from base class down to derived class (Base -> Derived), ensuring the foundation is initialized before derived members depend on it. Destructors execute in exact reverse order (Derived -> Base), cleaning up derived extensions before dismantling the base.",
      example: "class Base { public: Base() { cout << \"B\"; } ~Base() { cout << \"~B\"; } };\nclass Derived : public Base { public: Derived() { cout << \"D\"; } ~Derived() { cout << \"~D\"; } };\n// Creation prints BD; Destruction prints ~D~B",
      commonMistakes: "Believing derived constructor runs first before base constructor."
    },

    // -------------------------------------------------------------------------
    // 3. POLYMORPHISM (5 Questions)
    // -------------------------------------------------------------------------
    {
      id: "poly_1",
      topic: "Polymorphism",
      difficulty: 1,
      question: "Compare Compile-Time (Static) Polymorphism and Run-Time (Dynamic) Polymorphism in C++.",
      keywords: [
        { term: "compile-time", synonyms: ["static binding", "early binding", "overloading", "templates"], weight: 2.5, isCore: true },
        { term: "run-time", synonyms: ["dynamic binding", "late binding", "virtual functions", "overriding"], weight: 2.5, isCore: true },
        { term: "binding speed", synonyms: ["performance overhead", "no runtime penalty", "vtable indirection"], weight: 1.5, isCore: false }
      ],
      hint: "Differentiate early binding (function overloading/templates) from late binding (virtual functions).",
      explanation: "Compile-Time (Static) Polymorphism is resolved during compilation with zero runtime overhead; it is achieved through function overloading, operator overloading, and templates. Run-Time (Dynamic) Polymorphism is resolved at execution time via virtual functions and base class pointers/references using the VTABLE mechanism.",
      example: "// Static: void print(int); void print(string);\n// Dynamic: Base* ptr = new Derived(); ptr->show();",
      commonMistakes: "Listing function overriding without the virtual keyword as compile-time polymorphism."
    },
    {
      id: "poly_2",
      topic: "Polymorphism",
      difficulty: 1,
      question: "What is the difference between Function Overloading and Function Overriding in C++?",
      keywords: [
        { term: "overloading", synonyms: ["same scope", "same function name", "different parameters", "different signature", "compile time"], weight: 2.5, isCore: true },
        { term: "overriding", synonyms: ["base and derived", "same signature", "virtual keyword", "runtime", "redefining implementation"], weight: 2.5, isCore: true }
      ],
      hint: "Overloading happens in the same scope with different parameters; overriding occurs across inheritance with identical signatures.",
      explanation: "Function Overloading happens within the same class or scope where functions share the exact same name but possess different parameter lists (types or counts), resolved at compile time. Function Overriding occurs between base and derived classes where a derived class provides a new body for an inherited virtual function with identical name and parameter signatures.",
      example: "// Overloading: int add(int a, int b); double add(double a, double b);\n// Overriding: class Base { virtual void run(); }; class Derived : public Base { void run() override; };",
      commonMistakes: "Believing that differing only by return type is sufficient for function overloading."
    },
    {
      id: "poly_3",
      topic: "Polymorphism",
      difficulty: 2,
      question: "How do Virtual Functions work in C++, and why are Virtual Destructors critical when deleting via a base pointer?",
      keywords: [
        { term: "virtual function", synonyms: ["dynamic dispatch", "runtime resolution", "late binding", "overridden"], weight: 2.0, isCore: true },
        { term: "virtual destructor", synonyms: ["virtual ~Base()", "prevents memory leak", "correct destruction", "calls derived destructor"], weight: 2.5, isCore: true },
        { term: "base pointer", synonyms: ["Base* ptr = new Derived", "polymorphic deletion", "undefined behavior"], weight: 1.5, isCore: true }
      ],
      hint: "If a base class destructor is non-virtual, deleting a derived object through a base pointer only calls the base destructor, leaking memory.",
      explanation: "A virtual function directs the compiler to use dynamic dispatch so the actual runtime object's method executes, even when invoked through a base class pointer. If a base class has virtual functions, its destructor MUST also be declared virtual ('virtual ~Base()'); otherwise, deleting a derived object through a base pointer only invokes ~Base(), causing derived resources to leak and triggering undefined behavior.",
      example: "class Base { public: virtual ~Base() {} }; // Virtual destructor ensures ~Derived() executes\nclass Derived : public Base { int* arr = new int[100]; public: ~Derived() { delete[] arr; } };",
      commonMistakes: "Omitting 'virtual' from a polymorphic base destructor, causing derived class heap allocations to leak."
    },
    {
      id: "poly_4",
      topic: "Polymorphism",
      difficulty: 3,
      question: "Explain the internal mechanics of VTABLE (Virtual Method Table) and VPTR (Virtual Table Pointer) in C++.",
      keywords: [
        { term: "vtable", synonyms: ["virtual method table", "table of function pointers", "per-class table", "static array of pointers"], weight: 2.5, isCore: true },
        { term: "vptr", synonyms: ["virtual pointer", "pointer to vtable", "per-object pointer", "hidden member pointer"], weight: 2.5, isCore: true },
        { term: "runtime resolution", synonyms: ["indirection", "dereference function pointer", "dispatch overhead"], weight: 1.5, isCore: false }
      ],
      hint: "Every class with virtual functions gets one static VTABLE. Every object of that class gets a hidden VPTR pointing to it.",
      explanation: "For any class declaring or inheriting virtual functions, the compiler generates a static VTABLE containing function pointers to the most-derived implementations. Each instantiated object receives a hidden member pointer (VPTR) pointing to its class's VTABLE. Calling a virtual function dereferences VPTR[index], enabling dynamic dispatch with a slight single-indirection cost.",
      example: "Base* b = new Derived();\nb->speak(); // Compiler does: (*(b->__vptr)[0])(b);",
      commonMistakes: "Thinking each object has its own copy of the whole VTABLE rather than just a 4/8-byte pointer (VPTR)."
    },
    {
      id: "poly_5",
      topic: "Polymorphism",
      difficulty: 2,
      question: "What is an Abstract Class and an Interface in C++? Can an abstract class have constructors?",
      keywords: [
        { term: "abstract class", synonyms: ["contains pure virtual function", "= 0", "cannot instantiate"], weight: 2.5, isCore: true },
        { term: "interface", synonyms: ["pure abstract class", "only pure virtual functions", "contract"], weight: 2.0, isCore: true },
        { term: "can have constructor", synonyms: ["yes constructors allowed", "constructors initialize base members", "invoked by derived"], weight: 2.0, isCore: true }
      ],
      hint: "Yes, abstract classes can and often do have constructors to initialize their own data members during derived object creation.",
      explanation: "An abstract class contains at least one pure virtual function ('= 0') and cannot be instantiated directly. A pure interface in C++ is typically an abstract class with only pure virtual functions and a virtual destructor. Yes, abstract classes CAN have constructors; they execute when derived objects are constructed to initialize inherited base members.",
      example: "class AbstractLogger {\nprotected:\n    string prefix;\npublic:\n    AbstractLogger(string p) : prefix(p) {} // Constructor in abstract class\n    virtual void log(string msg) = 0;\n};",
      commonMistakes: "Falsely asserting that abstract classes cannot have constructors or concrete member variables."
    },

    // -------------------------------------------------------------------------
    // 4. EXCEPTION HANDLING (8 Questions - KEY VIVA TOPIC)
    // -------------------------------------------------------------------------
    {
      id: "exc_1",
      topic: "Exception Handling",
      difficulty: 1,
      question: "What is Exception Handling in C++? Explain the roles of 'try', 'throw', and 'catch' blocks.",
      keywords: [
        { term: "try block", synonyms: ["code that may throw", "monitored block", "guarded code"], weight: 2.0, isCore: true },
        { term: "throw", synonyms: ["signal error", "raise exception", "creates exception object"], weight: 2.0, isCore: true },
        { term: "catch block", synonyms: ["exception handler", "handles error", "catches exception"], weight: 2.0, isCore: true },
        { term: "runtime error", synonyms: ["anomaly", "unexpected event", "graceful degradation"], weight: 1.5, isCore: false }
      ],
      hint: "try encloses error-prone code, throw signals the runtime anomaly, and catch receives and handles it.",
      explanation: "Exception handling separates error detection from error resolution to prevent crashes. Code that may fail is enclosed in a 'try' block; when an anomaly occurs, 'throw' signals the error by transmitting an exception object; one or more 'catch' blocks immediately follow to handle the specific exception type.",
      example: "try {\n    if (b == 0) throw runtime_error(\"Division by zero!\");\n    cout << a / b;\n} catch (const exception& e) {\n    cerr << e.what();\n}",
      commonMistakes: "Placing code between a try block and its associated catch block."
    },
    {
      id: "exc_2",
      topic: "Exception Handling",
      difficulty: 2,
      question: "How do Multiple Catch Blocks work in C++? Why does the order of catch blocks matter when handling derived exceptions?",
      keywords: [
        { term: "multiple catch", synonyms: ["different types", "type-specific handler"], weight: 1.5, isCore: true },
        { term: "catch ordering", synonyms: ["derived before base", "specific to general", "order of handlers"], weight: 2.5, isCore: true },
        { term: "base class hiding", synonyms: ["shadowing", "unreachable code", "base catches first"], weight: 2.0, isCore: true }
      ],
      hint: "Catching a base class exception first will intercept all its derived exceptions, making derived catch blocks dead code.",
      explanation: "A single try block can have multiple catch blocks to handle different exception data types. The compiler matches catch blocks sequentially from top to bottom. Therefore, catch handlers for derived exception classes must appear BEFORE base class handlers; placing a base class catch first intercepts derived exceptions via polymorphism, rendering subsequent derived handlers unreachable.",
      example: "try {\n    // code\n} catch (const invalid_argument& e) { // Derived first\n    // specific\n} catch (const exception& e) {        // Base second\n    // general\n}",
      commonMistakes: "Placing 'catch(const std::exception&)' above 'catch(const std::overflow_error&)'."
    },
    {
      id: "exc_3",
      topic: "Exception Handling",
      difficulty: 1,
      question: "What is the Catch-All Handler 'catch(...)' in C++, and where must it be positioned?",
      keywords: [
        { term: "catch-all", synonyms: ["catch ellipsis", "catch(...)", "default catch", "universal handler"], weight: 2.5, isCore: true },
        { term: "last catch block", synonyms: ["placed at the end", "final handler", "fallback"], weight: 2.5, isCore: true },
        { term: "unknown exception", synonyms: ["any type", "unspecified error"], weight: 1.5, isCore: false }
      ],
      hint: "Use three dots syntax 'catch(...)' placed as the very last handler to catch any unhandled exception type.",
      explanation: "'catch(...)' is the catch-all (ellipsis) handler that catches any exception regardless of its type, including fundamental types like int or custom classes. It must always be placed as the LAST catch block after all specific handlers; placing it earlier produces a compiler error because subsequent catch blocks become dead code.",
      example: "try {\n    processData();\n} catch (const std::exception& e) {\n    cout << e.what();\n} catch (...) { // Catch-all MUST be last\n    cout << \"Caught unknown exception!\";\n}",
      commonMistakes: "Trying to call methods on the caught object inside catch(...)—it does not provide a variable name."
    },
    {
      id: "exc_4",
      topic: "Exception Handling",
      difficulty: 2,
      question: "Describe the Standard Exception Hierarchy in C++ (<stdexcept>). What is the purpose of the 'what()' virtual function?",
      keywords: [
        { term: "std::exception", synonyms: ["base exception class", "root exception"], weight: 2.5, isCore: true },
        { term: "logic_error and runtime_error", synonyms: ["logic error", "runtime error", "out_of_range", "bad_alloc"], weight: 2.5, isCore: true },
        { term: "what() method", synonyms: ["returns error message", "const char*", "error description", "noexcept"], weight: 2.0, isCore: true }
      ],
      hint: "std::exception is the root. It divides into std::logic_error and std::runtime_error. what() returns an explanatory C-string.",
      explanation: "C++ provides a standard hierarchy rooted at 'std::exception'. Two major branches are: 1) 'std::logic_error' (preventable faults like invalid_argument, out_of_range), and 2) 'std::runtime_error' (unpredictable runtime failures like overflow_error, system_error). The 'virtual const char* what() const noexcept' member function returns an explanatory error message describing the failure.",
      example: "#include <stdexcept>\ntry {\n    vector<int> v(2);\n    v.at(10); // Throws std::out_of_range\n} catch (const std::exception& e) {\n    cout << e.what(); // Prints description\n}",
      commonMistakes: "Catching exceptions by value ('catch(std::exception e)') which causes object slicing, instead of const reference."
    },
    {
      id: "exc_5",
      topic: "Exception Handling",
      difficulty: 2,
      question: "What is Exception Propagation in C++, and what happens when an exception remains unhandled?",
      keywords: [
        { term: "call stack", synonyms: ["up the stack", "caller function", "unwinding stack", "propagating upward"], weight: 2.5, isCore: true },
        { term: "std::terminate", synonyms: ["program aborts", "crashes", "std::abort", "terminates execution"], weight: 2.5, isCore: true },
        { term: "unhandled exception", synonyms: ["no matching catch", "bubbles up"], weight: 1.5, isCore: false }
      ],
      hint: "When a function throws without a matching catch, the exception moves up through callers until caught or std::terminate() is called.",
      explanation: "If an exception is thrown within a function and no matching catch block is found locally, the exception propagates backward up the function call stack to the calling function. This continues until an enclosing try-catch handles it. If the exception reaches main() without being caught, 'std::terminate()' is called, aborting the application.",
      example: "void funcB() { throw runtime_error(\"Fail\"); }\nvoid funcA() { funcB(); } // Propagates through funcA to main\nint main() { try { funcA(); } catch (...) { cout << \"Caught\"; } }",
      commonMistakes: "Assuming functions must declare checked exceptions like Java's 'throws' clause."
    },
    {
      id: "exc_6",
      topic: "Exception Handling",
      difficulty: 2,
      question: "Explain how Nested Try Blocks operate in C++ and how an exception can be re-thrown to an outer handler.",
      keywords: [
        { term: "nested try", synonyms: ["try inside try", "inner try block", "outer try"], weight: 2.0, isCore: true },
        { term: "re-throwing", synonyms: ["throw;", "bare throw", "rethrow exception", "forward to outer"], weight: 2.5, isCore: true },
        { term: "outer catch", synonyms: ["propagates to enclosing catch", "outer handler"], weight: 1.5, isCore: false }
      ],
      hint: "An inner catch can log the error and use a bare 'throw;' statement without arguments to pass the same exception to the outer block.",
      explanation: "A try block can be nested inside another try block. If the inner catch handles the exception, execution resumes after the inner block. If the inner block cannot fully resolve the failure, it can re-throw the exact same active exception using 'throw;' (with no operand), which transfers control directly to an outer enclosing catch block.",
      example: "try {\n    try {\n        throw runtime_error(\"DB error\");\n    } catch (const exception& e) {\n        logError(e.what());\n        throw; // Re-throw to outer catch\n    }\n} catch (const exception& e) {\n    showUserAlert();\n}",
      commonMistakes: "Writing 'throw e;' instead of 'throw;' when rethrowing, which can cause object slicing."
    },
    {
      id: "exc_7",
      topic: "Exception Handling",
      difficulty: 3,
      question: "What is Stack Unwinding in C++? How does RAII (Resource Acquisition Is Initialization) prevent resource leaks during exceptions?",
      keywords: [
        { term: "stack unwinding", synonyms: ["popping stack frames", "automatic destruction", "local objects destructed"], weight: 2.5, isCore: true },
        { term: "destructor execution", synonyms: ["automatic cleanup", "calls destructors in reverse"], weight: 2.0, isCore: true },
        { term: "RAII", synonyms: ["resource acquisition is initialization", "smart pointers", "lock_guard", "wrapper class"], weight: 2.5, isCore: true }
      ],
      hint: "When an exception is thrown, all automatic stack variables created since entering the try block have their destructors called automatically.",
      explanation: "Stack unwinding is the runtime process where all local stack-allocated objects between the throw point and the catch block are destroyed in reverse order of construction. RAII binds heap resources, file handles, or mutexes to local stack object lifecycles; because stack unwinding guarantees destructor execution, RAII wrappers (like std::unique_ptr or fstream) guarantee cleanup even during exceptions.",
      example: "void test() {\n    std::unique_ptr<int[]> data(new int[100]); // RAII\n    throw std::runtime_error(\"Error!\"); // Memory freed automatically during stack unwinding!\n}",
      commonMistakes: "Using raw pointers with 'delete' at the end of the function, which gets skipped if an exception is thrown before delete."
    },
    {
      id: "exc_8",
      topic: "Exception Handling",
      difficulty: 3,
      question: "How do you define a Custom Exception Class in C++? Why should it inherit from std::exception and specify 'noexcept' on what()?",
      keywords: [
        { term: "inherit std::exception", synonyms: ["public std::exception", "derives from exception", "subclass exception"], weight: 2.5, isCore: true },
        { term: "override what()", synonyms: ["const char* what()", "virtual const char*", "error message"], weight: 2.5, isCore: true },
        { term: "noexcept", synonyms: ["throw()", "cannot throw", "exception specification"], weight: 1.5, isCore: true }
      ],
      hint: "Derive from std::exception, store a string message, and override 'const char* what() const noexcept'.",
      explanation: "A custom exception class should inherit publicly from 'std::exception' (or 'std::runtime_error') so it integrates seamlessly with existing catch handlers. The 'what()' member function must be overridden with 'const char* what() const noexcept' to match the base class signature; the 'noexcept' specification is mandatory because an exception handler's error reporting must never throw an exception itself.",
      example: "class InvalidScoreException : public std::exception {\n    std::string msg;\npublic:\n    InvalidScoreException(std::string m) : msg(m) {}\n    const char* what() const noexcept override {\n        return msg.c_str();\n    }\n};",
      commonMistakes: "Forgetting 'noexcept' or 'const override' on what(), leading to compilation errors."
    },

    // -------------------------------------------------------------------------
    // 5. TEMPLATES (8 Questions - KEY VIVA TOPIC)
    // -------------------------------------------------------------------------
    {
      id: "tmpl_1",
      topic: "Templates",
      difficulty: 1,
      question: "What is Generic Programming, and how do Function Templates work in C++?",
      keywords: [
        { term: "generic programming", synonyms: ["type-independent", "write once use with any type", "algorithm independent of type"], weight: 2.5, isCore: true },
        { term: "template <typename T>", synonyms: ["template <class T>", "type placeholder", "parameterized type"], weight: 2.0, isCore: true },
        { term: "template instantiation", synonyms: ["compiler generates code", "code generation", "at compile time"], weight: 2.0, isCore: true }
      ],
      hint: "Templates let you write type-independent algorithms; the compiler generates concrete functions for each type used.",
      explanation: "Generic programming writes code independent of specific data types. A function template acts as a blueprint where types are parameterized using 'template <typename T>'. At compile time, when the function is invoked with specific arguments (e.g. int or double), the compiler performs 'template instantiation', generating a type-safe function definition.",
      example: "template <typename T>\nT getMax(T a, T b) {\n    return (a > b) ? a : b;\n}\n// getMax(10, 20);      // instantiates getMax<int>\n// getMax(3.5, 1.2);    // instantiates getMax<double>",
      commonMistakes: "Believing templates exist at runtime; all code generation occurs strictly at compile time."
    },
    {
      id: "tmpl_2",
      topic: "Templates",
      difficulty: 1,
      question: "What is a Class Template in C++? Give an example of designing a generic container.",
      keywords: [
        { term: "class template", synonyms: ["generic class", "template <typename T> class", "parameterized class"], weight: 2.5, isCore: true },
        { term: "explicit type specification", synonyms: ["ClassName<int>", "type argument in angle brackets", "instantiation"], weight: 2.5, isCore: true },
        { term: "code reusability", synonyms: ["supports any data type", "generic container"], weight: 1.5, isCore: false }
      ],
      hint: "Class templates define generic classes, like a Box<T> or Stack<T>, instantiated with Box<int> or Box<string>.",
      explanation: "A Class Template allows defining a generic class pattern where internal member variables, return types, or parameter types are generalized using template parameters. Unlike function templates which often deduce types, class templates typically require explicit type arguments in angle brackets upon instantiation.",
      example: "template <typename T>\nclass Box {\n    T content;\npublic:\n    Box(T val) : content(val) {}\n    T get() const { return content; }\n};\nBox<int> intBox(100);\nBox<std::string> strBox(\"AI Chatbot\");",
      commonMistakes: "Omitting the type parameter '<int>' when creating an object of a class template."
    },
    {
      id: "tmpl_3",
      topic: "Templates",
      difficulty: 2,
      question: "What are Non-Type Template Parameters in C++? Provide a practical use case.",
      keywords: [
        { term: "non-type parameter", synonyms: ["constant expression", "value instead of type", "compile-time constant", "integer parameter"], weight: 2.5, isCore: true },
        { term: "fixed size array", synonyms: ["std::array", "size known at compile time", "buffer size", "compile-time allocation"], weight: 2.5, isCore: true }
      ],
      hint: "Instead of passing a data type like int, you pass a compile-time value such as 'template <typename T, int SIZE>'.",
      explanation: "A non-type template parameter is a value passed to a template rather than a type. Valid non-type parameters include integer constants, pointers, or enums known at compile time. A classic example is 'std::array<T, N>', where 'N' dictates a fixed-size stack buffer allocated entirely at compile time.",
      example: "template <typename T, int SIZE>\nclass StaticBuffer {\n    T data[SIZE];\npublic:\n    int capacity() const { return SIZE; }\n};\nStaticBuffer<float, 64> myBuffer;",
      commonMistakes: "Attempting to pass a runtime variable (like an input from cin) as a non-type template parameter."
    },
    {
      id: "tmpl_4",
      topic: "Templates",
      difficulty: 2,
      question: "How do Multiple Template Parameters work in C++? Give an example like a Pair or Key-Value dictionary.",
      keywords: [
        { term: "multiple parameters", synonyms: ["template <typename T1, typename T2>", "two type parameters", "different types"], weight: 2.5, isCore: true },
        { term: "key-value", synonyms: ["std::pair", "first and second", "map element", "pair of types"], weight: 2.5, isCore: true }
      ],
      hint: "Declare 'template <typename T1, typename T2>' to bundle two potentially different types into one structure.",
      explanation: "C++ templates can accept multiple template parameters separated by commas ('template <typename K, typename V>'). This allows containers or algorithms to coordinate multiple differing types simultaneously, such as associative key-value structures like std::pair or std::map.",
      example: "template <typename K, typename V>\nstruct KeyValue {\n    K key;\n    V value;\n    KeyValue(K k, V v) : key(k), value(v) {}\n};\nKeyValue<std::string, int> ageRecord(\"Vaishnavi\", 20);",
      commonMistakes: "Passing incompatible or fewer arguments than the template parameter list requires without default template arguments."
    },
    {
      id: "tmpl_5",
      topic: "Templates",
      difficulty: 3,
      question: "What is Template Specialization (Explicit/Full Specialization) in C++, and when is it needed?",
      keywords: [
        { term: "template specialization", synonyms: ["template <>", "explicit specialization", "full specialization", "custom behavior for specific type"], weight: 2.5, isCore: true },
        { term: "special type handling", synonyms: ["for char*", "for bool", "pointer comparison", "std::vector<bool>"], weight: 2.5, isCore: true }
      ],
      hint: "Use 'template <>' syntax to provide a custom implementation when the generic template logic fails for a specific type like char*.",
      explanation: "Template Specialization provides a custom, dedicated implementation of a template for a specific data type when generic logic is unsuitable. For instance, comparing generic types using 'a == b' compares pointer addresses when passed 'char*'; specializing the template for 'char*' allows using 'strcmp()' instead.",
      example: "template <typename T>\nbool isEqual(T a, T b) { return a == b; }\n\n// Full specialization for const char*\ntemplate <>\nbool isEqual<const char*>(const char* a, const char* b) {\n    return strcmp(a, b) == 0;\n}",
      commonMistakes: "Omitting 'template <>' before the specialized function or class definition."
    },
    {
      id: "tmpl_6",
      topic: "Templates",
      difficulty: 2,
      question: "Explain Function Template Overloading in C++. How does the compiler resolve between a template and a non-template function?",
      keywords: [
        { term: "overloading templates", synonyms: ["function template overloading", "template and non-template", "specialized overload"], weight: 2.0, isCore: true },
        { term: "exact match preference", synonyms: ["non-template preferred", "prefers ordinary function", "overload resolution rules"], weight: 2.5, isCore: true }
      ],
      hint: "When both an ordinary function and a template match arguments equally well, the compiler favors the non-template function.",
      explanation: "Function templates can be overloaded with other function templates or with ordinary non-template functions having the same name. During overload resolution, if an ordinary non-template function provides an exact match for the arguments, the compiler prefers the non-template function over instantiating the template.",
      example: "template <typename T>\nvoid display(T val) { cout << \"Template: \" << val << endl; }\n\nvoid display(int val) { cout << \"Non-template int: \" << val << endl; }\n\n// display(42) calls the non-template; display(3.14) calls the template.",
      commonMistakes: "Thinking the compiler will always generate a template instance even when a matching non-template function exists."
    },
    {
      id: "tmpl_7",
      topic: "Templates",
      difficulty: 2,
      question: "What are the major Advantages and Trade-offs (Code Bloat, Compile Time) of using Templates in C++?",
      keywords: [
        { term: "advantages", synonyms: ["type safety", "code reusability", "zero runtime overhead", "generic efficiency"], weight: 2.5, isCore: true },
        { term: "code bloat", synonyms: ["binary size increase", "duplicate machine code", "code size expansion"], weight: 2.5, isCore: true },
        { term: "compile time overhead", synonyms: ["slower compilation", "cryptic compiler errors", "header-only requirement"], weight: 1.5, isCore: false }
      ],
      hint: "Pros: strict type safety and high performance. Cons: code bloat (each type gets new machine code) and longer compile times.",
      explanation: "Advantages: Templates provide absolute type safety, eliminate code duplication, and achieve zero runtime abstraction penalty through inlining. Trade-offs: Because the compiler generates distinct machine code for every unique type instantiated, binaries can suffer from 'code bloat'. Furthermore, compilation times increase, and templates must generally be defined in header files.",
      example: "// Instantiating Stack<int>, Stack<double>, Stack<string> generates 3 separate machine-code copies of the class.",
      commonMistakes: "Believing templates work like Java Generics (type erasure); C++ duplicates machine code for each concrete type."
    },
    {
      id: "tmpl_8",
      topic: "Templates",
      difficulty: 3,
      question: "What is Template Metaprogramming (TMP) in C++? How does it enable Compile-Time Computation?",
      keywords: [
        { term: "template metaprogramming", synonyms: ["TMP", "compile-time execution", "code that writes code"], weight: 2.5, isCore: true },
        { term: "constexpr and recursion", synonyms: ["compile-time evaluation", "recursive template instantiation", "zero runtime cost"], weight: 2.5, isCore: true },
        { term: "zero runtime overhead", synonyms: ["precomputed values", "compile-time constants"], weight: 1.5, isCore: false }
      ],
      hint: "TMP performs computations and algorithmic logic during compilation, generating pre-calculated constants with zero runtime cost.",
      explanation: "Template Metaprogramming (TMP) uses C++ templates as a Turing-complete compile-time sub-language. By combining recursive template instantiations or constexpr functions, complex logic (like computing factorials, matrix dimensions, or type traits) is computed entirely by the compiler, embedding hard-coded constants in the executable with zero runtime cost.",
      example: "template <int N>\nstruct Factorial {\n    static constexpr int value = N * Factorial<N - 1>::value;\n};\ntemplate <>\nstruct Factorial<0> {\n    static constexpr int value = 1;\n};\n// Factorial<5>::value is evaluated as 120 at compile time!",
      commonMistakes: "Confusing runtime recursion with compile-time recursive template instantiation."
    },

    // -------------------------------------------------------------------------
    // 6. STANDARD TEMPLATE LIBRARY (STL) (6 Questions)
    // -------------------------------------------------------------------------
    {
      id: "stl_1",
      topic: "Standard Template Library",
      difficulty: 1,
      question: "What is the Standard Template Library (STL) in C++? Name its four primary components.",
      keywords: [
        { term: "containers", synonyms: ["data structures", "vector", "list", "map"], weight: 2.0, isCore: true },
        { term: "algorithms", synonyms: ["sorting", "searching", "std::sort", "std::find"], weight: 2.0, isCore: true },
        { term: "iterators", synonyms: ["pointers to elements", "iterator objects", "bridge between containers and algorithms"], weight: 2.0, isCore: true },
        { term: "functors", synonyms: ["function objects", "lambdas", "predicates"], weight: 1.0, isCore: false }
      ],
      hint: "The 4 core pillars: Containers (store data), Iterators (traverse data), Algorithms (process data), and Functors (callables).",
      explanation: "The STL is a powerful collection of generic C++ class and function templates. Its 4 core components are: 1) Containers (data structures like vector, list, map), 2) Algorithms (procedures like sort, search, transform), 3) Iterators (pointer-like objects acting as the bridge between containers and algorithms), and 4) Functors/Function Objects (objects that act like functions).",
      example: "#include <vector>\n#include <algorithm>\nstd::vector<int> v = {4, 1, 3};\nstd::sort(v.begin(), v.end()); // Algorithm + Iterators + Container",
      commonMistakes: "Believing STL algorithms are member functions of containers rather than standalone generic template functions."
    },
    {
      id: "stl_2",
      topic: "Standard Template Library",
      difficulty: 2,
      question: "Compare std::vector and std::list in C++. When would you choose one over the other?",
      keywords: [
        { term: "vector", synonyms: ["dynamic array", "contiguous memory", "O(1) random access", "cache friendly"], weight: 2.5, isCore: true },
        { term: "list", synonyms: ["doubly linked list", "non-contiguous", "O(1) insertion deletion anywhere", "pointer overhead"], weight: 2.5, isCore: true },
        { term: "cache performance", synonyms: ["spatial locality", "cache hits vs misses"], weight: 1.5, isCore: false }
      ],
      hint: "std::vector is a contiguous dynamic array with O(1) random access. std::list is a doubly linked list with fast middle insertions.",
      explanation: "std::vector stores elements in contiguous memory, offering O(1) random access by index and superior CPU cache locality; however, inserting into the middle requires O(N) shifting. std::list is a doubly-linked list with non-contiguous nodes; it offers O(1) insertion/deletion anywhere once an iterator is known, but lacks random access (O(N) traversal) and incurs extra pointer memory overhead.",
      example: "std::vector<int> v; // Best for indexing & traversal\nstd::list<int> l;   // Best for frequent insertions/removals in the middle",
      commonMistakes: "Using std::list for simple traversals, forgetting that CPU cache locality makes vector faster in almost all scenarios."
    },
    {
      id: "stl_3",
      topic: "Standard Template Library",
      difficulty: 2,
      question: "What is the difference between std::map and std::unordered_map in C++ in terms of internal implementation and time complexity?",
      keywords: [
        { term: "std::map", synonyms: ["Red-Black Tree", "self-balancing BST", "ordered", "O(log n)"], weight: 2.5, isCore: true },
        { term: "std::unordered_map", synonyms: ["hash table", "buckets", "unordered", "O(1) average"], weight: 2.5, isCore: true },
        { term: "ordering and complexity", synonyms: ["sorted keys vs unsorted keys", "hash collision"], weight: 1.5, isCore: false }
      ],
      hint: "std::map uses a Red-Black Tree (keys sorted, O(log N)). std::unordered_map uses a Hash Table (unsorted, O(1) average).",
      explanation: "std::map is implemented as a self-balancing binary search tree (typically a Red-Black Tree); keys are maintained in sorted order with guaranteed O(log N) search, insertion, and deletion complexity. std::unordered_map is implemented using a hash table; keys are unordered, offering O(1) average time complexity, with worst-case O(N) during severe hash collisions.",
      example: "#include <map>\n#include <unordered_map>\nstd::map<int, string> sortedMap;          // O(log N), keys ordered\nstd::unordered_map<int, string> fastMap;  // O(1) avg, unordered",
      commonMistakes: "Assuming std::unordered_map is always strictly faster, ignoring worst-case hash collisions and hash function overhead."
    },
    {
      id: "stl_4",
      topic: "Standard Template Library",
      difficulty: 2,
      question: "What are Iterators in C++? Name the five standard iterator categories from weakest to strongest.",
      keywords: [
        { term: "iterator categories", synonyms: ["Input", "Output", "Forward", "Bidirectional", "Random Access"], weight: 2.5, isCore: true },
        { term: "pointer generalized", synonyms: ["pointer-like object", "traversal abstraction", "dereference operator *"], weight: 2.0, isCore: true }
      ],
      hint: "Input/Output -> Forward -> Bidirectional (list) -> Random Access (vector/array).",
      explanation: "Iterators are generalized pointer-like abstractions that provide a uniform interface for traversing container elements. The 5 standard categories are: 1) Input (read-only, single-pass), 2) Output (write-only, single-pass), 3) Forward (read/write, multi-pass forward), 4) Bidirectional (forward and backward, e.g. std::list), and 5) Random Access (constant-time arithmetic jumps like it + 5, e.g. std::vector).",
      example: "std::vector<int>::iterator it = v.begin();\nwhile (it != v.end()) { cout << *it << \" \"; ++it; }",
      commonMistakes: "Attempting random-access iterator arithmetic (it += 3) on a std::list iterator."
    },
    {
      id: "stl_5",
      topic: "Standard Template Library",
      difficulty: 2,
      question: "How do STL Algorithms work with Iterators? Demonstrate std::sort, std::find, and custom lambda predicates.",
      keywords: [
        { term: "std::sort and std::find", synonyms: ["algorithm header", "std::sort", "std::find"], weight: 2.5, isCore: true },
        { term: "begin and end iterators", synonyms: ["v.begin() and v.end()", "iterator range", "half-open interval [first, last)"], weight: 2.0, isCore: true },
        { term: "lambda predicate", synonyms: ["custom comparator", "comparator function", "[](int a, int b)"], weight: 1.5, isCore: false }
      ],
      hint: "Algorithms operate on half-open iterator ranges [begin, end) and accept optional callable lambdas or functors.",
      explanation: "STL algorithms in <algorithm> operate on half-open iterator ranges [first, last). They are completely decoupled from containers, allowing the same algorithm (e.g. std::find) to run on arrays, vectors, or deques. Algorithms can be customized with lambdas or comparator functions to control sorting orders or search conditions.",
      example: "#include <algorithm>\nstd::sort(v.begin(), v.end(), [](int a, int b) { return a > b; }); // Descending\nauto it = std::find(v.begin(), v.end(), 42);",
      commonMistakes: "Passing the container itself 'std::sort(v)' instead of its iterator range 'std::sort(v.begin(), v.end())'."
    },
    {
      id: "stl_6",
      topic: "Standard Template Library",
      difficulty: 2,
      question: "What are Container Adaptors (std::stack, std::queue, std::priority_queue) in C++? What are their default underlying containers?",
      keywords: [
        { term: "container adaptor", synonyms: ["wraps existing container", "restricted interface", "LIFO and FIFO"], weight: 2.5, isCore: true },
        { term: "stack and queue defaults", synonyms: ["std::deque default", "deque is default container"], weight: 2.5, isCore: true },
        { term: "priority_queue default", synonyms: ["std::vector default", "heap based", "max heap"], weight: 2.0, isCore: true }
      ],
      hint: "Container adaptors don't implement their own storage; they wrap underlying sequence containers (default is std::deque for stack/queue, std::vector for priority_queue).",
      explanation: "Container adaptors provide specialized, restricted interfaces (like LIFO or FIFO) by wrapping underlying sequential containers rather than implementing storage from scratch. 'std::stack' and 'std::queue' use 'std::deque' by default, while 'std::priority_queue' (which implements a max-heap) wraps 'std::vector' by default.",
      example: "std::stack<int> s; // Uses std::deque<int> internally\nstd::priority_queue<int> pq; // Max heap using std::vector<int>",
      commonMistakes: "Assuming std::stack is an independent fundamental container rather than an adaptor."
    }
  ];

  /* ==========================================================================
     PHASE 4: TRANSPARENT RULE-BASED EVALUATION ENGINE
     - Normalization & tokenization
     - Synonym expansion
     - Weighted concept matching
     - Partial marking out of 5 marks
     - Feedback classification
     ========================================================================== */

  class EvaluationEngine {
    /**
     * Clean and normalize text for robust rule-based matching.
     */
    static normalize(text) {
      if (!text || typeof text !== 'string') return '';
      return text
        .toLowerCase()
        .replace(/[\r\n\t]+/g, ' ')
        .replace(/[^\w\s\+\-\*\/=<>]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
    }

    /**
     * Evaluate candidate answer against question rubric.
     */
    static evaluate(studentAnswer, questionObj) {
      const normalizedAnswer = this.normalize(studentAnswer);
      const detectedConcepts = [];
      const missingConcepts = [];

      let earnedWeight = 0;
      let totalPossibleWeight = 0;
      let coreConceptsMatched = 0;
      let totalCoreConcepts = 0;

      questionObj.keywords.forEach(kw => {
        totalPossibleWeight += kw.weight;
        if (kw.isCore) totalCoreConcepts++;

        // Build list of terms to check (primary term + all synonyms)
        const candidates = [kw.term, ...(kw.synonyms || [])];
        let isMatched = false;

        for (const candidate of candidates) {
          const normCandidate = candidate.toLowerCase();
          // Use boundary matching or simple substring
          if (normalizedAnswer.includes(normCandidate)) {
            isMatched = true;
            break;
          }
        }

        if (isMatched) {
          earnedWeight += kw.weight;
          if (kw.isCore) coreConceptsMatched++;
          detectedConcepts.push(kw.term);
        } else {
          missingConcepts.push(kw.term);
        }
      });

      // Compute weighted percentage
      const matchRatio = totalPossibleWeight > 0 ? (earnedWeight / totalPossibleWeight) : 0;

      // Score calculation out of 5 marks
      let score = 0;
      let category = "Needs Improvement";

      if (matchRatio >= 0.85 && coreConceptsMatched === totalCoreConcepts) {
        score = 5;
        category = "Excellent";
      } else if (matchRatio >= 0.65 && coreConceptsMatched >= Math.ceil(totalCoreConcepts * 0.65)) {
        score = 4;
        category = "Very Good";
      } else if (matchRatio >= 0.45 && coreConceptsMatched >= 1) {
        score = 3;
        category = "Good Understanding";
      } else if (matchRatio >= 0.25 || detectedConcepts.length >= 1) {
        score = 2;
        category = "Basic Understanding";
      } else if (normalizedAnswer.length > 10) {
        score = 1;
        category = "Needs Improvement";
      } else {
        score = 0;
        category = "Needs Improvement";
      }

      // Safeguard: Never award full marks (5) if any core concept is missing
      if (score === 5 && coreConceptsMatched < totalCoreConcepts) {
        score = 4;
        category = "Very Good";
      }

      return {
        score,
        maxScore: 5,
        category,
        detectedConcepts,
        missingConcepts,
        explanation: questionObj.explanation,
        example: questionObj.example,
        commonMistakes: questionObj.commonMistakes
      };
    }
  }

  /* ==========================================================================
     LOCAL STORAGE & USER STATE MANAGEMENT
     ========================================================================== */

  const STORAGE_KEYS = {
    USERS: 'ai_chatbot_users',
    CURRENT_USER: 'ai_chatbot_current_user',
    HISTORY_PREFIX: 'ai_chatbot_history_'
  };

  class StorageManager {
    static getUsers() {
      try {
        const raw = localStorage.getItem(STORAGE_KEYS.USERS);
        return raw ? JSON.parse(raw) : {};
      } catch (e) {
        console.error("Storage error getting users:", e);
        return {};
      }
    }

    static saveUsers(users) {
      try {
        localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
      } catch (e) {
        console.error("Storage error saving users:", e);
      }
    }

    static getCurrentUser() {
      try {
        const raw = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
        return raw ? JSON.parse(raw) : null;
      } catch (e) {
        return null;
      }
    }

    static setCurrentUser(user) {
      try {
        if (user) {
          localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
        } else {
          localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
        }
      } catch (e) {
        console.error("Storage error setting user:", e);
      }
    }

    static getHistory(email) {
      if (!email) return [];
      try {
        const key = STORAGE_KEYS.HISTORY_PREFIX + email.toLowerCase().trim();
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : [];
      } catch (e) {
        console.error("Storage error reading history:", e);
        return [];
      }
    }

    static appendHistory(email, sessionData) {
      if (!email) return;
      try {
        const history = this.getHistory(email);
        history.unshift(sessionData); // newest first
        const key = STORAGE_KEYS.HISTORY_PREFIX + email.toLowerCase().trim();
        localStorage.setItem(key, JSON.stringify(history));
      } catch (e) {
        console.error("Storage error appending history:", e);
      }
    }

    static clearHistory(email) {
      if (!email) return;
      try {
        const key = STORAGE_KEYS.HISTORY_PREFIX + email.toLowerCase().trim();
        localStorage.removeItem(key);
      } catch (e) {
        console.error("Storage error clearing history:", e);
      }
    }

    static seedDefaultUser() {
      const users = this.getUsers();
      const defaultEmail = 'vaishnavi@example.com';
      if (!users[defaultEmail]) {
        users[defaultEmail] = {
          name: 'Vaishnavi Sharma',
          email: defaultEmail,
          password: 'password123',
          createdAt: new Date().toISOString()
        };
        this.saveUsers(users);
      }
    }
  }

  // Seed default credentials on boot
  StorageManager.seedDefaultUser();

  /* ==========================================================================
     PHASE 5 & 7: ACTIVE INTERVIEW CONTROLLER & TIMER
     ========================================================================== */

  class InterviewSession {
    constructor(topic = "All C++ Topics", user, onCompleteCallback) {
      this.topic = topic;
      this.user = user;
      this.onCompleteCallback = onCompleteCallback;

      this.TOTAL_QUESTIONS = 5;
      this.currentQuestionIndex = 0;
      this.currentDifficulty = 1; // 1: Foundation, 2: Intermediate, 3: Advanced
      this.askedQuestionIds = new Set();
      this.sessionQuestions = [];
      this.sessionResults = [];

      // Timer
      this.startTime = null;
      this.timerInterval = null;
      this.elapsedSeconds = 0;
    }

    startTimer(timerElement) {
      this.startTime = Date.now();
      this.timerInterval = setInterval(() => {
        this.elapsedSeconds++;
        const mins = String(Math.floor(this.elapsedSeconds / 60)).padStart(2, '0');
        const secs = String(this.elapsedSeconds % 60).padStart(2, '0');
        if (timerElement) {
          timerElement.textContent = `${mins}:${secs}`;
        }
      }, 1000);
    }

    stopTimer() {
      if (this.timerInterval) {
        clearInterval(this.timerInterval);
        this.timerInterval = null;
      }
    }

    getFormattedDuration() {
      const mins = String(Math.floor(this.elapsedSeconds / 60)).padStart(2, '0');
      const secs = String(this.elapsedSeconds % 60).padStart(2, '0');
      return `${mins}:${secs}`;
    }

    /**
     * Adaptively select the next question based on current difficulty and topic.
     */
    getNextQuestion() {
      if (this.currentQuestionIndex >= this.TOTAL_QUESTIONS) {
        return null;
      }

      // Filter questions by topic
      let candidatePool = QUESTION_BANK.filter(q => {
        if (this.askedQuestionIds.has(q.id)) return false;
        if (this.topic === "All C++ Topics") return true;
        return q.topic.toLowerCase() === this.topic.toLowerCase();
      });

      if (candidatePool.length === 0) {
        // Fallback: search across all topics if current topic pool exhausted
        candidatePool = QUESTION_BANK.filter(q => !this.askedQuestionIds.has(q.id));
      }

      // Filter by current adaptive difficulty
      let difficultyPool = candidatePool.filter(q => q.difficulty === this.currentDifficulty);

      // If no questions in target difficulty, take closest available
      if (difficultyPool.length === 0) {
        difficultyPool = candidatePool;
      }

      // Random pick from matching pool
      const selectedQuestion = difficultyPool[Math.floor(Math.random() * difficultyPool.length)];
      if (selectedQuestion) {
        this.askedQuestionIds.add(selectedQuestion.id);
        this.sessionQuestions.push(selectedQuestion);
      }
      return selectedQuestion;
    }

    recordAnswer(studentAnswer, evaluation) {
      const q = this.sessionQuestions[this.currentQuestionIndex];
      this.sessionResults.push({
        questionId: q.id,
        topic: q.topic,
        difficulty: q.difficulty,
        questionText: q.question,
        studentAnswer,
        score: evaluation.score,
        maxScore: evaluation.maxScore,
        category: evaluation.category,
        detectedConcepts: evaluation.detectedConcepts,
        missingConcepts: evaluation.missingConcepts,
        explanation: evaluation.explanation,
        example: evaluation.example
      });

      // Adaptive Difficulty Adjustment for next question
      if (evaluation.score >= 4) {
        // Promote difficulty if possible
        if (this.currentDifficulty < 3) this.currentDifficulty++;
      } else if (evaluation.score <= 2) {
        // Demote difficulty if possible
        if (this.currentDifficulty > 1) this.currentDifficulty--;
      }

      this.currentQuestionIndex++;
    }

    finalize() {
      this.stopTimer();

      let totalScore = 0;
      let maxTotalScore = this.TOTAL_QUESTIONS * 5;
      let correctAnswers = 0;
      let partialAnswers = 0;
      let needsWorkAnswers = 0;

      this.sessionResults.forEach(r => {
        totalScore += r.score;
        if (r.score >= 4) correctAnswers++;
        else if (r.score >= 2) partialAnswers++;
        else needsWorkAnswers++;
      });

      const percentage = Math.round((totalScore / maxTotalScore) * 100);

      let performanceCategory = "Outstanding";
      if (percentage >= 90) performanceCategory = "Outstanding / Expert";
      else if (percentage >= 75) performanceCategory = "Proficient / Interview Ready";
      else if (percentage >= 50) performanceCategory = "Intermediate / Needs Polish";
      else performanceCategory = "Foundational / Review Required";

      const sessionRecord = {
        id: 'sess_' + Date.now(),
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        timestamp: Date.now(),
        topic: this.topic,
        score: totalScore,
        maxScore: maxTotalScore,
        percentage,
        performanceCategory,
        durationSeconds: this.elapsedSeconds,
        durationFormatted: this.getFormattedDuration(),
        breakdown: {
          correct: correctAnswers,
          partial: partialAnswers,
          needsWork: needsWorkAnswers
        },
        questionCount: this.sessionResults.length,
        results: this.sessionResults
      };

      // Persist to user's history
      if (this.user && this.user.email) {
        StorageManager.appendHistory(this.user.email, sessionRecord);
      }

      return sessionRecord;
    }
  }

  /* ==========================================================================
     TOP-LEVEL APPLICATION COORDINATOR
     ========================================================================== */

  class AIChatbotApp {
    constructor() {
      this.currentUser = StorageManager.getCurrentUser();
      this.activeInterview = null;
      this.currentActiveQuestion = null;
      this.isWaitingEvaluation = false;

      this.cacheDOMElements();
      this.bindEvents();
      this.init();
    }

    cacheDOMElements() {
      // Header
      this.headerNav = document.getElementById('headerNav');
      this.headerUserActions = document.getElementById('headerUserActions');
      this.userDisplayName = document.getElementById('userDisplayName');
      this.userAvatarChar = document.getElementById('userAvatarChar');
      this.logoutBtn = document.getElementById('logoutBtn');
      this.navBrandBtn = document.getElementById('navBrandBtn');
      this.navDashboardBtn = document.getElementById('navDashboardBtn');
      this.navTopicsBtn = document.getElementById('navTopicsBtn');
      this.navHistoryBtn = document.getElementById('navHistoryBtn');

      // Screens
      this.authScreen = document.getElementById('authScreen');
      this.dashboardScreen = document.getElementById('dashboardScreen');
      this.interviewScreen = document.getElementById('interviewScreen');
      this.resultsScreen = document.getElementById('resultsScreen');

      // Auth elements
      this.tabLoginBtn = document.getElementById('tabLoginBtn');
      this.tabRegisterBtn = document.getElementById('tabRegisterBtn');
      this.loginForm = document.getElementById('loginForm');
      this.registerForm = document.getElementById('registerForm');
      this.loginEmail = document.getElementById('loginEmail');
      this.loginPassword = document.getElementById('loginPassword');
      this.regName = document.getElementById('regName');
      this.regEmail = document.getElementById('regEmail');
      this.regPassword = document.getElementById('regPassword');
      this.authAlert = document.getElementById('authAlert');

      // Dashboard
      this.dashboardGreeting = document.getElementById('dashboardGreeting');
      this.startInterviewCtaBtn = document.getElementById('startInterviewCtaBtn');
      this.exploreTopicsCtaBtn = document.getElementById('exploreTopicsCtaBtn');
      this.statTotalInterviews = document.getElementById('statTotalInterviews');
      this.statQuestionsAnswered = document.getElementById('statQuestionsAnswered');
      this.statAverageScore = document.getElementById('statAverageScore');
      this.statOverallAccuracy = document.getElementById('statOverallAccuracy');
      this.topicsGrid = document.getElementById('topicsGrid');
      this.historyTableContainer = document.getElementById('historyTableContainer');
      this.clearHistoryBtn = document.getElementById('clearHistoryBtn');

      // Interview HUD & Chat
      this.hudTopicTag = document.getElementById('hudTopicTag');
      this.hudDifficultyTag = document.getElementById('hudDifficultyTag');
      this.hudQuestionProgressText = document.getElementById('hudQuestionProgressText');
      this.hudProgressFill = document.getElementById('hudProgressFill');
      this.interviewTimerText = document.getElementById('interviewTimerText');
      this.exitInterviewBtn = document.getElementById('exitInterviewBtn');
      this.chatViewport = document.getElementById('chatViewport');
      this.chatStream = document.getElementById('chatStream');

      // Input Controls
      this.userAnswerInput = document.getElementById('userAnswerInput');
      this.submitAnswerBtn = document.getElementById('submitAnswerBtn');
      this.requestHintBtn = document.getElementById('requestHintBtn');
      this.hintDrawer = document.getElementById('hintDrawer');
      this.hintContentText = document.getElementById('hintContentText');
      this.answerCharCount = document.getElementById('answerCharCount');
      this.evaluatingIndicator = document.getElementById('evaluatingIndicator');

      // Results
      this.resultsCategoryBadge = document.getElementById('resultsCategoryBadge');
      this.resultsFinalScore = document.getElementById('resultsFinalScore');
      this.resultsPercentageTag = document.getElementById('resultsPercentageTag');
      this.resultsDurationText = document.getElementById('resultsDurationText');
      this.resultsAnsweredCount = document.getElementById('resultsAnsweredCount');
      this.resultsCorrectCount = document.getElementById('resultsCorrectCount');
      this.resultsPartialCount = document.getElementById('resultsPartialCount');
      this.resultsImproveCount = document.getElementById('resultsImproveCount');
      this.reviewQuestionsList = document.getElementById('reviewQuestionsList');
      this.recommendationsContainer = document.getElementById('recommendationsContainer');
      this.retryInterviewBtn = document.getElementById('retryInterviewBtn');
      this.returnDashboardBtn = document.getElementById('returnDashboardBtn');

      // Modals & Toast
      this.exitConfirmModal = document.getElementById('exitConfirmModal');
      this.cancelExitModalBtn = document.getElementById('cancelExitModalBtn');
      this.confirmExitModalBtn = document.getElementById('confirmExitModalBtn');
      this.toastContainer = document.getElementById('toastContainer');
    }

    init() {
      if (this.currentUser) {
        this.renderAuthenticatedState();
      } else {
        this.renderUnauthenticatedState();
      }
    }

    /* ==========================================================================
       SCREEN NAVIGATION
       ========================================================================== */

    showScreen(screenId) {
      const screens = [this.authScreen, this.dashboardScreen, this.interviewScreen, this.resultsScreen];
      screens.forEach(s => {
        if (s) {
          s.style.display = (s.id === screenId) ? 'block' : 'none';
          if (s.id === screenId) s.classList.add('active');
          else s.classList.remove('active');
        }
      });
      window.scrollTo(0, 0);
    }

    showToast(message, duration = 3000) {
      if (!this.toastContainer) return;
      const toast = document.createElement('div');
      toast.className = 'toast';
      toast.innerHTML = `<span>💬</span><span>${message}</span>`;
      this.toastContainer.appendChild(toast);
      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(8px)';
        setTimeout(() => toast.remove(), 300);
      }, duration);
    }

    /* ==========================================================================
       EVENT BINDINGS
       ========================================================================== */

    bindEvents() {
      // Auth Tabs Switch
      this.tabLoginBtn?.addEventListener('click', () => this.switchAuthTab('login'));
      this.tabRegisterBtn?.addEventListener('click', () => this.switchAuthTab('register'));

      // Auth Submissions
      this.loginForm?.addEventListener('submit', (e) => this.handleLogin(e));
      this.registerForm?.addEventListener('submit', (e) => this.handleRegister(e));
      this.logoutBtn?.addEventListener('click', () => this.handleLogout());

      // Password visibility toggles
      document.querySelectorAll('.btn-toggle-pwd').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const targetId = btn.getAttribute('data-target');
          const input = document.getElementById(targetId);
          if (input) {
            input.type = input.type === 'password' ? 'text' : 'password';
          }
        });
      });

      // Navigation links
      this.navBrandBtn?.addEventListener('click', () => {
        if (this.currentUser) this.showDashboard();
      });
      this.navDashboardBtn?.addEventListener('click', () => this.showDashboard());
      this.navTopicsBtn?.addEventListener('click', () => {
        this.showDashboard();
        const el = document.getElementById('topicsSection');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      });
      this.navHistoryBtn?.addEventListener('click', () => {
        this.showDashboard();
        const el = document.getElementById('historySection');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      });

      // Dashboard CTA
      this.startInterviewCtaBtn?.addEventListener('click', () => this.startInterview("All C++ Topics"));
      this.exploreTopicsCtaBtn?.addEventListener('click', () => {
        const el = document.getElementById('topicsSection');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      });
      this.clearHistoryBtn?.addEventListener('click', () => this.handleClearHistory());

      // Interview Actions
      this.submitAnswerBtn?.addEventListener('click', () => this.handleSubmitAnswer());
      this.userAnswerInput?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
          e.preventDefault();
          this.handleSubmitAnswer();
        }
      });
      this.userAnswerInput?.addEventListener('input', () => {
        const len = this.userAnswerInput.value.length;
        if (this.answerCharCount) {
          this.answerCharCount.textContent = `${len} character${len === 1 ? '' : 's'}`;
        }
      });

      // Hint Toggle
      this.requestHintBtn?.addEventListener('click', () => {
        if (!this.hintDrawer) return;
        const isHidden = this.hintDrawer.style.display === 'none';
        this.hintDrawer.style.display = isHidden ? 'flex' : 'none';
      });

      // Exit Modal
      this.exitInterviewBtn?.addEventListener('click', () => {
        if (this.exitConfirmModal) this.exitConfirmModal.style.display = 'flex';
      });
      this.cancelExitModalBtn?.addEventListener('click', () => {
        if (this.exitConfirmModal) this.exitConfirmModal.style.display = 'none';
      });
      this.confirmExitModalBtn?.addEventListener('click', () => {
        if (this.exitConfirmModal) this.exitConfirmModal.style.display = 'none';
        if (this.activeInterview) this.activeInterview.stopTimer();
        this.showDashboard();
      });

      // Results Actions
      this.retryInterviewBtn?.addEventListener('click', () => {
        const topic = (this.activeInterview && this.activeInterview.topic) ? this.activeInterview.topic : "All C++ Topics";
        this.startInterview(topic);
      });
      this.returnDashboardBtn?.addEventListener('click', () => this.showDashboard());
    }

    /* ==========================================================================
       AUTHENTICATION LOGIC
       ========================================================================== */

    switchAuthTab(tab) {
      this.hideAuthAlert();
      if (tab === 'login') {
        this.tabLoginBtn?.classList.add('active');
        this.tabLoginBtn?.setAttribute('aria-selected', 'true');
        this.tabRegisterBtn?.classList.remove('active');
        this.tabRegisterBtn?.setAttribute('aria-selected', 'false');
        if (this.loginForm) this.loginForm.style.display = 'flex';
        if (this.registerForm) this.registerForm.style.display = 'none';
      } else {
        this.tabRegisterBtn?.classList.add('active');
        this.tabRegisterBtn?.setAttribute('aria-selected', 'true');
        this.tabLoginBtn?.classList.remove('active');
        this.tabLoginBtn?.setAttribute('aria-selected', 'false');
        if (this.registerForm) this.registerForm.style.display = 'flex';
        if (this.loginForm) this.loginForm.style.display = 'none';
      }
    }

    showAuthAlert(message, type = 'error') {
      if (!this.authAlert) return;
      this.authAlert.className = `form-alert ${type}`;
      this.authAlert.textContent = message;
      this.authAlert.style.display = 'flex';
    }

    hideAuthAlert() {
      if (this.authAlert) {
        this.authAlert.style.display = 'none';
        this.authAlert.textContent = '';
      }
    }

    handleLogin(e) {
      e.preventDefault();
      this.hideAuthAlert();

      const email = this.loginEmail?.value.trim().toLowerCase();
      const password = this.loginPassword?.value;

      if (!email || !password) {
        this.showAuthAlert("Please fill in both email and password.");
        return;
      }

      const users = StorageManager.getUsers();
      const user = users[email];

      if (!user || user.password !== password) {
        this.showAuthAlert("Invalid credentials. Try vaishnavi@example.com / password123, or register a new account.");
        return;
      }

      // Success
      this.currentUser = { name: user.name, email: user.email };
      StorageManager.setCurrentUser(this.currentUser);
      this.showToast(`Welcome back, ${this.currentUser.name}!`);
      this.renderAuthenticatedState();
    }

    handleRegister(e) {
      e.preventDefault();
      this.hideAuthAlert();

      const name = this.regName?.value.trim();
      const email = this.regEmail?.value.trim().toLowerCase();
      const password = this.regPassword?.value;

      if (!name || !email || !password) {
        this.showAuthAlert("All fields are required.");
        return;
      }

      if (password.length < 6) {
        this.showAuthAlert("Password must be at least 6 characters long.");
        return;
      }

      const users = StorageManager.getUsers();
      if (users[email]) {
        this.showAuthAlert("An account with this email already exists. Please sign in.");
        return;
      }

      // Register new user
      users[email] = {
        name,
        email,
        password,
        createdAt: new Date().toISOString()
      };
      StorageManager.saveUsers(users);

      this.currentUser = { name, email };
      StorageManager.setCurrentUser(this.currentUser);
      this.showToast(`Account created successfully! Welcome, ${name}!`);
      this.renderAuthenticatedState();
    }

    handleLogout() {
      StorageManager.setCurrentUser(null);
      this.currentUser = null;
      this.renderUnauthenticatedState();
      this.showToast("Signed out successfully.");
    }

    renderAuthenticatedState() {
      if (this.headerNav) this.headerNav.style.display = 'flex';
      if (this.headerUserActions) this.headerUserActions.style.display = 'flex';
      if (this.userDisplayName) this.userDisplayName.textContent = this.currentUser.name;
      if (this.userAvatarChar) this.userAvatarChar.textContent = this.currentUser.name.charAt(0).toUpperCase();

      this.showDashboard();
    }

    renderUnauthenticatedState() {
      if (this.headerNav) this.headerNav.style.display = 'none';
      if (this.headerUserActions) this.headerUserActions.style.display = 'none';
      this.showScreen('authScreen');
      this.switchAuthTab('login');
      // Fill demo credentials for fast verification
      if (this.loginEmail) this.loginEmail.value = 'vaishnavi@example.com';
      if (this.loginPassword) this.loginPassword.value = 'password123';
    }

    /* ==========================================================================
       DASHBOARD & PERFORMANCE ANALYTICS (PHASE 6)
       ========================================================================== */

    showDashboard() {
      this.showScreen('dashboardScreen');
      if (!this.currentUser) return;

      // Personalized greeting
      const hour = new Date().getHours();
      let timeGreeting = "Welcome back";
      if (hour < 12) timeGreeting = "Good morning";
      else if (hour < 18) timeGreeting = "Good afternoon";
      else timeGreeting = "Good evening";

      if (this.dashboardGreeting) {
        this.dashboardGreeting.textContent = `${timeGreeting}, ${this.currentUser.name}!`;
      }

      this.renderDashboardStats();
      this.renderTopicsGrid();
      this.renderHistoryTable();
    }

    renderDashboardStats() {
      const history = StorageManager.getHistory(this.currentUser.email);
      const totalInterviews = history.length;

      let totalQuestions = 0;
      let totalEarnedScore = 0;
      let totalMaxScore = 0;

      history.forEach(session => {
        totalQuestions += (session.questionCount || session.results?.length || 5);
        totalEarnedScore += (session.score || 0);
        totalMaxScore += (session.maxScore || 25);
      });

      const avgScore = totalQuestions > 0 ? (totalEarnedScore / totalQuestions).toFixed(1) : "0.0";
      const overallAccuracy = totalMaxScore > 0 ? Math.round((totalEarnedScore / totalMaxScore) * 100) : 0;

      if (this.statTotalInterviews) this.statTotalInterviews.textContent = totalInterviews;
      if (this.statQuestionsAnswered) this.statQuestionsAnswered.textContent = totalQuestions;
      if (this.statAverageScore) this.statAverageScore.textContent = `${avgScore} / 5`;
      if (this.statOverallAccuracy) this.statOverallAccuracy.textContent = `${overallAccuracy}%`;
    }

    renderTopicsGrid() {
      if (!this.topicsGrid) return;

      const topicsMeta = [
        {
          title: "All C++ Topics",
          count: 38,
          diff: "Adaptive (1-3)",
          desc: "Full comprehensive viva simulation covering OOP, Inheritance, Polymorphism, Exceptions, Templates, and STL."
        },
        {
          title: "OOP Fundamentals",
          count: 6,
          diff: "Foundation & Intermediate",
          desc: "Classes, objects, encapsulation, abstraction, member initializers, and deep vs shallow copy."
        },
        {
          title: "Inheritance",
          count: 5,
          diff: "Intermediate & Advanced",
          desc: "Single, multiple, and hybrid inheritance; the Diamond Problem; virtual base classes; and order of destruction."
        },
        {
          title: "Polymorphism",
          count: 5,
          diff: "Foundation to Advanced",
          desc: "Function overloading vs overriding, virtual dispatch, VTABLE/VPTR internal mechanics, and pure virtual contracts."
        },
        {
          title: "Exception Handling",
          count: 8,
          diff: "Comprehensive (1-3)",
          desc: "try/throw/catch, multiple handlers, catch-all, stack unwinding, RAII, and custom std::exception derivation."
        },
        {
          title: "Templates",
          count: 8,
          diff: "Comprehensive (1-3)",
          desc: "Function/class templates, non-type parameters, specialization, overloading, and template metaprogramming."
        },
        {
          title: "Standard Template Library",
          count: 6,
          diff: "Intermediate & Advanced",
          desc: "Vectors, lists, maps, hash tables, iterators, STL algorithms, and container adaptors."
        }
      ];

      this.topicsGrid.innerHTML = topicsMeta.map(topic => `
        <div class="topic-card">
          <div class="topic-card-top">
            <div class="topic-badges">
              <span class="badge-pill teal">${topic.count} Questions</span>
              <span class="badge-pill ochre">${topic.diff}</span>
            </div>
            <h3 class="topic-title">${topic.title}</h3>
            <p class="topic-desc">${topic.desc}</p>
          </div>
          <div class="topic-card-bottom">
            <span class="topic-meta-qcount">5 Questions / Session</span>
            <button class="btn btn-primary btn-sm btn-start-topic" data-topic="${topic.title}">
              <span>Start Practice</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>
        </div>
      `).join('');

      // Attach click listeners to topic cards
      this.topicsGrid.querySelectorAll('.btn-start-topic').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const topic = btn.getAttribute('data-topic');
          this.startInterview(topic);
        });
      });
    }

    renderHistoryTable() {
      if (!this.historyTableContainer) return;
      const history = StorageManager.getHistory(this.currentUser.email);

      if (history.length === 0) {
        this.historyTableContainer.innerHTML = `
          <div class="empty-history-state">
            <div class="empty-history-icon">📊</div>
            <h3 style="color: var(--color-primary-teal);">No Interview Records Yet</h3>
            <p style="font-size: 0.9rem;">Complete your first technical simulation to see your scores, duration, and question reviews here.</p>
          </div>
        `;
        return;
      }

      this.historyTableContainer.innerHTML = `
        <table class="history-table">
          <thead>
            <tr>
              <th>Date & Time</th>
              <th>Topic</th>
              <th>Score</th>
              <th>Accuracy</th>
              <th>Duration</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            ${history.map(session => {
              let chipClass = 'score-chip-mid';
              if (session.percentage >= 75) chipClass = 'score-chip-high';
              else if (session.percentage < 50) chipClass = 'score-chip-low';

              return `
                <tr>
                  <td><strong>${session.date}</strong> <span style="color: var(--color-muted-text); font-size: 0.8rem;">${session.time || ''}</span></td>
                  <td><strong>${session.topic}</strong></td>
                  <td>${session.score} / ${session.maxScore}</td>
                  <td>
                    <span class="history-score-chip ${chipClass}">
                      ${session.percentage}%
                    </span>
                  </td>
                  <td>${session.durationFormatted || '00:00'}</td>
                  <td>${session.performanceCategory || 'Completed'}</td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      `;
    }

    handleClearHistory() {
      if (!confirm("Are you sure you want to clear your interview history? This action cannot be undone.")) return;
      StorageManager.clearHistory(this.currentUser.email);
      this.renderDashboardStats();
      this.renderHistoryTable();
      this.showToast("Interview history cleared.");
    }

    /* ==========================================================================
       INTERVIEW SIMULATION CHAT INTERFACE (PHASE 4, 5, 7)
       ========================================================================== */

    startInterview(topic = "All C++ Topics") {
      this.activeInterview = new InterviewSession(topic, this.currentUser);
      this.showScreen('interviewScreen');

      // Reset HUD
      if (this.hudTopicTag) this.hudTopicTag.textContent = topic;
      if (this.interviewTimerText) this.interviewTimerText.textContent = "00:00";
      this.updateHudProgress(1, 5, 1);

      // Reset Chat
      if (this.chatStream) this.chatStream.innerHTML = '';
      if (this.userAnswerInput) {
        this.userAnswerInput.value = '';
        this.userAnswerInput.disabled = false;
        this.userAnswerInput.focus();
      }
      if (this.submitAnswerBtn) this.submitAnswerBtn.disabled = false;
      if (this.evaluatingIndicator) this.evaluatingIndicator.style.display = 'none';
      if (this.hintDrawer) this.hintDrawer.style.display = 'none';
      if (this.answerCharCount) this.answerCharCount.textContent = "0 characters";

      // Start Stopwatch
      this.activeInterview.startTimer(this.interviewTimerText);

      // Present First Question
      this.presentNextQuestion();
    }

    updateHudProgress(current, total, difficultyLevel) {
      if (this.hudQuestionProgressText) {
        this.hudQuestionProgressText.textContent = `Question ${current} of ${total}`;
      }
      if (this.hudProgressFill) {
        const pct = Math.round((current / total) * 100);
        this.hudProgressFill.style.width = `${pct}%`;
      }
      if (this.hudDifficultyTag) {
        let diffLabel = "Foundation";
        let diffClass = "";
        if (difficultyLevel === 2) {
          diffLabel = "Intermediate";
          diffClass = "intermediate";
        } else if (difficultyLevel === 3) {
          diffLabel = "Advanced";
          diffClass = "advanced";
        }
        this.hudDifficultyTag.textContent = diffLabel;
        this.hudDifficultyTag.className = `hud-difficulty-tag ${diffClass}`;
      }
    }

    presentNextQuestion() {
      const q = this.activeInterview.getNextQuestion();
      if (!q) {
        // Session complete
        this.finishInterview();
        return;
      }

      this.currentActiveQuestion = q;
      const qNum = this.activeInterview.currentQuestionIndex + 1;
      this.updateHudProgress(qNum, this.activeInterview.TOTAL_QUESTIONS, q.difficulty);

      // Update Hint Drawer Text
      if (this.hintContentText) {
        this.hintContentText.textContent = q.hint || "Analyze the core concept and describe the mechanics.";
      }
      if (this.hintDrawer) this.hintDrawer.style.display = 'none';

      // Append bot question message
      this.appendBotQuestion(q, qNum);

      // Reset Input
      if (this.userAnswerInput) {
        this.userAnswerInput.value = '';
        this.userAnswerInput.disabled = false;
        this.userAnswerInput.focus();
      }
      if (this.submitAnswerBtn) {
        this.submitAnswerBtn.disabled = false;
        const btnText = this.submitAnswerBtn.querySelector('.btn-text');
        if (btnText) btnText.textContent = "Submit Answer";
      }
      if (this.answerCharCount) this.answerCharCount.textContent = "0 characters";
    }

    appendBotQuestion(q, qNum) {
      if (!this.chatStream) return;

      let diffName = "Foundation";
      if (q.difficulty === 2) diffName = "Intermediate";
      if (q.difficulty === 3) diffName = "Advanced";

      const msg = document.createElement('div');
      msg.className = 'chat-msg bot';
      msg.innerHTML = `
        <div class="msg-avatar">AI</div>
        <div class="msg-body">
          <div class="msg-author-meta">
            <span>AI Chatbot Interviewer</span>
            <span>Question ${qNum} of 5</span>
          </div>
          <div class="msg-content-card">
            <div class="question-badge-strip">
              <span class="q-badge topic">${q.topic}</span>
              <span class="q-badge diff">${diffName}</span>
            </div>
            <h4 class="question-text-heading">${q.question}</h4>
            <p style="font-size: 0.85rem; color: var(--color-muted-text); margin-top: 0.5rem;">
              Provide a clear technical explanation. Mention relevant keywords, internal mechanics, and code syntax where appropriate.
            </p>
          </div>
        </div>
      `;
      this.chatStream.appendChild(msg);
      this.scrollToBottom();
    }

    handleSubmitAnswer() {
      if (!this.currentActiveQuestion || this.isWaitingEvaluation) return;

      const rawAnswer = this.userAnswerInput?.value.trim();
      if (!rawAnswer) {
        this.showToast("Please enter an answer before submitting.");
        return;
      }

      this.isWaitingEvaluation = true;
      if (this.userAnswerInput) this.userAnswerInput.disabled = true;
      if (this.submitAnswerBtn) this.submitAnswerBtn.disabled = true;
      if (this.evaluatingIndicator) this.evaluatingIndicator.style.display = 'flex';

      // Append User message to stream
      this.appendUserMessage(rawAnswer);

      // Simulate transparent evaluation processing (fast & smooth)
      setTimeout(() => {
        const evaluation = EvaluationEngine.evaluate(rawAnswer, this.currentActiveQuestion);
        this.activeInterview.recordAnswer(rawAnswer, evaluation);

        if (this.evaluatingIndicator) this.evaluatingIndicator.style.display = 'none';
        this.appendEvaluationResponse(evaluation);
        this.isWaitingEvaluation = false;
      }, 700);
    }

    appendUserMessage(text) {
      if (!this.chatStream) return;
      const msg = document.createElement('div');
      msg.className = 'chat-msg user';
      msg.innerHTML = `
        <div class="msg-avatar">${this.currentUser ? this.currentUser.name.charAt(0).toUpperCase() : 'U'}</div>
        <div class="msg-body">
          <div class="msg-author-meta">
            <span>You</span>
          </div>
          <div class="msg-content-card">
            <p style="white-space: pre-wrap;">${this.escapeHtml(text)}</p>
          </div>
        </div>
      `;
      this.chatStream.appendChild(msg);
      this.scrollToBottom();
    }

    appendEvaluationResponse(evaluation) {
      if (!this.chatStream) return;

      const isLastQuestion = this.activeInterview.currentQuestionIndex >= this.activeInterview.TOTAL_QUESTIONS;
      const nextBtnLabel = isLastQuestion ? "View Comprehensive Report 🏆" : "Next Question →";

      let scoreColor = "var(--color-burnt-ochre)";
      if (evaluation.score >= 4) scoreColor = "#235B2D";
      else if (evaluation.score <= 1) scoreColor = "var(--color-error)";

      const msg = document.createElement('div');
      msg.className = 'chat-msg bot';
      msg.innerHTML = `
        <div class="msg-avatar">AI</div>
        <div class="msg-body">
          <div class="msg-author-meta">
            <span>Evaluation & Rubric Feedback</span>
          </div>
          <div class="msg-content-card">
            <div class="eval-card">
              <div class="eval-score-row">
                <span class="eval-score-tag" style="background-color: var(--color-soft-sand); color: ${scoreColor}; border: 1px solid var(--color-sand-border);">
                  Score: ${evaluation.score} / ${evaluation.maxScore} Marks
                </span>
                <span class="eval-rubric-desc" style="color: ${scoreColor};">${evaluation.category}</span>
              </div>

              <div class="concepts-group">
                <span class="concepts-label">Detected Concepts:</span>
                <div class="concepts-chips">
                  ${evaluation.detectedConcepts.length > 0 
                    ? evaluation.detectedConcepts.map(c => `<span class="chip-concept detected">✓ ${c}</span>`).join('')
                    : '<span style="font-size: 0.8rem; color: var(--color-muted-text);">No primary concepts detected</span>'
                  }
                </div>
              </div>

              ${evaluation.missingConcepts.length > 0 ? `
                <div class="concepts-group">
                  <span class="concepts-label">Suggested Concepts to Mention:</span>
                  <div class="concepts-chips">
                    ${evaluation.missingConcepts.map(c => `<span class="chip-concept missing">+ ${c}</span>`).join('')}
                  </div>
                </div>
              ` : ''}

              <div class="explanation-box">
                <strong>Model Technical Explanation:</strong>
                <p>${evaluation.explanation}</p>
                ${evaluation.example ? `<pre class="code-snippet"><code>${this.escapeHtml(evaluation.example)}</code></pre>` : ''}
              </div>

              <div class="eval-next-row">
                <button class="btn btn-primary btn-sm btn-advance-interview">
                  <span>${nextBtnLabel}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      `;

      this.chatStream.appendChild(msg);
      this.scrollToBottom();

      // Hook up Next Question button
      const nextBtn = msg.querySelector('.btn-advance-interview');
      nextBtn?.addEventListener('click', () => {
        nextBtn.disabled = true;
        this.presentNextQuestion();
      });
    }

    scrollToBottom() {
      if (this.chatViewport) {
        setTimeout(() => {
          this.chatViewport.scrollTop = this.chatViewport.scrollHeight;
        }, 50);
      }
    }

    escapeHtml(str) {
      if (!str) return '';
      return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    }

    /* ==========================================================================
       FINAL RESULTS SCREEN (PHASE 6 & 7)
       ========================================================================== */

    finishInterview() {
      const summary = this.activeInterview.finalize();
      this.showScreen('resultsScreen');

      if (this.resultsCategoryBadge) this.resultsCategoryBadge.textContent = summary.performanceCategory;
      if (this.resultsFinalScore) this.resultsFinalScore.textContent = summary.score;
      if (this.resultsPercentageTag) this.resultsPercentageTag.textContent = `${summary.percentage}% Accuracy`;
      if (this.resultsDurationText) this.resultsDurationText.textContent = summary.durationFormatted;
      if (this.resultsAnsweredCount) this.resultsAnsweredCount.textContent = summary.questionCount;
      if (this.resultsCorrectCount) this.resultsCorrectCount.textContent = summary.breakdown.correct;
      if (this.resultsPartialCount) this.resultsPartialCount.textContent = summary.breakdown.partial;
      if (this.resultsImproveCount) this.resultsImproveCount.textContent = summary.breakdown.needsWork;

      // Render Question Reviews
      if (this.reviewQuestionsList) {
        this.reviewQuestionsList.innerHTML = summary.results.map((res, idx) => `
          <div class="review-item-card">
            <div class="review-item-header">
              <h4 class="review-q-title">Q${idx + 1}: ${res.questionText}</h4>
              <span class="badge-pill ochre">${res.score} / 5 Marks (${res.category})</span>
            </div>
            
            <div class="review-answer-block">
              <strong>Your Submitted Answer:</strong>
              <p style="white-space: pre-wrap; color: var(--color-teal-black);">${this.escapeHtml(res.studentAnswer)}</p>
            </div>

            <div class="explanation-box" style="margin-top: 0.25rem;">
              <strong>Model Solution & Mechanics:</strong>
              <p>${res.explanation}</p>
              ${res.example ? `<pre class="code-snippet"><code>${this.escapeHtml(res.example)}</code></pre>` : ''}
            </div>
          </div>
        `).join('');
      }

      // Render Targeted Recommendations
      if (this.recommendationsContainer) {
        const tips = [];
        if (summary.percentage >= 85) {
          tips.push("Excellent work! Your technical vocabulary and concept precision are well-aligned for campus interviews.");
          tips.push("Next step: Deepen your knowledge in Template Metaprogramming and complex multiple inheritance memory layouts.");
        } else if (summary.percentage >= 60) {
          tips.push("Solid foundation shown across core C++ topics. Focus on incorporating specific keywords like 'noexcept', 'vtable indirection', and 'RAII'.");
          tips.push("Review exception handling hierarchy and catch-ordering rules to guarantee full marks in second-year viva exams.");
        } else {
          tips.push("Key concept review needed: Revise class blueprints vs instances, shallow vs deep copying, and virtual destructors.");
          tips.push("Practice writing C++ code examples alongside theoretical definitions to demonstrate practical implementation competence.");
        }

        this.recommendationsContainer.innerHTML = `
          <ul class="rec-list">
            ${tips.map(tip => `
              <li class="rec-item">
                <span class="rec-icon">💡</span>
                <span class="rec-text">${tip}</span>
              </li>
            `).join('')}
          </ul>
        `;
      }
    }
  }

  // Initialize Application on DOM Ready
  document.addEventListener('DOMContentLoaded', () => {
    window.aiChatbotApp = new AIChatbotApp();
  });

})();
