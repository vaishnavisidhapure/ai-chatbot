/**
 * ============================================================================
 * AI CHATBOT — C++ OBJECT-ORIENTED PROGRAMMING (OOP) DEMONSTRATION ENGINE
 * Product Name: AI Chatbot
 * Tagline: "Think sharper. Perform better."
 * 
 * Demonstrates Core C++17 OOP & Advanced Language Features:
 * 1. Classes and Objects
 * 2. Encapsulation & Access Specifiers (private, protected, public)
 * 3. Inheritance (Base -> Derived)
 * 4. Runtime Polymorphism & Virtual Functions (VTABLE / VPTR mechanism)
 * 5. Abstract Classes & Pure Virtual Functions
 * 6. Class Templates (demonstrated with int and double types)
 * 7. Function Templates
 * 8. Exception Handling (try, throw, catch)
 * 9. Custom Exception Hierarchy derived from std::exception
 * 10. STL Containers & Smart Pointers (std::vector, std::unique_ptr, std::string)
 * 11. RAII & Stack Unwinding
 * ============================================================================
 */

#include <iostream>
#include <string>
#include <vector>
#include <memory>
#include <algorithm>
#include <cctype>
#include <iomanip>
#include <chrono>
#include <sstream>
#include <exception>

// ============================================================================
// SECTION 1: CUSTOM EXCEPTION HIERARCHY
// Demonstrating custom exceptions inheriting from std::exception with noexcept
// ============================================================================

/**
 * Base custom exception for interview system errors.
 */
class InterviewException : public std::exception {
protected:
    std::string message;
public:
    explicit InterviewException(const std::string& msg) : message(msg) {}
    virtual const char* what() const noexcept override {
        return message.c_str();
    }
};

/**
 * Thrown when an invalid score (e.g. negative or exceeding max) is passed.
 */
class InvalidScoreException : public InterviewException {
public:
    explicit InvalidScoreException(const std::string& msg) 
        : InterviewException("InvalidScoreException: " + msg) {}
};

/**
 * Thrown when attempting to query a question ID that does not exist in QuestionBank.
 */
class QuestionNotFoundException : public InterviewException {
public:
    explicit QuestionNotFoundException(const std::string& qId) 
        : InterviewException("QuestionNotFoundException: Question ID '" + qId + "' was not found.") {}
};

/**
 * Thrown when an empty student response is submitted.
 */
class EmptyInputException : public InterviewException {
public:
    EmptyInputException() 
        : InterviewException("EmptyInputException: Candidate submitted an empty response.") {}
};

// ============================================================================
// SECTION 2: FUNCTION & CLASS TEMPLATES
// Demonstrating Generic Programming with both int and floating-point types
// ============================================================================

/**
 * Generic Function Template to print formatted metric rows.
 */
template <typename T>
void printMetric(const std::string& label, T value, const std::string& unit = "") {
    std::cout << "  • " << std::left << std::setw(28) << label << ": " 
              << value << (unit.empty() ? "" : " " + unit) << "\n";
}

/**
 * Generic Function Template to clamp values within boundaries.
 */
template <typename T>
T clampValue(T val, T minVal, T maxVal) {
    if (val < minVal) return minVal;
    if (val > maxVal) return maxVal;
    return val;
}

/**
 * Generic Class Template: ScoreCalculator<T>
 * Demonstrates parameterized type management for numerical marks (int and double).
 */
template <typename T>
class ScoreCalculator {
private:
    std::vector<T> scores;
    std::vector<T> maxScores;

public:
    ScoreCalculator() = default;

    void addScore(T score, T maxScore) {
        if (maxScore <= static_cast<T>(0)) {
            throw InvalidScoreException("Maximum score must be strictly positive.");
        }
        if (score < static_cast<T>(0) || score > maxScore) {
            throw InvalidScoreException("Score value outside permissible bounds [0, maxScore].");
        }
        scores.push_back(score);
        maxScores.push_back(maxScore);
    }

    T getTotalEarned() const {
        T sum = static_cast<T>(0);
        for (const auto& s : scores) sum += s;
        return sum;
    }

    T getTotalPossible() const {
        T sum = static_cast<T>(0);
        for (const auto& m : maxScores) sum += m;
        return sum;
    }

    double getPercentage() const {
        T possible = getTotalPossible();
        if (possible <= static_cast<T>(0)) return 0.0;
        return (static_cast<double>(getTotalEarned()) / static_cast<double>(possible)) * 100.0;
    }

    double getAverageScore() const {
        if (scores.empty()) return 0.0;
        return static_cast<double>(getTotalEarned()) / static_cast<double>(scores.size());
    }

