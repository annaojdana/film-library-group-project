// Funkcja dla obsługi paginacji dla strony "My library"
export function getTotalPagesForMyLibrary() {
  // Wybranie głownego kontenera dla jego atrybutu [data-output-type]
  const markupOutput = document.querySelector('[data-output-type]');
  let whatToOutput = markupOutput.dataset.outputType;
  let idArray = []; // Zmienna dla przechowania rekordów z localStorage

  // Czekanie na pojawienie się zmiennej w whatToOutput
  const timer = setInterval(
    (waitForValue = () => {
      if (whatToOutput === '') {
        whatToOutput = markupOutput.dataset.outputType;
      } else {
        clearInterval(timer);

        whatToOutput = markupOutput.dataset.outputType;
        initRenderForMyLibrary();
      }
    }),
    10
  );

  function initRenderForMyLibrary() {
    // ! ! ! ! ! Zmienna dla ilości wyświetlanych kart na stronie ! ! ! ! !
    // By zmienić ilość wyświetlanych kart na stronie w My Library,
    // Wystarczy zmienić wartość zmiennej na żądaną ilość
    const CARDS_PER_PAGE = 3;

    // Zmienna dla tablicy renderowanych wyników na stronę
    let pageCardsArray = [];
    // Zmienna dla obliczenia całkowitej ilości stron
    let totalPages;
    // Zmienna dla indeksu pierwszej ładowanej karty
    const loadFromIndex = page * CARDS_PER_PAGE - CARDS_PER_PAGE;
    // Zmienna dla indeksu ostatniej ładowanej karty
    const loadToIndex = page * CARDS_PER_PAGE;

    // Załadowanie tablicy z ID filmów
    idArray = getFromLocalStorage(whatToOutput);

    // Operator obliczeń ilości kart na stronę
    const totalCards = idArray.length;

    if (totalCards < CARDS_PER_PAGE || totalCards === CARDS_PER_PAGE) {
      totalPages = 1;
    }
    if (totalCards > CARDS_PER_PAGE) {
      totalPages = Math.floor(totalCards / CARDS_PER_PAGE);
      if (totalCards % CARDS_PER_PAGE !== 0) {
        totalPages += 1;
      }
    }
    console.log('totalPages =', totalPages);

    // Wyciągnięcie IDków dla strony,
    // Tablica zostanie przekazana do renderu
    console.log(idArray);
    console.log(loadFromIndex);
    console.log(loadToIndex);
    pageCardsArray = idArray.slice(loadFromIndex, loadToIndex);
    console.log('Tablica IDków na stronie do renderu dla strony nr', page);
    console.log(pageCardsArray);
  }
}
