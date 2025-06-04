const animeByGenre = {
    shonen: [
        { title: "Баскетбол Куроко", image: "src/3.jpg", link: "manga-details-kuroko.html" },
        { title: "Первый шаг", image: "src/4.jpg", link: "manga-details-hajime.html" },
        { title: "Наруто", image: "src/5.jpg", link: "manga-details-naruto.html" },
        { title: "Атака титанов", image: "src/6.jpg", link: "manga-details-aot.html" },
        { title: "Клинок рассекающий демонов", image: "src/7.jpg", link: "manga-details-kimetsu-no-yaiba.html" },
        { title: "Магическая битва", image: "src/8.jpg", link: "manga-details-jujutsu-kaisen.html" },
        { title: "Блич", image: "src/9.jpg", link: "manga-details-bleach.html" },
        { title: "Синяя тюрьма", image: "src/10.jpg", link: "manga-details-blue-lock.html" }
    ],
   
    fantasy: [
        { title: "Токийский гуль", image: "src/1.jpg", link: "manga-details-tg.html" },
        { title: "Код Гиасс", image: "src/2.jpg", link: "manga-details-cg.html" },
        { title: "Стальной алхимик", image: "src/11.jpg", link: "manga-details-fma.html" },
        { title: "Берсерк", image: "src/12.jpg", link: "manga-details-berserk.html" },
        { title: "Мастера меча онлайн", image: "src/13.jpg", link: "manga-details-sao.html" },
        { title: "Может, я встречу тебя в подземелье?", image: "src/danmachi.jpg", link: "manga-details-danmachi.html" },
        { title: "О моём перерождении в слизь", image: "src/14.jpg", link: "manga-details-tensura.html" },
        { title: "Убийца гоблинов", image: "src/15.jpg", link: "manga-details-goblin-slayer.html" }
    ],
    
    adventure: [
        { title: "Ван Пис", image: "src/16.jpg", link: "manga-details-onepiece.html" },
        { title: "Хантер х Хантер", image: "src/17.jpg", link: "manga-details-hxh.html" },
        { title: "Магическая битва", image: "src/8.jpg", link: "manga-details-jujutsu-kaisen.html" },
        { title: "Сделано в Бездне", image: "src/18.jpg", link: "manga-details-made-in-abyss.html" },
        { title: "Гуррен-Лаганн", image: "src/19.jpg", link: "manga-details-gurren-lagann.html" },
        { title: "Невероятные приключения ДжоДжо", image: "src/20.jpg", link: "manga-details-jojo.html" },
        { title: "Пожиратель душ", image: "src/21.jpg", link: "manga-details-soul-eater.html" },
        { title: "Провожающая в последний путь Фрирен", image: "src/22.jpg", link: "manga-details-frieren.html" }
    ],
};

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    let genre = urlParams.get("genre") || "shonen";

    // Проверка хэша в URL
    const hash = window.location.hash.substring(1); // Убираем # из #fantasy
    if (hash && animeByGenre[hash]) {
        genre = hash; // Если есть хэш (например, #fantasy), используем его как жанр
    }

    const genreMap = {
        shonen: "Сёнэн",
        fantasy: "Фэнтези",
        adventure: "Приключения",
    };

    // Устанавливаем заголовок категории
    document.getElementById("category-title").textContent = genreMap[genre] || "Категория";

    // Отображаем мангу для выбранного жанра
    const animeGrid = document.getElementById("anime-grid");
    const animeList = animeByGenre[genre] || animeByGenre.shonen;

    animeGrid.innerHTML = ''; // Очищаем сетку перед заполнением
    animeList.forEach(anime => {
        const card = document.createElement("div");
        card.className = "manga-card";
        card.innerHTML = `
            <img src="${anime.image}" alt="${anime.title}">
            <h3>${anime.title}</h3>
            <a href="${anime.link}" class="details-btn">Подробнее</a>
        `;
        animeGrid.appendChild(card);
    });

    // Прокручиваем к секции с выбранным жанром
    const genreSection = document.getElementById(`genre-${genre}`);
    if (genreSection) {
        genreSection.scrollIntoView({ behavior: 'smooth' });
    }
});