    std::string getPerformanceGrade() const {
        double pct = getPercentage();
        if (pct >= 90.0) return "Mastery (Grade A+)";
        if (pct >= 75.0) return "Proficient (Grade A)";
        if (pct >= 60.0) return "Competent (Grade B)";
        if (pct >= 45.0) return "Developing (Grade C)";
        return "Needs Remediation (Grade F)";
    }

    size_t getCount() const { return scores.size(); }
};

// ============================================================================
// SECTION 3: BASE ABSTRACT CLASS — InterviewQuestion
// Demonstrating Encapsulation, Virtual Destructor, and Pure Virtual Interface
// ============================================================================

class InterviewQuestion {
private:
    std::string id;
    std::string topic;
    int difficulty; // 1: Foundation, 2: Intermediate, 3: Advanced
    std::string questionText;
    std::string modelExplanation;

public:
    // Parameterized Constructor
    InterviewQuestion(std::string id, std::string topic, int diff, 
                      std::string text, std::string explanation)
        : id(std::move(id)), topic(std::move(topic)), difficulty(diff),
          questionText(std::move(text)), modelExplanation(std::move(explanation)) {}

    // Virtual Destructor ensures safe polymorphic cleanup through base pointers
    virtual ~InterviewQuestion() = default;

    // Getters demonstrating Encapsulation
    const std::string& getId() const { return id; }
    const std::string& getTopic() const { return topic; }
    int getDifficulty() const { return difficulty; }
    const std::string& getQuestionText() const { return questionText; }
    const std::string& getModelExplanation() const { return modelExplanation; }

    std::string getDifficultyLabel() const {
        switch (difficulty) {
            case 1: return "Foundation";
            case 2: return "Intermediate";
            case 3: return "Advanced";
            default: return "Standard";
        }
    }

    // Pure Virtual Function: makes this an Abstract Class
    virtual double evaluateAnswer(const std::string& studentAnswer) const = 0;

    // Virtual Function: can be overridden by derived classes
    virtual void displayQuestion(int questionNumber) const {
        std::cout << "\n============================================================\n";
        std::cout << " [Question #" << questionNumber << "] Topic: " << topic 
                  << " | Difficulty: " << getDifficultyLabel() << "\n";
        std::cout << "------------------------------------------------------------\n";
        std::cout << questionText << "\n";
        std::cout << "============================================================\n";
    }
};

// ============================================================================
// SECTION 4: DERIVED CLASS — CppQuestion
// Demonstrating Inheritance, Function Overriding, and Weighted Keyword Scoring
// ============================================================================

struct KeywordSpec {
    std::string primaryTerm;
    std::vector<std::string> synonyms;
    double weight;
};

class CppQuestion : public InterviewQuestion {
private:
    std::vector<KeywordSpec> rubricKeywords;
    std::string codeSnippet;

    static std::string toLowerString(const std::string& input) {
        std::string result = input;
        std::transform(result.begin(), result.end(), result.begin(),
                       [](unsigned char c) { return std::tolower(c); });
        return result;
    }

public:
    CppQuestion(std::string id, std::string topic, int diff,
                std::string text, std::string explanation,
                std::vector<KeywordSpec> keywords, std::string snippet = "")
        : InterviewQuestion(std::move(id), std::move(topic), diff, std::move(text), std::move(explanation)),
          rubricKeywords(std::move(keywords)), codeSnippet(std::move(snippet)) {}

    virtual ~CppQuestion() override = default;

    const std::string& getCodeSnippet() const { return codeSnippet; }

    /**
     * Runtime Polymorphism: Overrides evaluateAnswer() from InterviewQuestion.
     * Evaluates response against weighted concepts, awarding 0.0 to 5.0 marks.
     */
    virtual double evaluateAnswer(const std::string& studentAnswer) const override {
        if (studentAnswer.empty()) {
            throw EmptyInputException();
        }

        std::string clean = toLowerString(studentAnswer);
        double earnedWeight = 0.0;
        double totalWeight = 0.0;
        int matchedConcepts = 0;

        for (const auto& kw : rubricKeywords) {
            totalWeight += kw.weight;
            bool found = false;

            if (clean.find(toLowerString(kw.primaryTerm)) != std::string::npos) {
                found = true;
            } else {
                for (const auto& syn : kw.synonyms) {
                    if (clean.find(toLowerString(syn)) != std::string::npos) {
                        found = true;
                        break;
                    }
                }
            }

            if (found) {
                earnedWeight += kw.weight;
                matchedConcepts++;
            }
        }

        if (totalWeight <= 0.0) return 0.0;
        double ratio = earnedWeight / totalWeight;

        // Scale to 5.0 marks
        double finalScore = 0.0;
        if (ratio >= 0.85) finalScore = 5.0;
        else if (ratio >= 0.65) finalScore = 4.0;
        else if (ratio >= 0.45) finalScore = 3.0;
        else if (ratio >= 0.25 || matchedConcepts >= 1) finalScore = 2.0;
        else if (clean.length() > 5) finalScore = 1.0;
        else finalScore = 0.0;

        return finalScore;
    }

