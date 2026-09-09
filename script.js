// ========================================
// SECTION NAVIGATION
// ========================================

function showSection(sectionId) {

    const sections = document.querySelectorAll(".section");

    sections.forEach(function(section) {
        section.classList.remove("active");
    });

    const selectedSection = document.getElementById(sectionId);

    if (selectedSection) {
        selectedSection.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ========================================
// FAKE NEWS ANALYSIS
// ========================================

function analyzeNews() {

    const newsInput = document.getElementById("newsText");
    const result = document.getElementById("result");

    if (!newsInput || !result) {
        alert("Error: newsText or result element not found.");
        return;
    }

    const newsText = newsInput.value.trim();

    // Empty input
    if (newsText === "") {

        result.style.display = "block";
        result.className = "warning";

        result.innerHTML = `
            <h3>⚠️ Please Enter News</h3>
            <p>
                Paste a news headline or article
                before clicking Analyze News.
            </p>
        `;

        return;
    }


    // Convert to lowercase
    const text = newsText.toLowerCase();


    // ========================================
    // SUSPICIOUS WORDS
    // ========================================

    const suspiciousWords = [
        "shocking",
        "secret",
        "viral",
        "miracle",
        "guaranteed",
        "exposed",
        "urgent",
        "breaking",
        "you won't believe",
        "share immediately",
        "100% true",
        "must share",
        "click now",
        "government confirmed"
    ];


    let foundWords = [];


    suspiciousWords.forEach(function(word) {

        if (text.includes(word)) {
            foundWords.push(word);
        }

    });


    // ========================================
    // CALCULATE SCORE
    // ========================================

    let score = 0;

    // Each suspicious word = 20 points
    score += foundWords.length * 20;


    // Excessive punctuation
    const punctuation =
        (newsText.match(/[!?]/g) || []).length;

    if (punctuation >= 3) {
        score += 20;
    }


    // ALL CAPITAL LETTERS
    if (
        newsText === newsText.toUpperCase() &&
        newsText.length > 10
    ) {
        score += 20;
    }


    // Maximum 100
    if (score > 100) {
        score = 100;
    }


    // ========================================
    // DISPLAY RESULT
    // ========================================

    result.style.display = "block";


    // HIGH SUSPICION
    if (score >= 60) {

        result.className = "danger";

        result.innerHTML = `
            <h3>🚨 High Suspicion — Possible Fake/Misleading News</h3>

            <p class="score">
                Suspicion Score: ${score}/100
            </p>

            <p>
                Several warning signs were detected.
                This content should be verified using
                reliable sources before sharing.
            </p>
        `;
    }


    // MEDIUM SUSPICION
    else if (score >= 30) {

        result.className = "warning";

        result.innerHTML = `
            <h3>⚠️ Suspicious — Verify Before Sharing</h3>

            <p class="score">
                Suspicion Score: ${score}/100
            </p>

            <p>
                Some warning signs were detected.
                Check the source and compare the
                information with reliable sources.
            </p>
        `;
    }


    // LOW SUSPICION
    else {

        result.className = "safe";

        result.innerHTML = `
            <h3>🟢 Low Suspicion</h3>

            <p class="score">
                Suspicion Score: ${score}/100
            </p>

            <p>
                No major warning signs were detected.
                This does NOT prove that the news is true.
                Always verify important information.
            </p>
        `;
    }


    // ========================================
    // SHOW WARNING WORDS
    // ========================================

    if (foundWords.length > 0) {

        result.innerHTML += `
            <hr>

            <p>
                <strong>⚠️ Warning words detected:</strong>
            </p>

            <p>
                ${foundWords.join(", ")}
            </p>
        `;
    }


    // ========================================
    // MEDIA LITERACY TIP
    // ========================================

    result.innerHTML += `
        <hr>

        <p>
            🧠 <strong>Media Literacy Tip:</strong>
            Always verify important information using
            multiple reliable sources before sharing it.
        </p>
    `;
}
function checkAnswer(button, answer) {

    const result = document.getElementById("quizResult");

    if (answer === "correct") {

        result.innerHTML = "✅ Correct! Always verify information before sharing.";
        result.style.color = "green";

    } else {

        result.innerHTML = "❌ Not quite. Check the source and verify the claim first.";
        result.style.color = "red";

    }
}
// ========================================
// MEDIA LITERACY QUIZ
// ========================================

const quizQuestions = [

    {
        question: "What is clickbait?",
        options: [
            "A government report",
            "A headline designed to attract clicks",
            "A weather report",
            "A research paper"
        ],
        answer: 1
    },

    {
        question: "What should you check when reading an unfamiliar article?",
        options: [
            "Number of emojis",
            "Source and author",
            "Font size",
            "Article color"
        ],
        answer: 1
    },

    {
        question: "Which is a warning sign of misleading content?",
        options: [
            "Read the evidence",
            "According to the report",
            "SHARE THIS NOW!!!",
            "Published on Monday"
        ],
        answer: 2
    },

    {
        question: "Why can fake websites look like real news websites?",
        options: [
            "To confuse or mislead readers",
            "To improve internet speed",
            "To reduce advertisements",
            "To store photos"
        ],
        answer: 0
    },

    {
        question: "What does verify mean?",
        options: [
            "Delete information",
            "Check whether information is reliable or accurate",
            "Share information",
            "Change a headline"
        ],
        answer: 1
    },

    {
        question: "Which source is generally useful for checking an important claim?",
        options: [
            "An anonymous post",
            "An unidentified message",
            "A reliable primary or established source",
            "A random comment"
        ],
        answer: 2
    },

    {
        question: "What is confirmation bias?",
        options: [
            "Checking multiple sources",
            "Favoring information that supports what you already believe",
            "Correcting spelling mistakes",
            "Reading a newspaper"
        ],
        answer: 1
    },

    {
        question: "What should you do with an emotional headline?",
        options: [
            "Share immediately",
            "Verify the claim before sharing",
            "Assume it is true",
            "Ignore every article"
        ],
        answer: 1
    },

    {
        question: "What can reverse-image searching help with?",
        options: [
            "Checking the history or context of an image",
            "Increasing phone storage",
            "Changing image colors",
            "Writing headlines"
        ],
        answer: 0
    },

    {
        question: "Which statement is safest?",
        options: [
            "The internet is always correct.",
            "Everything on social media is fake.",
            "Information should be checked before being trusted or shared.",
            "Viral posts are always true."
        ],
        answer: 2
    },

    {
        question: "What does a simple suspicion score measure?",
        options: [
            "Guaranteed truth",
            "Warning signs detected by the program",
            "Author's age",
            "Website ownership"
        ],
        answer: 1
    },

    {
        question: "Why compare important news with multiple reliable sources?",
        options: [
            "To get more evidence to evaluate the claim",
            "To make the headline longer",
            "To increase the number of shares",
            "To make every article identical"
        ],
        answer: 0
    },

    {
        question: "Which phrase is most suspicious?",
        options: [
            "According to official data",
            "Researchers reported",
            "You won't believe this!!!",
            "The report states"
        ],
        answer: 2
    },

    {
        question: "Why can a fake-news detector make mistakes?",
        options: [
            "Warning words can also appear in legitimate news",
            "Computers cannot display text",
            "News never contains headlines",
            "Every website is identical"
        ],
        answer: 0
    },

    {
        question: "What is the main goal of media literacy?",
        options: [
            "To share more posts",
            "To critically evaluate information",
            "To make headlines exciting",
            "To avoid all news"
        ],
        answer: 1
    }

];


// ========================================
// QUIZ VARIABLES
// ========================================

let currentQuestion = 0;
let quizScore = 0;


// ========================================
// START QUIZ
// ========================================

function startQuiz() {

    currentQuestion = 0;
    quizScore = 0;

    document.getElementById("quizResult").innerHTML = "";

    document.getElementById("nextBtn").style.display = "none";

    loadQuestion();
}


// ========================================
// LOAD QUESTION
// ========================================

function loadQuestion() {

    const questionData = quizQuestions[currentQuestion];

    document.getElementById("questionNumber").innerHTML =
        "Question " + (currentQuestion + 1) +
        " of " + quizQuestions.length;

    document.getElementById("question").innerHTML =
        questionData.question;

    const optionsDiv =
        document.getElementById("options");

    optionsDiv.innerHTML = "";

    questionData.options.forEach(function(option, index) {

        const button = document.createElement("button");

        button.className = "quiz-option";

        button.innerHTML =
            String.fromCharCode(65 + index) +
            ". " +
            option;

        button.onclick = function() {
            selectAnswer(button, index);
        };

        optionsDiv.appendChild(button);

    });

    document.getElementById("nextBtn").style.display = "none";
}


// ========================================
// CHECK ANSWER
// ========================================

function selectAnswer(button, selectedAnswer) {

    const correctAnswer =
        quizQuestions[currentQuestion].answer;

    const allButtons =
        document.querySelectorAll(".quiz-option");

    // Disable all options
    allButtons.forEach(function(btn) {
        btn.disabled = true;
    });


    if (selectedAnswer === correctAnswer) {

        button.classList.add("correct");

        quizScore++;

    } else {

        button.classList.add("wrong");

        // Show correct answer
        allButtons[correctAnswer]
            .classList.add("correct");
    }


    document.getElementById("nextBtn")
        .style.display = "inline-block";
}


// ========================================
// NEXT QUESTION
// ========================================

function nextQuestion() {

    currentQuestion++;

    if (currentQuestion < quizQuestions.length) {

        loadQuestion();

    } else {

        showQuizResult();

    }
}


// ========================================
// FINAL QUIZ RESULT
// ========================================

function showQuizResult() {

    document.getElementById("questionNumber")
        .innerHTML = "Quiz Completed 🎉";

    document.getElementById("question")
        .innerHTML = "";

    document.getElementById("options")
        .innerHTML = "";

    document.getElementById("nextBtn")
        .style.display = "none";


    let message = "";

    if (quizScore >= 13) {

        message =
            "🏆 Excellent! You have strong media literacy skills.";

    } else if (quizScore >= 10) {

        message =
            "👏 Good job! You understand the main warning signs.";

    } else if (quizScore >= 7) {

        message =
            "👍 Good attempt! Keep practicing media literacy.";

    } else {

        message =
            "📚 Keep learning! Always verify information before sharing.";

    }


    document.getElementById("quizResult").innerHTML = `

        <h2>Your Score: ${quizScore}/${quizQuestions.length}</h2>

        <p>${message}</p>

        <p>
            Remember: a warning-sign detector cannot prove
            that a news story is true or fake.
            Always verify important claims using reliable sources.
        </p>

        <button
            class="primary-btn"
            onclick="startQuiz()">
            🔄 Restart Quiz
        </button>

    `;
}


// ========================================
// START QUIZ WHEN PAGE LOADS
// ========================================

document.addEventListener("DOMContentLoaded", function() {

    startQuiz();

});