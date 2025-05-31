create a mobile responsive, accessible web application for flashcards.

What this app does: It helps users to create flashcards. They can upload an excel, csv or a table containing two columns. Each column represents a side on the fashcard.

Use cases: The app can be used to create flashcards to learn languages like Spanish, German, Italian, English or Mandrian. Other use cases include helping students revise concepts before their school or board exams. An additional use case is for fun games, trivia or YES/NO questions.

How this app works:

1. users can upload

- a word or a PDF file containing a table of two columns
- an excel or CSV file containing information in column A and column B
  The first column will represnt one side of the card and the second will represent the other.
  At this step, the UI should contain a navbar, clean component that contains input field and a button on the side to upload the document. If the document is not in the correct format, navigate to the error page and provide a response with error context like data not in correct format, table not found or the table exceeds the limit. Apply a limit of 100 rows to the application.

2. Once uploaded, validated and sanitized by the server, navigate the user to the application page, append a unique ID for the session like '/application/FEI78X'. This page should only contain a navbar, body with flashcards and a clean footer. This page should be a client side page. Provide a red button button on top right side to exit the application and navigate the user to a 'thank you for using flashcards' page and provide a button to navigate to the homepage.

3. The user can swipe left, click left arrow from keyboard or tap on the left side of the flashcard to go to the previous card. Nothing should happen if the user actions this when on the first card. The user can also swipe right, click right arrow from keyboard or tap on the right side of the flashcard to go to the previous card. When a user swipe/click/tap right on the last card, it should read 'end of flashcards'.

4. When the user clicks on the card, the card should transform horizontally to the other side and show the text there. Reset to the first side when clicked/tapped/swiped left or right.

5. The height of the flashcard should be about 70vh, center aligned horizontally and vertically.

6. For future roadmap, conside options of public fashcards, pricing plans and email logins.