    virtual void displayQuestion(int questionNumber) const override {
        // Calls base class implementation and adds C++ code hints
        InterviewQuestion::displayQuestion(questionNumber);
        if (!codeSnippet.empty()) {
            std::cout << "\n[Reference Code Snippet]:\n" << codeSnippet << "\n";
        }
    }
};

// ============================================================================
// SECTION 5: QUESTION BANK REPOSITORY
// Stores and manages polymorphic question instances using std::unique_ptr
// ============================================================================

class QuestionBank {
private:
    std::vector<std::unique_ptr<InterviewQuestion>> repository;

public:
    QuestionBank() {
        populate();
    }

    void addQuestion(std::unique_ptr<InterviewQuestion> q) {
        repository.push_back(std::move(q));
    }

    size_t size() const { return repository.size(); }

    const InterviewQuestion* getQuestion(size_t index) const {
        if (index >= repository.size()) {
            throw QuestionNotFoundException("Index out of bounds");
        }
        return repository[index].get();
    }

    void populate() {
        // OOP Fundamentals
        addQuestion(std::make_unique<CppQuestion>(
            "oop_1", "OOP Fundamentals", 1,
            "What is the difference between a Class and an Object in C++?",
            "A Class is a user-defined blueprint; an Object is an allocated instance in memory.",
            std::vector<KeywordSpec>{
                {"blueprint", {"template", "specification", "data type"}, 2.0},
                {"instance", {"entity", "object", "variable"}, 2.0},
                {"memory", {"stack", "heap", "allocation"}, 1.0}
            },
            "class Car { int speed; };\nCar c1; // Object allocated on stack"
        ));

        addQuestion(std::make_unique<CppQuestion>(
            "oop_2", "OOP Fundamentals", 2,
            "Explain Encapsulation and Data Hiding using access specifiers in C++.",
            "Encapsulation bundles data and methods while access specifiers (private) protect internal state.",
            std::vector<KeywordSpec>{
                {"bundling", {"wrapping", "combining", "grouping"}, 2.0},
                {"data hiding", {"private", "protecting data", "restricted access"}, 2.5},
                {"getter and setter", {"accessors", "methods", "functions"}, 1.5}
            }
        ));

        // Exception Handling (Assessment Topic)
        addQuestion(std::make_unique<CppQuestion>(
            "exc_1", "Exception Handling", 1,
            "Describe the roles of try, throw, and catch blocks in C++ exception handling.",
            "try encloses error-prone code, throw signals the runtime anomaly, and catch handles it.",
            std::vector<KeywordSpec>{
                {"try", {"guarded", "monitored block"}, 2.0},
                {"throw", {"signals error", "raise exception"}, 2.0},
                {"catch", {"handler", "catches error"}, 2.0}
            },
            "try {\n    if (b == 0) throw runtime_error(\"Zero division\");\n} catch (const exception& e) {\n    cerr << e.what();\n}"
        ));

        addQuestion(std::make_unique<CppQuestion>(
            "exc_2", "Exception Handling", 2,
            "Explain Stack Unwinding in C++ and how RAII guarantees resource release.",
            "Stack unwinding automatically invokes destructors of local objects when an exception propagates.",
            std::vector<KeywordSpec>{
                {"stack unwinding", {"popping stack", "automatic destruction"}, 2.5},
                {"destructor", {"cleanup", "automatic cleanup"}, 2.0},
                {"RAII", {"resource acquisition is initialization", "smart pointer"}, 2.5}
            }
        ));

        // Templates (Assessment Topic)
        addQuestion(std::make_unique<CppQuestion>(
            "tmpl_1", "Templates", 1,
            "What is Generic Programming and how do Function Templates operate in C++?",
            "Generic programming writes type-independent code; compiler instantiates concrete functions at compile time.",
            std::vector<KeywordSpec>{
                {"generic", {"type-independent", "any type"}, 2.0},
                {"template", {"typename T", "parameterized type"}, 2.0},
                {"instantiation", {"compile time", "code generation"}, 2.0}
            },
            "template <typename T>\nT getMax(T a, T b) { return (a > b) ? a : b; }"
        ));

        addQuestion(std::make_unique<CppQuestion>(
            "tmpl_2", "Templates", 2,
            "What is Template Specialization in C++ and when is it required?",
            "Template Specialization provides a custom implementation for specific data types such as const char*.",
            std::vector<KeywordSpec>{
                {"specialization", {"template <>", "explicit specialization"}, 2.5},
                {"custom implementation", {"specific type", "char*", "strcmp"}, 2.5}
            }
        ));
    }
};

