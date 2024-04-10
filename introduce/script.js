const department = document.getElementById("department")
const food = document.getElementById("food")
const drama = document.getElementById("drama")
const music = document.getElementById("music")

const result1 = document.getElementById("result1")
const result2 = document.getElementById("result2")


department.addEventListener('click', (event) => {
    result1.innerHTML = '<p>1전공 - 통계학과 (。╹ ᴗ ╹。)</p><iframe width="560" height="400" src="https://stat.hufs.ac.kr/stat/index.do" frameborder="0" allowfullscreen></iframe>';
    result2.innerHTML = '<p>이중전공 - 컴퓨터공학부 ᵔᵕᵔ</p><iframe width="560" height="400" src="https://computer.hufs.ac.kr/computer/index.do" frameborder="0" allowfullscreen>이중전공</iframe>';
});

food.addEventListener('click', (event) => {
    result1.innerHTML = '<p>멜젓파스타</p><img src="introduce/멜젓파스타.jpg" style = "size : auto;">';
    result2.innerHTML = '<p>바질 크림 고구마 파니니 (짱맛...*.☆⸜(⑉˙ᗜ˙⑉)⸝♡.*) </p><img src="introduce/바질고구마파니니.jpeg" style="max-width: 90%; height: auto;">'
});

drama.addEventListener('click', (event) => {
    result1.innerHTML = '<p>오펜하이머</p><iframe width="560" height="315" src="https://www.youtube.com/embed/Yx0Zl0QpzKY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    result2.innerHTML = '<p>이번 생은 처음이라</p><iframe width="560" height="315" src="https://www.youtube.com/embed/9qt9bK9y5aw?si=xtA9c07jhAi-Bg99" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
});

music.addEventListener('click', (event) => {
    result1.innerHTML = '<p>Silly Silly Love - 권진아(<3)</p><iframe width="560" height="315" src="https://www.youtube.com/embed/Zx4zjLjOlFU?si=6YmOplbdruu3lay2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
    result2.innerHTML = '<p>Monster - eldon(완전히 봄 노래 한번 들어봐주세요.. (❀╹◡╹)) </p><iframe width="560" height="315" src="https://www.youtube.com/embed/uvsPX4oKzzQ?si=vI1o7TbMUrNTlUGR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
});

