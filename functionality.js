const loadLessons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    // .then((json) => console.log(json));
    .then((json) => displayLesson(json.data))

};


// level_no
// {
// "id": 101,
// "level_no": 1,
// "lessonName": "Basic Vocabulary"
// },


// words
// {
// "id": 4,
// "level": 5,
// "word": "Diligent",
// "meaning": "পরিশ্রমী",
// "pronunciation": "ডিলিজেন্ট"
// },

   const loadWords = (id) => {
        const url = `https://openapi.programming-hero.com/api/level/${id}`
        fetch(url)
        .then((res) => res.json())
        .then((data) => displayWords(data.data))
    };

const displayWords = (words) => {
    // get a container and empty it
    const wordContainer = document.getElementById('words-container')
    wordContainer.innerHTML = "";

    // get elment and empty it 
    words.forEach((word) => {
        const card = document.createElement("div")
        card.innerHTML = `
         <div class="bg-white p-6 rounded-xl shadow-xl h-full grid">
        <div class="">
        <h1 class="poppins font-bold text-[32px] py-2">${word.word}</h1>
        <p class="hindu font-medium py-2 text-[20px]">Meaning/Pronounciation</p>
        <h2 class="hindu font-semibold py-2 text-[22px]">${word.pronunciation} / ${word.meaning}</h2>
        </div>
        <div class="flex justify-between self-end">
          <div class="p-3 rounded-md bg-[#1A91FF20]"><i class="fa-solid fa-circle-exclamation "></i></div>
          <div class="p-3 rounded-md bg-[#1A91FF20]"><i class="fa-solid fa-volume-high "></i></div>
        </div>
      </div>
        `
        wordContainer.append(card);
        
    })
}

const displayLesson = (lessons) => {
    // get the container and empty it
    const lessonContainer = document.getElementById("lesson-container")
    lessonContainer.innerHTML = "";
    

    // get each elements
    for ( let lesson of lessons){
        // create new elements
        const btndiv = document.createElement("div");
        btndiv.innerHTML = `
        <button onclick= "loadWords(${lesson.level_no})" class="btn btn-outline btn-primary">
        <i class="fa-solid fa-book-open"></i>
        Lesson-${lesson.level_no}
        </button>
        `
        // append
    lessonContainer.append(btndiv);
    }
}



loadLessons();