// ============================================================================
// SECTION 6: INTERVIEW SESSION CONTROLLER
// Coordinates question delivery, timing, adaptive scoring, and viva review
// ============================================================================

class InterviewSession {
private:
    std::string candidateName;
    ScoreCalculator<double> doubleScoreCalc;
    ScoreCalculator<int> intScoreCalc;
    std::chrono::steady_clock::time_point startTime;

public:
    explicit InterviewSession(std::string name) : candidateName(std::move(name)) {
        startTime = std::chrono::steady_clock::now();
    }

    void runDemoSimulation(const QuestionBank& bank) {
        std::cout << "\n============================================================\n";
        std::cout << "         AI CHATBOT — TECHNICAL SIMULATION SESSION\n";
        std::cout << "   Candidate: " << candidateName << " | Platform: C++17 OOP Engine\n";
        std::cout << "============================================================\n";

        size_t total = bank.size();
        for (size_t i = 0; i < total; ++i) {
            const InterviewQuestion* q = bank.getQuestion(i);
            q->displayQuestion(static_cast<int>(i + 1));

            std::cout << "\n[Simulated Response Input]:\n";
            std::string sampleAnswer;
            if (i == 0) {
                sampleAnswer = "A class is a blueprint or template while an object is an instance allocated memory.";
            } else if (i == 1) {
                sampleAnswer = "Encapsulation bundles data and methods together and uses private access for data hiding with getters.";
            } else if (i == 2) {
                sampleAnswer = "The try block monitors code, throw signals the runtime exception, and catch handles it.";
            } else if (i == 3) {
                sampleAnswer = "Stack unwinding calls destructors automatically during exceptions; RAII ensures clean resource release.";
            } else {
                sampleAnswer = "Generic programming allows templates with typename T, generating code at compile time instantiation.";
            }

            std::cout << ">> \"" << sampleAnswer << "\"\n";

            // Evaluate via Polymorphic Base Pointer
            try {
                double score = q->evaluateAnswer(sampleAnswer);
                int roundedScore = static_cast<int>(std::round(score));

                doubleScoreCalc.addScore(score, 5.0);
                intScoreCalc.addScore(roundedScore, 5);

                std::cout << ">> Result: " << score << " / 5.0 marks awarded.\n";
                std::cout << ">> Reference Explanation: " << q->getModelExplanation() << "\n";
            } catch (const InterviewException& ex) {
                std::cerr << ">> Error during evaluation: " << ex.what() << "\n";
            }
        }

        printReport();
    }

    void printReport() {
        auto endTime = std::chrono::steady_clock::now();
        auto elapsedMs = std::chrono::duration_cast<std::chrono::milliseconds>(endTime - startTime).count();

        std::cout << "\n============================================================\n";
        std::cout << "             AI CHATBOT — FINAL PERFORMANCE REPORT\n";
        std::cout << "============================================================\n";
        printMetric("Candidate Name", candidateName);
        printMetric("Simulation Duration", elapsedMs / 1000.0, "seconds");
        printMetric("Questions Evaluated", doubleScoreCalc.getCount());

        std::cout << "\n--- Class Template: ScoreCalculator<double> [Precise] ---\n";
        printMetric("Total Marks", doubleScoreCalc.getTotalEarned(), "/ " + std::to_string(doubleScoreCalc.getTotalPossible()));
        printMetric("Percentage", doubleScoreCalc.getPercentage(), "%");
        printMetric("Average Mark", doubleScoreCalc.getAverageScore(), "/ 5.0");
        printMetric("Evaluation Grade", doubleScoreCalc.getPerformanceGrade());

        std::cout << "\n--- Class Template: ScoreCalculator<int> [Discrete] ---\n";
        printMetric("Total Integer Marks", intScoreCalc.getTotalEarned(), "/ " + std::to_string(intScoreCalc.getTotalPossible()));
        printMetric("Integer Average", intScoreCalc.getAverageScore(), "/ 5");
        std::cout << "============================================================\n";
    }
};

// ============================================================================
// SECTION 7: DEMONSTRATION & VIVA VERIFICATION SUITE
// Tests custom exceptions, templates, and polymorphic calls directly
// ============================================================================

void demonstrateCustomExceptions() {
    std::cout << "\n>>> [DEMO] Testing Custom Exception Hierarchy & Stack Unwinding:\n";

    // Test 1: Invalid Score Exception
    try {
        std::cout << "Attempting to add invalid score (15 out of 10)...\n";
        ScoreCalculator<int> calc;
        calc.addScore(15, 10); // should throw
    } catch (const InvalidScoreException& e) {
        std::cout << "[Caught Expected]: " << e.what() << "\n";
    }

    // Test 2: Empty Input Exception
    try {
        std::cout << "Attempting to evaluate empty candidate answer...\n";
        CppQuestion testQ("q_test", "Test", 1, "Dummy question?", "Dummy explanation", {});
        testQ.evaluateAnswer(""); // should throw
    } catch (const EmptyInputException& e) {
        std::cout << "[Caught Expected]: " << e.what() << "\n";
    }

    // Test 3: Question Not Found Exception
    try {
        std::cout << "Attempting to fetch question index 999 from QuestionBank...\n";
        QuestionBank bank;
        bank.getQuestion(999); // should throw
    } catch (const QuestionNotFoundException& e) {
        std::cout << "[Caught Expected]: " << e.what() << "\n";
    } catch (const std::exception& e) {
        std::cout << "[General Catch]: " << e.what() << "\n";
    }
}

void printVivaArchitectureGuide() {
    std::cout << "\n============================================================\n";
    std::cout << "       AI CHATBOT — OOP VIVA ARCHITECTURE SUMMARY\n";
    std::cout << "============================================================\n";
    std::cout << "1. Encapsulation: InterviewQuestion encapsulates private attributes\n";
    std::cout << "   (id, topic, difficulty, questionText) with protected/public accessors.\n";
    std::cout << "2. Inheritance: CppQuestion publicly inherits from InterviewQuestion.\n";
    std::cout << "3. Runtime Polymorphism: evaluateAnswer() is pure virtual in base\n";
    std::cout << "   and overridden in CppQuestion, dispatched dynamically via VPTR/VTABLE.\n";
    std::cout << "4. Virtual Destructor: ~InterviewQuestion() ensures complete derived\n";
    std::cout << "   object deallocation when deleted via a base class pointer.\n";
    std::cout << "5. Class Templates: ScoreCalculator<T> works with both int and double.\n";
    std::cout << "6. Function Templates: printMetric<T>() and clampValue<T>() operate generically.\n";
    std::cout << "7. Exception Hierarchy: InterviewException derives from std::exception\n";
    std::cout << "   with specialized subclasses and noexcept what() specifications.\n";
    std::cout << "8. Modern C++ Standard: Written cleanly for C++17 with zero third-party dependencies.\n";
    std::cout << "============================================================\n";
}

// ============================================================================
// MAIN FUNCTION — INTERACTIVE CLI
// ============================================================================

int main() {
    std::cout << "============================================================\n";
    std::cout << "           AI CHATBOT — C++17 OOP SIMULATION BOT            \n";
    std::cout << "             \"Think sharper. Perform better.\"             \n";
    std::cout << "============================================================\n";

    QuestionBank bank;

    std::cout << "\n1. Run Full Interactive Mock Interview Simulation\n";
    std::cout << "2. Run Custom Exception & Stack Unwinding Demonstration\n";
    std::cout << "3. Display OOP Viva Architecture Guide\n";
    std::cout << "4. Run All Demonstrations Automatically (Viva Demo Mode)\n";
    std::cout << "\nSelect an option (default: 4): ";

    std::string choice;
    // When run non-interactively or with standard demo
    if (!std::getline(std::cin, choice) || choice.empty()) {
        choice = "4";
    }

    if (choice == "1") {
        InterviewSession session("Vaishnavi Sharma");
        session.runDemoSimulation(bank);
    } else if (choice == "2") {
        demonstrateCustomExceptions();
    } else if (choice == "3") {
        printVivaArchitectureGuide();
    } else {
        // Run full demonstration suite
        std::cout << "Executing complete Viva Demonstration Suite...\n";
        demonstrateCustomExceptions();
        printVivaArchitectureGuide();
        InterviewSession session("Vaishnavi Sharma");
        session.runDemoSimulation(bank);
    }

    std::cout << "\n[Engine]: AI Chatbot C++ demonstration finished successfully.\n";
    return 0;
}
