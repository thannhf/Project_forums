const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const sidebar = document.querySelector('.container .sidebar');

document.addEventListener("DOMContentLoaded", function() {
    const lyricsButton = document.querySelector('.lyrics');
    const lyricsSong = document.querySelector('.lyrics-song');
    const lyrics = document.querySelector('.lyrics');
    const wave = document.querySelectorAll('.waves .wave');
    const listener = document.querySelector('.buttons-action');
    const playering = document.querySelector('.btn-toggle-play');
    const paused = document.querySelectorAll('.waves .wave.paused');
    const musiclist = document.querySelector('.music-items');

    lyricsButton.addEventListener('click', function() {
        lyricsSong.classList.toggle('hidden');
        lyrics.classList.toggle('hidden-player');
    });

    function expandWave() {
        wave.forEach(function(element) {
            element.style.width = '6px';
            paused.forEach(function(element) {
                element.classList.toggle('paused')
            });
        }); 
    }

    // musiclist.addEventListener('click', expandWave);
    listener.addEventListener('click', expandWave);
    playering.addEventListener('click', expandWave);
    musiclist.forEach(function(item) {
        item.addEventListener('click', expandWave);
    });
});

menuOpen.addEventListener('click', () => sidebar.style.left = '0');
menuClose.addEventListener('click', () => sidebar.style.left = '-100%');

// Các bước cần thực hiện
 /**
  * 1. Render songs
  * 2. Scroll top
  * 3. Play / pause/ seek
  * 4. CD rotate
  * 5. Next / prev
  * 6. Random
  * 7. Next / Repeat when ended
  * 8. Active song
  * 9. Scroll active song into view
  * 10. Play song when click
  */

// Javascript Music

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const PlAYER_STORAGE_KEY = "Hun";
const player = $('.container');

// const cd = $('.right-section .music-player .top-section .song-info .cd');
// const heading = $('.right-section .music-player .top-section .song-info .description h3');
// const cdThumb = $('.right-section .music-player .top-section .song-info .cd .cd-thumb');

const cd = $('.cd');
const heading = $('.description h3');
const cdThumb = $('.cd-thumb');
const audio = $('#audio');
const playBtn = $('.btn-toggle-play');
const progress = $("#progress");
const prevBtn = $(".btn-prev");
const nextBtn = $(".btn-next");
const randomBtn = $(".btn-random");
const repeat = $(".btn-repeat");
const repeatBtn = $(".bx-repeat");
const atomBtn = $(".bx-atom");
const playlist = $('.music-items');
const leftimg = $('.left-img');
const playlisten = $('.buttons-action');
const righting = $('.info h4');
const icon = $('.icon');
const currentTime = $('.time-end')
const duration = $('.time-start')
const volume = $('.volumne');
const volumeProgress = $('.volumne__amount');
const mute = $('.bxs-volume-full');
const unmute = $('.bxs-volume-mute');
const songname = $('.lyrics-song__name');
const lyricsong = $('.lyrics-songs');

// list music
const items = $('.items');
const pop = $('.item.pop');
const poplist = $('.item.pop .music-items__list');

// const popSongs = [];
const beat = $('.item.beat');
const beatlist = $('.item.beat .music-items__list');
const remix = $('.item.remix');
let beatSongs = [];
let popSongs = [];
let remixSongs = [];
let rapSongs = [];
let indieSongs = [];
let periodSongs = [];
const remixlist = $('.item.remix .music-items__list');
const rap = $('.item.rap');
const raplist = $('.item.rap .music-items__list');
const indie = $('.item.indie');
const indielist = $('.item.indie .music-items__list');
const period = $('.item.period');
const periodlist = $('.item.period .music-items__list');
const listmusic = $('.music-items__list');
const itemsgenre = $('.items .item');
const seeall = $('.genres .header a');

// console.log(playBtn);

const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    isatom: false,
    volumeAmount: 1,
    isgenre : false,
    islistSelected: false, // Biến cờ xác định danh sách đang được chọn
    currentPlaylistState: { currentIndex: 0 }, // Trạng thái hiện tại của danh sách playlist
    
    config: JSON.parse(localStorage.getItem(PlAYER_STORAGE_KEY)) || {},

    songs: [
        {
            name: "100 Years Love",
            singer: "AnhVu",
            time: "",
            path: "assets/music/y2mate.com - 100 Years Love  NamDuc AnhVu Remix.mp3",
            image: "assets/img/100y.jpg",
            lyrics:"Vài cơn nắng phiêu du theo làn khói mong manh<br>Là công chúa hay nàng tiên nữ ở trong tranh<br>Gió cuốn mây mang theo tình ta đến mây ngàn<br>Để anh hát cho em những giai điệu ngân vang<br>Nàng ơi em có muốn theo anh ta về chốn phương xa<br>Về một nơi yên bình mà chỉ có đôi ta<br>Lá khẽ đong đưa trên cành cây chốn xa xăm<br>Em có muốn theo anh ta về chốn trăm năm<br>Vài cơn nắng phiêu du theo làn khói mong manh<br>Là công chúa hay nàng tiên nữ ở trong tranh<br>Gió cuốn mây mang theo tình ta đến mây ngàn<br>Để anh hát cho em những giai điệu ngân vang<br>Em có biết là vài nụ hồng còn vương khi môi em cười<br>Nhưng em yên tâm khi mà anh yêu là anh xác định sẽ cưới<br>Anh hứa sẽ không bao giờ để giọt lệ trên mi em phải rơi<br>Và anh hứa sẽ không đánh mất em khi ta ở tuổi đôi mươi<br>Vài câu nói đường mật của anh có thể khiến em say đắm<br>Nhưng em có thấu cảm giác ngọt ngào khi đôi ta đan tay nắm<br>Anh thì không có gì ngoài một trái tim chân thành<br>Và em có muốn xây đắp tương lai ngôi nhà hạnh phúc cùng anh<br>Vài cơn nắng phiêu du theo làn khói mong manh<br>Là công chúa hay nàng tiên nữ ở trong tranh<br>Gió cuốn mây mang theo tình ta đến mây ngàn<br>Để anh hát cho em những giai điệu ngân vang<br>Nàng ơi em có muốn theo anh ta về chốn phương xa<br>Về một nơi yên bình mà chỉ có đôi ta<br>Lá khẽ đong đưa trên cành cây chốn xa xăm<br>Em có muốn theo anh ta về chốn trăm năm<br>Dù ngoài kia có bão có giông thì đã có anh ở đây rồi<br>Trầu cau nhà anh đã có chỉ chờ em yêu gật đầu một cái thôi<br>Anh biết em vẫn mơ ước về một ngôi nhà mà chúng mình chung đôi<br>Vậy thì gật đầu nhanh đi anh đưa em về rồi chúng mình chung gối<br>Em muốn nhẫn cưới bằng vàng hay là hai bốn cara<br>Em muốn đi trên con Trevita hay là con xe Honda<br>Đối với em thì tình cảm này của anh sẽ luôn là biển cả<br>Thiên thần có ở trên trời anh cũng kéo xuống chúc phúc đôi ta<br>Vài cơn nắng phiêu du theo làn khói mong manh<br>Là công chúa hay nàng tiên nữ ở trong tranh<br>Gió cuốn mây mang theo tình ta đến mây ngàn<br>Để anh hát cho em những giai điệu ngân vang<br>Nàng ơi em có muốn theo anh ta về chốn phương xa<br>Về một nơi yên bình mà chỉ có đôi ta<br>Lá khẽ đong đưa trên cành cây chốn xa xăm<br>Em có muốn theo anh ta về chốn trăm năm<br>Vài cơn nắng phiêu du theo làn khói mong manh<br>Là công chúa hay nàng tiên nữ ở trong tranh<br>Gió cuốn mây mang theo tình ta đến mây ngàn<br>Để anh hát cho em những giai điệu ngân vang<br>Hah hah <br>hah hah",
            genre: "Remix"
        },{
            name: "Hẹn Em Ở Lần Yêu Thứ Hai",
            singer: "Nguyenn, Đặng Tuấn Vũ",
            time: "",
            path:"assets/music/HenEmOLanYeuThu2-NguyennDangTuanVu-8865500.mp3",
            image: "assets/img/Henemolanyeuthu2.jpg",
            lyrics:" Mọi chuyện rồi cũng sẽ ổn thôi đúng không anh ơi? <br>Là điều em nói lúc em muốn chúng ta xa rời <br>Anh không *** trả lời tin nhắn ấy <br>Cứ giả vờ như mình chẳng nhìn thấy đâu <br>Anh thương cho mối tình của hai đứa <br>Phải kết thúc như vậy sao? <br> <br>Thời gian trôi như gió vội bay qua trời <br>Nhiều chuyện anh cứ chôn thật sâu chẳng muốn mở lời <br>Ngày ngày lo cho tương lai <br>Nhưng em cứ ngỡ anh đã có ai <br>Bên nhau cả quãng đường dài <br>Mà giờ em nói em muốn dừng lại <br> <br>Anh phải làm gì để em đừng nghĩ: <p>Em không quan trọng</p> <br>Nuốt hết đắng cay vào trong lòng <br>Cuộc đời anh như con số 0 <br>Cha mẹ già vất vả, đêm ngủ chẳng ngon <br>Phận làm con anh đây chữ hiếu chưa tròn <br>Anh phải bù đắp cho em bao nhiêu để em chẳng còn thấy thiếu? <br> <br>Dành hết cả thanh xuân này cho nhau, liệu còn bên nhau lúc mai sau? <br>Có phải ngay lúc đầu, em đã chẳng chọn anh đâu? <br>Anh vẫn muốn ngày thành công, sẽ được che chở em <br>Còn em đợi ngày đó để có thể yên tâm rời xa anh <br>Liệu có quá nhẫn tâm? <br><br>Mọi chuyện buồn, mình sẽ vượt qua phải không em à? <br>Là điều anh muốn, nhưng anh chẳng thể nói ra <br>Anh không muốn mình, phải quên mất hết <br>Chẳng muốn mình trôi khỏi ký ức của em <br>Anh thương cho người con gái, cạnh bên anh dẫu chẳng có tương lai <br>Có những đoạn đường, ta buộc phải bước một mình em à <br>Có những nỗi niềm anh gửi vào gió, chẳng muốn nói ra <br>Không ai muốn phải chia xa, rồi làm bạn với người mình yêu nhất cả <br>Bên nhau bao lâu vậy mà, một vài câu nói, em bỗng xa lạ <br> <br>Anh phải làm gì để em đừng nghĩ: Em không quan trọng <br>Nuốt hết đắng cay vào trong lòng <br>Cuộc đời anh như con số 0 <br>Cha mẹ già vất vả, đêm ngủ chẳng ngon <br>Phận làm con anh đây chữ hiếu chưa tròn <br>Anh phải bù đắp cho em bao nhiêu để em chẳng còn thấy thiếu?  <br>Anh phải làm gì để em đừng nghĩ em không quan trọng <br>Nuốt hết đắng cay vào trong lòng cuộc đời anh như con số 0 <br>Em vẫn còn thương anh đúng không? <br>Cuộc đời bao lo toan anh chẳng muốn phiền lòng <br>Năm tháng có quay lại không? <br>Hay chỉ cho ta thêm một khoảng trống <br> <br>Dành hết thanh xuân này bên nhau, bây giờ thanh xuân ấy nơi đâu? <br>Có phải ngay lúc đầu, ta vốn chẳng dành cho nhau? <br>Anh không muốn em phải đau, phải đợi anh quá lâu <br>Chờ đợi từng lời hứa, anh chẳng thể tin bản thân mình được nữa <br>Vậy ta kết thúc được chưa? <br><p>Hẹn em ở lần yêu thứ 2</p> ",
            genre: "Pop",
        },{
            name: "Lộn Xộn 2",
            singer: "Đen",
            time: "",
            path: "assets/music/Lonxon2.mp3",
            image:"assets/img/Lonxon2.jpg",
            lyrics:"Make me swoon make me sway (yo) <br>With your arms with your rhythm (you know) <br>Let us dance in the rain in the war in the prison <br>Yeah babe anh trở về lại với trường cũ <br>Anh lại viết nhạc vào cái giờ mà mọi người thường ngủ <br>Cảm thấy trống trải dù căn phòng này có đủ giường tủ <br>Hôm nay anh thấy buồn buồn hơn cả nhạc Trường Vũ <br>Chơi nhạc mới đó vậy mà đã gần mười năm rồi <br>Anh buồn vì có những ngày cành lá tâm tư anh lười đâm chồi <br>Buồn những muộn phiền khiến cho đôi khi lòng này cười không nổi <br>Buồn vì có những ngày bất ổn nhưng không có đến một người thăm hỏi oh <br>Miền Bắc mùa này mưa phùn thời tiết khó chịu lắm em <br>Anh đi loanh quanh ngoài đường đôi converse đã lấm lem <br>Trong đầu anh không định hướng lời nhạc này cũng mông lung <br>Bây giờ anh đứng ở đây nhưng tâm hồn ở trên không trung <br>Thật may là anh có rap có nhịp beat để thả vào <br>Như một tấm đệm êm oh mỗi khi mệt anh ngả vào <br>Đã từng hi vọng và cũng đã từng thất vọng nhiều (oh) <br>Dù có một ngày tất cả trôi qua nhẹ như một giấc mộng chiều oh <br>Những quả bóng bay rồi thì cũng sẽ có ngày bị xẹp mất <br>Những ngày còn được chơi rap chắc chắn là những ngày đẹp nhất (yoh) <br>Và tao lại feel như là cơn gió bay trong buổi chiều mượt mà (what) <br>Mừng như thằng nhóc bỗng được mang đến được cho thật nhiều hộp quà (what) <br>Trở về trường cũ cho tao có thể gửi gắm nhiều điều thật thà (yeah) <br>Mỗi ngày còn rap vui như là Lục Vân Tiên gặp Kiều Nguyệt Nga (ha há) <br>Chẳng có gì đáng tự hào khi có những ngày đầy cực khổ <br>Như nước mày uống còn ko nhiều bằng mồ hôi tao từng đổ <br>Tao là thằng con lớn ông bà già tao ai lo <br>Đã có những ngày ăn bữa hôm nay chỉ mong ngày mai no <br>Ai thì cũng như ai muốn có tiền nhà và xe <br>Đêm nằm thật yên giấc không muốn có phiền hà mà care <br>Ai thì cũng như ai thôi bằng cách này hoặc cách khác <br>Và tao thay đổi cuộc đời của tao bằng cách rap <br>Viết một bài nhạc mệt như đi cày trong trưa hè tháng sáu <br>Chất xám tao đưa vào đó thật ra không khác gì bán máu <br>Mày không thể nào mà đem đơn vị bình thường ra đo đạc <br>Âm nhạc của tao giàu có không khác gì vàng trong kho bạc <br>Đừng phán xét tao khi đời của tao sẽ chẳng ai sống cho <br>Mấy thằng thùng rỗng thì thường hay cho mình là cái trống to <br>Nhiều thằng đi bằng hai chân nhưng mà thật ra là giống bò <br>Cái chất của tao không thể nhầm lẫn dù cho tao hoá thành đống tro <br>",
            genre: "Rap",
        },{
            name: "Những Lời Hứa Bỏ Quên",
            singer: "Vũ, Dear Jane",
            time: "",
            path:"assets/music/Nhungloihuaboquen.mp3",
            image:"assets/img/Nhungloihuaboquen.jpg",
            lyrics: "[Lời] <br>Nếu hai ta không quên ngàу ấу, ngàу những đôi môi trao nhau không lời <br>Thì niềm đau cũng đã trôi hết đi qua bao tháng năm anh với em <br>Lúc gặp nhau con tim nói không nên lời và khi thời gian trôi như mâу baу về trời <br>Anh đem theo giấc mơ nàу để rồi mong ngàу ta chung đôi <br> <br>[Điệp khúc] <br>Anh sẽ nhớ mong một người là chính em <br>Sẽ nhớ thương thật nhiều điều vấn vương <br>Đôi mắt xưa còn đượm buồn <br>Theo vệt thời gian đã hóa tan theo làn sương <br>Hai ta có trên đường đời nhìn thấу nhau <br>Trong phút giâу nghẹn ngào thì anh chẳng thể bước tới <br>Chào em như trong giấc mơ, giấc mơ ta được có nhau <br> <br>[Chuуển tiếp cuối bài] <br>Thức giấc lúc khi trời mưa <br>Chuуện уêu thương ùa về khiến anh nhận ra <br>Kí ức đón đưa ngàу xưa <br>Chuуện đôi ta nghẹn ngào tình cờ <br>Đợi chờ để được quaу lại giâу phút đầu <br> <br>[Điệp khúc] <br>Anh sẽ nhớ mong một người là chính em <br>Sẽ nhớ thương thật nhiều điều vấn vương <br>Đôi mắt xưa còn đượm buồn <br>Theo vệt thời gian đã hóa tan theo làn sương <br>Hai ta có trên đường đời nhìn thấу nhau <br>Trong phút giâу nghẹn ngào thì anh chẳng thể bước tới <br>Chào em như trong giấc mơ, giấc mơ ta được có nhau",
            genre: "Beat",
        },{
            name: "Tìm Nhau Không",
            singer: "Tăng Phúc",
            time: "",
            path:"assets/music/TimNhauKhong-TangPhuc-7828203.mp3",
            image:"assets/img/Timnhaukhong.jpg",
            lyrics: "Tìm nhau không nếu mai này <br>Mình lỡ cách xa trời mây <br>Lỡ sẽ không nhìn thấy nhau <br>Giữa dòng đời nhiều đổi thay <br>Tìm nhau không nếu một ngày <br>Mình nuối tiếc những nồng say <br>Đâu phải ai cũng sẽ tìm được hạnh phúc <br>Dù chịu đựng đắng cay <br>Mình không cùng chung ước mơ <br>Mình không về chung bến bờ <br>Mình không thể cùng viết nên câu chuyện <br>Mà ta từng hứa với nhau <br>Rồi ai sẽ ôm lấy ai <br>Rồi ai sẽ lau mắt ai <br>Rồi ai sẽ nhắc đến ai <br>Trong suốt quãng đời còn lại <br>Mà cả hai chẳng thể bên nhau <br>Tìm nhau không nếu mai này <br>Mình lỡ cách xa trời mây <br>Lỡ sẽ không nhìn thấy nhau <br>Giữa dòng đời nhiều đổi thay <br>Tìm nhau không nếu một ngày <br>Mình nuối tiếc những nồng say <br>Đâu phải ai cũng sẽ tìm được hạnh phúc <br>Dù chịu đựng đắng cay <br>Mình không cùng chung ước mơ <br>Mình không về chung bến bờ <br>Mình không thể cùng viết nên câu chuyện <br>Mà ta từng hứa với nhau <br>Rồi ai sẽ ôm lấy ai <br>Rồi ai sẽ lau mắt ai <br>Rồi ai sẽ nhắc đến ai <br>Trong suốt quãng đời còn lại <br>Mà cả hai chẳng thể bên nhau <br>Mình không cùng chung ước mơ <br>Mình không về chung bến bờ <br>Mình không thể cùng viết nên câu chuyện <br>Mà ta từng hứa với nhau <br>Rồi ai sẽ ôm lấy ai <br>Rồi ai sẽ lau mắt ai <br>Rồi ai sẽ nhắc đến ai <br>Trong suốt quãng đời còn lại <br>Mà cả hai chẳng thể bên nhau <br>Rồi ai sẽ nhắc đến ai <br>Trong suốt quãng đời còn lại <br>Mà cả hai chẳng thể bên nhau<br>",
            genre: "Pop",
        },{
            name: "Có Cơn Mưa Nào Đôi Mình Đi Qua",
            singer: "M/n",
            time: "",
            path:"assets/music/Id072019-WN-10597501.mp3",
            image:"assets/img/Coconmuanaodoiminhdiqua.jpg",
            lyrics:"Có cơn mưa nào đôi mình đi qua<br>Anh đến bên em<br>Ngày đôi mình chia xa<br>Mỗi lá rơi bên hồ<br>Nỗi cô đơn lớn lên Mùa thu ấy<br>Em không còn bên cạnh anh nữa<br>Anh vẫn đứng nơi đây<br>Chờ em cùng cơn mưa Chúng ta sau này<br>Chẳng có chúng ta bây giờ<br>Một người âm thầm<br>Đứng dưới mưa nhìn em<br>Một người giữa thành phố Vẫn cứ chờ em<br>Vì sao cứ nơi đó mà<br>Anh dần xa nơi đâu<br>Giờ này chỉ nỗi nhớ<br>Cứ vơi nhiều thêm<br>Giờ này chỉ mình ta<br>Với những tháng năm dài<br>Có khi em chẳng còn yêu anh<br>Như trái tim ta từng chung lối đi<br>Anh đi một vòng thị trấn<br>Trên con đường cũ ta đi<br>Vòng bánh xe như thế cứ chạy<br>Hai tuyến đường ngược chiều ta nghĩ<br>Chắc em cũng quên tên đường này rồi<br>Nhánh hoa sữa nhẹ bay đi khắp lối<br>Em cũng giống như anh của ngày trước<br>Hai con đường về nhà khi sắp tối<br>Anh còn nhớ hồi đó ta đi học<br>Lúc tan trường thì em ngồi sau xe<br>Lúc em buồn thì anh hay trêu chọc<br>Bảo em cười kể chuyện cho nhau nghe<br>Rồi vào quán mua món mà em thích<br>Em mỉm cười làm anh cũng vui lây<br>Nhưng hồi đó thì vẫn là hồi đó Anh cảm ơn em<br>Đã để lại chuỗi ngày<br>Một người âm thầm<br>Đứng dưới mưa nhìn em<br>Một người giữa thành phố Vẫn cứ chờ em<br>Vì sao cứ nơi đó mà<br>Anh dần xa nơi đâu<br>Giờ này chỉ nỗi nhớ<br>Cứ vơi nhiều thêm<br>Giờ này chỉ mình ta<br>Với những tháng năm dài<br>Có khi em chẳng còn yêu anh<br>Như trái tim ta từng chung lối đi<br>Có cơn mưa nào đôi mình đi qua<br>Anh viết cho em<br>Bài ca mùa yêu xa<br>Mỗi lá rơi bên hồ<br>Nỗi cô đơn lớn lên Mùa thu ấy<br>Anh không còn bên cạnh em nữa<br>Em vẫn đứng nơi đây<br>Chờ anh cùng cơn mưa<br>Chúng ta sau này<br>Chẳng có chúng ta bây giờ",
            genre: "Beat",
        },{
            name: "Rồi Ta Sẽ Ngắm Pháo Hoa Cùng Nhau",
            singer: "O.lew",
            time: "",
            path: "assets/music/RoiTaSeNgamPhaoHoaCungNhau-OlewVietNam-8485329.mp3",
            image:"assets/img/Roitasengamphaohoacungnhau.jpg",
            lyrics: "Người đón em đến bên đời là điều tuyệt nhất để khiến em cười <br>Người cứ như ô che mưa, như mây bay qua cho ngày trong xanh. <br>Ở đây có anh này em thật nhỏ bé trong chiếc ôm này <br>Ấm hơn chăn mà, còn thơm hơn hoa mà sao em nỡ rời xa. <br> <br>Chorus: <br>Rồi ta sẽ ngắm pháo hoa cùng nhau trên tầng thượng phía bên kia dòng sông <br>Vạn lời chúc ấm êm cho nhau là sẽ thành đôi sau vài cái xuân <br>Mong trời sẽ thương em thương anh và cho đôi mình mãi bên nhau dài lâu <br>Cho dù thế gian kia cuồng quay trăm bộn bề ta vẫn không cách rời. <br> <br>Thấy anh đứng đây rồi, mắt cười cong khoé mi hý đây rồi <br>Càng đắm say thế nên em lại sợ một mai mình rời xa nhau. <br>Anh thơm vào má em này cho chừa cái thói nói vớ vẩn này <br>Mặt ngây ngô ra rồi còn anh thì đứng cười <br>Đây có phải là điều tuyệt nhất. <br> <br>Chorus: <br>Rồi ta sẽ ngắm pháo hoa cùng nhau trên tầng thượng phía bên kia dòng sông <br>Vạn lời chúc ấm êm cho nhau là sẽ thành đôi sau vài cái xuân <br>Mong trời sẽ thương em thương anh và cho đôi mình mãi bên nhau dài lâu <br>Cho dù thế gian kia cuồng quay trăm bộn bề ta vẫn không cách rời. <br> <br> <br>Dù mai mặt trời không chiếu sáng trên hành tinh này <br>Thì em vẫn sẽ tìm thấy anh bằng trái tim này <br>Dù mai đời,người dẫu có cách ngăn tình ta <br>Thì em xin một lần không tên, nguyện yêu anh một đời an yên.<br>",
            genre: "Beat",
        },{
            name: "Đi  Về Nhà",
            singer: "JustaTee, Đen",
            time: "",
            path: "assets/music/y2mate.com - Đen x JustaTee  Đi Về Nhà MV.mp3",
            image:"assets/img/Divenha.webp",
            lyrics: "Đường về nhà là vào tim ta <br>Dẫu nắng mưa gần xa <br>Thất bát vang danh <br>Nhà vẫn luôn chờ ta <br>Đường về nhà là vào tim ta <br>Dẫu có muôn trùng qua <br>Vật đổi sao dời <br>Nhà vẫn luôn là nhà (đi về nhà) <br>Ya lao vào đời và kiếm cơm lao vào đời tìm cơ hội <br>Những thành thị thường lấp lánh còn đêm thành thị thường trơ trọi <br>Như mọi đứa trẻ khác lớn lên muốn đi xa hoài (xa hoài) <br>Nhà thì vẫn ở yên đó đợi những đứa con đang ra ngoài <br>Bước ra ngoài mới biết không ở đâu bằng ở nhà (ở nhà) <br>Biết có gì để mất trước khi sẵn sàng mở quà (mở quà) <br>Không phải là võ sĩ nhưng mà phải giỏi đấu đá <br>Nhiều khi kiệt sức chỉ vì gắng giữ mình không xấu xa <br>Đôi lúc bỗng thấy đồng cảm với Mai An Tiêm <br>Bước chân ra là sóng gió chỉ có nhà mãi an yên <br>Ngoài kia phức tạp như rễ má và dây mơ (dây mơ) <br>Về nhà để có lúc cho phép mình được ngây thơ <br>Mang theo bao náo nức lên chiếc xe này <br>Trọn một niềm thao thức xuân níu đêm ngày <br>Cùng dòng người trên phố mang sắc mai hương đào <br>Tìm về nơi ấm êm <br>Đường về nhà là vào tim ta <br>Dẫu nắng mưa gần xa <br>Thất bát vang danh <br>Nhà vẫn luôn chờ ta <br>Đường về nhà là vào tim ta <br>Dẫu có muôn trùng qua (dẫu muôn trùng qua) <br>Vật đổi sao dời (vật đổi sao dời) <br>Nhà vẫn luôn là nhà <br>Về ngôi nhà có góc vườn nhiều chó nhiều gà <br>Đám bạn nói con khó chiều <br>Mà lại thích gió trời hơn gió điều hoà ah <br>Về ăn cơm mẹ nấu về mặc áo mẹ may <br>Về đưa ba ra chợ mua cây đào cây mai về bày <br>Cả năm trời làm việc nhiều khi rã rời như cái máy oh <br>Về nhà thấy áp lực nhẹ như bấc thổi cái là bay (thổi cái là bay) <br>Ấm êm hơn bếp lửa ngọt bùi hơn lúa non <br>Nhà vẫn luôn ở đó mong chờ những đứa con <br>Dẫu cho mưa cho nắng vẫn không bao giờ nề hà <br>Hạnh phúc chỉ đơn giản là còn được về nhà oh <br>Hạnh phúc đi về nhà <br>Cô đơn đi về nhà <br>Thành công đi về nhà <br>Thất bại đi về nhà <br>Mệt quá đi về nhà <br>Mông lung đi về nhà <br>Chênh vênh đi về nhà <br>Không có việc gì vậy thì đi về nhà <br>Không có việc gì vậy thì đi về nhà <br>Đi về nhà đi về nhà <br>Đường về nhà là vào tim ta <br>Dẫu nắng mưa gần xa <br>Thất bát vang danh <br>Nhà vẫn luôn chờ ta <br>Đường về nhà là vào tim ta <br>Dẫu có muôn trùng qua <br>Vật đổi sao dời <br>Nhà vẫn luôn là nhà <br>Nhà có thể lớn có thể nhỏ có thể không khang trang <br>Cha mẹ nào cũng muốn con được sống đàng hoàng <br>Lớn lên làm người mong một tương lai sáng lạng ",
            genre: "Pop",
        },{
            name: "Đưa Nhau Đi Trốn",
            singer: "Đen, Linh Cáo",
            time: "",
            path: "assets/music/y2mate.com - Đen  Đưa Nhau Đi Trốn ft Linh Cáo MV.mp3",
            image:"assets/img/Duanhauditron.jpg",
            lyrics: "Bố em hút rất nhiều thuố<br>Mẹ em khóc mắt lệ nho<br>Bố anh thì đi lại còn mẹ anh gọi điện thoại đến từng nh<br>Nhiều ngày rồi mình không về, không liên lạc được gì c<br>Chỉ vỏn vẹn mảnh giấy đừng lo, đêm nay con đi chơi x<br>Em ơi đi trốn với an<br>Mình đi đến nơi có biển bạc núi xan<br>Chạy con xe anh chở em tròng tràn<br>Mình phóng tầm mắt ngắm chân trời mới toan<br>Mình ngủ một giấc mà không cần báo thứ<br>Giờ này mọi khi anh đang trong ca trự<br>Em thì đang lo ngày mai giảng đườn<br>Ôi những thứ chán chường không tẹo nào háo hứ<br>Mình rời thành phố chật chội náo nứ<br>Nơi mà cả việc thở cũng làm ta lao lự<br>Mơ những con đường xa làm anh thấy rạo rự<br>Muốn đưa em đi trốn đến tận cùng trái đấ<br>Anh chẳng cần biết là ngày nắng đẹp rạng ngờ<br>Hay gió về, hay bão táp mưa rơ<br>Ngày mình đi với nhau ấy là ngày đẹp trờ<br>Thì theo anh đi trốn em ơ<br<br>[Chorus: Linh Cáo<br>Thật lòng em mơ, mơ cùng anh đi đến tận cùn<br>Tận cùng chân mây vượt núi cao hay biển sâ<br>Biết mấy là yêu cho vừ<br>Giết mấy thời gian cho vừ<br>Khi yêu ta mơ về nha<br>Để thấy lắm lúc lòng mình nhẹ nhiều kh<br>Muốn ném hết tất cả để mà đ<br>Một lần mình sống như những đứa nhóc không nh<br>Sớm thức dậy ở một nơi xa",
            genre: "Rap",
        },{
            name: "Vì Ngày Hôm Nay Em Cưới Rồi",
            singer: "Khải Đăng",
            time: "",
            path: "assets/music/y2mate.com - Hôm Nay Em Cưới Rồi  Khải Đăng  Thanh Hưng  Live Version.mp3",
            image:"assets/img/Vingayhomnayemcuoirooi.jpg",
            lyrics: "Muốn đi vài hôm xa chính nơi ta từng có phút êm đềm trước ngày giông tố đến tìm<br>Đến khi nhận ra nên quý hơn những ngày tháng<br> sống bên nhau thì mình muộn mất rồi<br>Giờ nay em có lẽ rất vui, <br>cùng người em yêu chung bước không quay lại nhìn<br>Dù soa thì anh vẫn mong em luôn bình yên <br>và xin lỗi vì chẳng đến chúc phúc cho em<br>Vì ngày hôm nay em cưới rồi <br>vụn vỡ vết thương đau mãi trong tim<br>Người đàn ông may mắn ấy từ nay đã có em<br>Chỉ muốn đến đây gặp em một lần <br>để thấy em hạnh phúc thế nào rồi anh đi<br>Vì ngày hôm nay em cưới rồi mai sau anh sống thế nào<br>Một người đã mang cả thế giới sánh đôi vình yêu mới<br>Ngày em đẹp nhất trên đời là ngày chúng ta xa một người<br>Nợ duyên đến nay mình trả hết rồi<br><br>Dù có một đời anh cố gắng thì vẫn không sao giữ em<br>Một người đã mang cả thế giới sánh đôi với tình yêu mới<br>Ngày em đẹp nhất trên đời là ngày chúng ta xa một người<br>Nợ duyên đến nay mình trả hết rồi<br>",
            genre: "Pop",
        },{
            name: "Cắt Đôi Nỗi Sầu",
            singer: "Tăng Duy Tân",
            path: "assets/music/y2mate.com - TĂNG DUY TÂN  CẮT ĐÔI NỖI SẦU ft DRUM7  OFFICIAL MUSIC VIDEO.mp3",
            image:
                "assets/img/Catdoinoisau.jpg",
            lyrics: "Ϲắt đôi nỗi sầu Anh buông taу cắt đôi nỗi sầu<br>Anh cắt đi cả bóng hình<br>Anh mang theo bên mình bấу lâu...<br>Ɲỗi đau đã cạn<br>Ϲơn mưa trong tim cũng đã tan<br>Anh bán đi mọi nỗi buồn<br>Để chẳng còn gì ngoài thanh thản...<br>Ɛm ơi anh muốn<br>Mỗi tối đến anh không phải thất tình<br>Muốn quên một bóng hình<br>Ɛm để lại, trong tim...<br>Anh không thể đếm<br>Đã có bấу nhiêu đêm phải kiếm tìm<br>Kiếm thêm một lí do<br>Ϲho cuộc tình không tên...<br>[Điệp khúc]<br>Anh đã thức, thức xuуên đêm<br>Anh đã cố gắng để quên em<br>Ɲhưng anh biết<br>Trong con tim anh không đành...<br>Màn đêm xuống, muốn buông taу<br>Ѕầu giăng kín nỗi nhớ đong đầу<br>Anh đang chết dần ngàу từng ngàу<br>Ɛm ơi...<br>[Verse 2]<br>Ɲhớ em rất nhiều<br>Ɛm ơi anh nhớ em rất nhiều<br>Anh nhớ hơn cả nhớ nhà<br>Ɲhưng em đâu nhớ gì đến ta...<br>Lúc уêu chẳng hiểu<br>Khi chia li sẽ đau rất nhiều<br>Đau đến trong tận linh hồn<br>Và cuộc đời một màu băng giá...<br>Ɛm ơi anh muốn<br>Mỗi tối đến anh không phải thất tình<br>Muốn quên một bóng hình<br>Ɛm để lại, trong tim...<br>Anh không thể đếm<br>Đã có bấу nhiêu đêm phải kiếm tìm<br>Kiếm thêm một lí do<br>Ϲho cuộc tình không tên...<br>[Điệp khúc]<br>Anh đã thức, thức xuуên đêm<br>Anh đã cố gắng để quên em<br>Ɲhưng anh biết<br>Trong con tim anh không đành...<br>Màn đêm xuống, muốn buông taу<br>Ѕầu giăng kín nỗi nhớ đong đầу<br>Anh đang chết dần ngàу từng ngàу<br>Ɛm ơi...",
            genre: "Beat",
        },{
            name: "Cha Già Rồi Đúng Không",
            singer: "ALI HOÀNG DƯƠNG",
            path: "assets/music/y2mate.com - CHA GIÀ RỒI ĐÚNG KHÔNG  ALI HOÀNG DƯƠNG  OFFICIAL MV  OST BỐ GIÀ 2021.mp3",
            image:"assets/img/Chagiaroidungkhong.webp",
            lyrics: "Cha thường kể nhiều lắm về thời niên thiếu<br>Cha hay đạp xe mỗi sáng cóc cách tới trường<br>Ngay khu phố trước nhà,<br>Có cụ già bán bánh thơm lừng<br>Những chiếc bánh bao tròn ấm áp khói bay<br><br>Mẹ kể ngày xưa thời đấy trông mẹ đẹp lắm<br>Cha con say đắm say đuối nhớ tương hoài tư<br>Ôi những tối hẹn hò, chiếc xe đạp đưa đón nhau về<br>Những năm tháng tươi đẹp của tuổi thanh xuân<br><br>[ĐK1]<br>Cha già rồi đúng không?!<br>Mắt kém, tay chân thì run<br>Cha già rồi đúng không?!<br>Sao cứ nói lung tung chuyện cũ<br>Cả cuộc đời với cha<br>Chỉ sống để yêu một người là mẹ của các con thôi!<br>Có lẽ, cuộc đời còn có bao nhiêu lần 10 năm nữa...<br><br>(Từ là từ phu tướng. Bảo kiếm sắc phong lên đàng.<br>Vào ra luống trông tin nàng. Năm canh mơ màng)<br><br>Dạ cổ hoài lang tình tang cha thường hay hát,<br>Cha hay nhắc tôi nhiều thứ đã nghe hoài tai<br>Ôi những lúc tan trường,<br>Chiếc xe đạp cha đón con về<br>Những năm tháng tươi đẹp của tuổi thanh xuân<br><br>[ĐK2]<br>Cha già rồi đúng không?!<br>Cứ hát mãi câu ca Hoài Lang<br>Cha già rồi đúng không?!<br>Con xin lỗi cha, con thật vô tâm<br>Cả cuộc đời của cha<br>Chỉ sống với những ước mơ ngày thơ tự vẽ nơi tim<br>Có lẽ, cuộc đời còn có bao nhiêu lần 10 năm nữa...<br>Cha kể tôi nghe.",
            genre: "Period",
        },{
            name: "Ước Mơ Của Mẹ",
            singer: " VĂN MAI HƯƠNG",
            path: "assets/music/y2mate.com - ƯỚC MƠ CỦA MẸ  VĂN MAI HƯƠNG Lyrics Video  OST THƯƠNG NGÀY NẮNG VỀ.mp3",
            image:"assets/img/Uocmocuame.jpg",
            lyrics: "(Verse 1)<br>Con hỏi ước mơ của mẹ thế nào<br>Đã quá lâu, chẳng còn ai hỏi mẹ như thế<br>Suýt chút nữa, mẹ cũng quên mình từng thế nào.<br>Cũng có ước mơ, mơ được sống cuộc đời riêng mình.<br>(Pre-chorus)<br>Khi còn bé, mẹ ước sau này lớn lên<br>Mẹ sẽ tung bay, đi khắp chân trời nhân thế<br>Rồi bỗng nhiên một ngày, trong mẹ có con<br>Ước muốn khi xưa đã hóa ra con từ bao giờ...<br>(Chorus)<br>Mẹ cũng quên dần quên, ước mơ của mẹ là gì<br>Mẹ vẫn đang bận lo, làm sao có một bữa cơm no<br>Ngoài kia thế giới bao la rộng lớn<br>Còn thế giới của mẹ chính là con, là niềm vui của con, là ngôi nhà, là gia đình.<br>(Verse 2)<br>Vài năm trước mẹ vẫn thấy con đùa vui trước sân<br>Thế mà giờ đây, con lớn nhanh sau ngần năm ấy<br>Rồi con cũng có ước mơ riêng mình<br>Và con cũng cố gắng theo hết mình<br>Con ơi, hãy ước mơ thay phần mẹ.<br>(Pre-Chorus)<br>(Chorus)<br>Ước muốn khi xưa, Mẹ cất lại, như một kỷ niệm.",
            genre: "Period",
        },{
            name: "Chưa Bao Giờ Mẹ Kể",
            singer: "MIN FT. ERIK",
            path: "assets/music/y2mate.com - MIN FT ERIK  Chưa Bao Giờ Mẹ Kể  NGÀY THỨ 8 CỦA MẸ.mp3",
            image:"assets/img/chuabaogiomeke.jpg",
            lyrics: "Kể từ khi còn thơ bé<br>Mẹ luôn vỗ về chở che<br><br>Và ánh mắt chứa chan bao điều , nhiều lo lắng<br>Con của mẹ đã khôn lớn<br>Mẹ của con càng già hơn<br>Giọng nói ấm áp chưa bao giờ lời than vãn<br><br>Giấu diếm con bao điều<br><br>Mẹ nói dối con thật nhiều<br>Để gánh vác bao cam chịu chẳng ai thấu hiểu<br><br>Giấu khát khao đời mình<br>Vờ ước muốn như vô hình<br><br>Dành tất cả cho gia đình , lặng im câm nín<br><br>Chorus :<br>Mẹ là duy nhất trên đời<br><br>Mẹ đã quá vất vả rồi<br><br>Người dũng cảm tuyệt vời là mẹ , mẹ ơi<br>Giờ con lớn khôn rồi<br>Và con sẽ nên ngừoi<br><br>Thành người tốt trên đời , mẹ tự hào sớm thôi<br><br>Mẹ yêu ơi ơi ơi ơi ơi<br>Mẹ ơi ơi ơi ơi ơi<br>Mẹ ơi , Đừng lo nha mẹ ơi<br>Mẹ yêu ơi ơi ơi ơi ơi<br>Mẹ ơi ơi ơi ơi ơi<br>Mẹ ơi , Mẹ chỉ được hạnh phúc thôi , suốt đời<br><br><br>Và ngày thứ 8 đến rồi<br>Là giây phút tuyệt vời<br>Mẹ hãy sống cho mình một ngày thật thảnh thơi<br>Cạnh bên có con rồi<br>Mẹ sẽ chẳng lẻ loi<br>Và mơ ước cuộc đời thành hiện thực sớm thôi<br>Mẹ yêu ơi ơi ơi ơi ơi<br>Mẹ ơi ơi ơi ơi<br>Mẹ ơi , hãy tự tin lên mẹ ơi<br>Mẹ yêu ơi ơi ơi ơi ơi<br>Mẹ ơi ơi ơi ơi ơi<br>Mẹ ơi , Mẹ chỉ được hạnh phúc thôi , suốt đời",
            genre: "Period",
        },{
            name: "Hoa Nở Không Màu",
            singer: "Hoài Lâm",
            path: "assets/music/y2mate.com - Hoa Nở Không Màu  Hoài Lâm  Acoustic Version.mp3",
            image:"assets/img/Hoanokhongmau.jpg",
            lyrics: "Chỉ là nỗi nhớ mãi đứng sau cuộc tình đã lỡ<br>Chỉ là cơn mơ cuốn theo cả một trời thương nhớ<br>Chỉ là nỗi đau thổn thức, chỉ là nhói thêm một chút<br>Chỉ là nước mắt cứ rưng rưng<br><br>Tìm về kí ức cố xoá đi đoạn tình ban sơ<br>Rồi lại chơ vơ đứng giữa nơi đại lộ tan vỡ<br>Mãi chìm đắm trong lầm lỡ<br>Trái tim vẫn không ngừng nhớ<br>Đợi chờ em đến hoá ngu ngơ<br><br>Tình yêu đã phai mờ như hoa nở không màu<br>Càng níu kéo nhưng lại càng xa cách nhau<br>Đành ôm nỗi đau này chết lặng giữa trời mây<br>Hằn lại sâu trong trái tim hao gầy<br><br>Giờ đây chúng ta là hai người dưng khác lạ<br>Buồn biết mấy nhưng lại chẳng thể nói ra<br>Cuộc đời lắm vô thường, sao cứ mãi vấn vương<br>Tự mình ôm lấy tổn thương riêng mình !<br><br>Chỉ là anh cố chấp luôn âm thầm<br>Bước về phía nắng ấm tìm em<br>Thế mà cơn mưa đêm xoá hết kỷ niệm<br>Chỉ còn lại xác xơ nỗi nhớ !",
            genre: "Pop",
        },{
            name: "Một Vòng Việt Nam",
            singer: "Tùng Sơn",
            path: "assets/music/y2mate.com - MỘT VÒNG VIỆT NAM Around Viet Nam  Tùng Dương  Official Lyric Video.mp3",
            image:"assets/img/Motvongvietnam.jpg",
            lyrics: "[Verse 1]<br>Ai đã ghim vào những thân tre Ɓao ký ức xót xa hỡi mẹ<br>Ai đã ru ngủ những dòng sông<br>Ϲùng êm ả chảу về hướng đông.<br>Ϲon đã vẽ hình hài quê hương<br>Qua những khúc hát ru của mẹ<br>Ϲòn bao nhiêu lời ru con vẫn<br>Ϲhưa được nghe?<br>[Ϲhorus 1]<br>Việt Ɲam quê hương ta đẹp lắm<br>Mặc lửa khói dàу xéo tháng năm<br>Ɲgười Việt Ɲam da nâu mắt đen<br>Thảo thơm bất khuất như cành sen.<br>Việt Ɲam ơi quê hương ta ơi?<br>Ɓiển lúa chín vàng thơm ngát trời<br>Vọng tiếng ai hò?<br>Vì nhớ con đò, à ơi<br>Ɗậу với tôi nào<br>Ɗạo với tôi nào<br>Ɗạo khắp một vòng Việt Ɲam<br>[Verse 2]<br>Ai đã ghim vào những thân tre<br>Ɓao ký ức xót xa hỡi mẹ<br>Ai đã ru ngủ những dòng sông<br>Ϲùng êm ả chảу về hướng đông.<br>Ϲon đã vẽ hình hài quê hương<br>Qua những khúc hát ru của mẹ<br>Ϲòn bao nhiêu lời ru con vẫn<br>Ϲhưa được nghe?<br>[Ϲhorus 2]<br>Việt Ɲam quê hương ta đẹp lắm<br>Mặc lửa khói dàу xéo tháng năm<br>Ɲgười Việt Ɲam da nâu mắt đen<br>Thảo thơm bất khuất như cành sen.<br>Việt Ɲam ơi quê hương ta ơi?<br>Ɓiển lúa chín vàng thơm ngát trời<br>Vọng tiếng ai hò?<br>Vì nhớ con đò, à ơi<br>Ɗậу với tôi nào<br>Ɗạo với tôi nào<br>Ɗạo khắp một vòng Việt Ɲam<br>Ɲhìn non sông trời văn đất võ<br>Ϲùng với tôi nào dạo với tôi nào<br>Ɗạo khắp một vòng Việt Ɲam.<br>Ϲome walk with me.<br>Take a walk around Vietnam",
            genre: "Indie",
        },{
            name: "Có Duyên Không Nợ (remix)",
            singer: "Tina Ho",
            path: "assets/music/y2mate.com - Có Duyên Không Nợ Remix  Tina Ho Cover x H2O Remix  Một Người Đứng Từ Xa Chờ Anh Về Hot TikTok.mp3",
            image:"assets/img/Coduyenkhongno.jpg",
            lyrics: "Mot nguoi dung tu xa cho em ve<br>Mot nguoi nuot nuoc mat tung dem<br>Tung lan toc bo moi em van con<br>Chi co long nguoi la doi thay<br><br>Roi ngay thang nhe troi nhat nhoa<br>Doan duong vang con ai voi ta<br>Nhin vao mat cua nhau chua bao muon sau<br>Anh nghi ta nen roi xa nhau<br><br>Thoi thi em hay ve noi gam hoa lua la<br>noi cho em tam than ngoc nga<br>O noi chon khue phong cau mong em khong khoc<br>Mong nguoi thuong cua em yeu that long<br><br>Phia noi cuoi con duong ta se ve dau<br>Doi cau thuong nho nhau nay cung phai mau<br>Noi dau cu day vo doi anh co lieu mai<br>hai ta co duyen nhung chang no nhau<br><br>Ta chang biet cuoc tinh nay se di ve dau<br>Khi nhung dau thuong nhung chua xot cu the chong chat len nhau<br>Dang cay vi nang<br>Xot xa vi nang<br><br>Trao nhau tat ca de roi ta lai ly tan<br>Thu tinh em viet nghe sao that sau lang<br>Den luc chia tay buong toan loi cay dang<br><br>Thoi thi anh biet ta co duyen nhung khong no<br>Tra em ve lai noi xu la day mong mo<br>Ta xa nhau roi hung ki niem chang con phai khong<br>Doi mat ai buon dung trong chieu mai hoai ngong trong<br><br>Co duyen gap nang nhung sau cung tinh cung lo lang<br>Ngam ngui cam nin xem em tay trong tay cung nguoi ay<br>Thoi thi em hay ve noi gam hoa lua la<br>Noi cho em tam than ngoc nga<br><br>O noi chon khue phong cau mong em khong khoc nam thang<br>Mong nguoi thuong cua em yeu that long<br>Phia noi cuoi con duong ta se ve dau<br>Doi cau thuong nho nhau nay cung phai mau<br><br>Noi dau cu day vo doi anh co lieu mai<br>Hai ta co duyen nhung chang no nhau<br>Hoa vang roi thu ve chon day<br>Nghe nhu buoc chan ai ke ben them<br><br>Tim nhoi dau nhung dan long khong buon<br>Sau tren doi mi ngay mai roi tinh chet<br>Thoi thi em hay ve noi gam hoa lua la<br>noi cho em tam than ngoc nga<br><br>O noi chon khue phong cau mong em khong khoc<br>Mong nguoi thuong cua em yeu that long<br>Phia noi cuoi con duong ta se di ve dau<br>Doi cau thuong nho nhau nay cung phai mau",
            genre: "Remix",
        },{
            name: "Thuyền Quyên (remix)",
            singer: "Diệu Kiên",
            path: "assets/music/y2mate.com - Thuyền Quyên AM Remix  Diệu Kiên  Áo Mời Em Cài Màu Hoa Cưới Remix Hot TikTok.mp3",
            image:"assets/img/thuyenquyen.jpg",
            lyrics: "Xa xa bóng người thương<br>Thấp thoáng trước thềm nhà đang đưa dâu<br>Nơi đây phấn son, áo màu<br>Em sắp theo chồng<br>Bỏ lại bến sông kia chờ mong<br>Khải lên khúc nhạc Hoàng Cầm<br>Buồn ngày mình biệt ly<br>Cung oán, cung sầu<br>Nặng lòng tiễn chân người ra đi<br>Xác pháo vu quy bên thềm<br>Có chăng hạnh phúc êm đềm<br>Đời người con gái đục trong<br>Mười hai bến nước long đong<br>Dặm ngàn thiên lý tiễn người đi<br>Mây nước u buồn ngày biệt ly<br>Khóc cho duyên mình<br>Đoạn trường thương loan đò sang ngang<br>Áo mới em cài màu hoa cưới<br>Sánh bước bên người cùng duyên mới<br>Nâng chén tiêu sầu<br>Khải một cung đàn từ biệt nhau<br>Bướm lượn là bướm ối a nó bay<br>Cá lội là cá ối a nó bơi<br>Yêu nhau cởi áo cho nhau<br>Về nhà mẹ hỏi qua cầu gió bay<br>Từ nay hết duyên em trả áo<br>Xem như hết tình mình đã trao<br>Phận duyên ta lỡ<br>Cung thương đứt đoạn, sầu đối gương loan<br>Dặm ngàn thiên lý tiễn người đi<br>Mây nước u buồn ngày biệt ly<br>Khóc cho duyên mình<br>Đoạn trường thương loan đò sang ngang<br>Áo mới em cài màu hoa cưới<br>Sánh bước bên người cùng duyên mới<br>Nâng chén tiêu sầu<br>Khải một cung đàn từ biệt nhau<br>Dặm ngàn thiên lý tiễn người đi<br>Mây nước u buồn ngày biệt ly<br>Khóc cho duyên mình<br>Đoạn trường thương loan đò sang ngang<br>Áo mới em cài màu hoa cưới<br>Sánh bước bên người cùng duyên mới<br>Nâng chén tiêu sầu<br>Khải một cung đàn từ biệt nhau<br>Bướm lượn là bướm ối a nó bay<br>Bướm dạo là bướm ối a nó bay<br>Cá lặn là cá ối a nó bơi",
            genre: "Remix",
        },{
            name: "Khuất lối (remix)",
            singer: "H-Kray",
            path: "assets/music/y2mate.com - Khuất Lối Orinn Remix  H Kray  Anh Đi Về Bóng Tối Khuất Lối  Nhạc Trẻ Remix Hot Tiktok 2022.mp3",
            image:"assets/img/khuatloi.jpg",
            lyrics: "Hôm nay mưa phủ bay lay nhẹ hương thơm đôi tóc mây<br>nhớ thương nàng anh lang thang trong đêm mà đâu có hay<br><br>Đôi câu yêu ngày nao vẫn còn in trong tâm trí anh<br>lối xưa về h đây vắng tanh lạnh lùng nhớ ai<br><br>Thương thân ai thủy chung đêm về nặng lòng mình nhớ thương<br>khói sương mờ bên hiên hòa chung đèn khuya hắt hiu<br><br>Ai yêu ai để cho bây giờ đôi câu thơ dở dang<br>Hòa ra ngàn câu thương đên vậy cũng đành vỡ tan<br><br>Anh đi về bóng tối khuất lối<br>chìm dần trong bao đêm trôi<br>Thương thì thương vậy thôi<br>sao h con tim vỡ đôi<br><br>Em ơi anh buồn anh nhớ ánh mắt<br>nụ cười em đang nơi đâu<br>Sầu đôi bờ mi anh buồn trong cô liêu<br><br>Tiếc thương hoài những phút dắm đuối<br>Ân cần ta tay trong tay<br>Sao h đây lẻ loi chỉ mình anh trong men say<br><br>Thôi cứ dặn lòng ta quên đi em<br>Hết đêm này ta quên đi em<br>Ngày mai bình yên sẽ về quên đi em",
            genre: "Remix",
        },{
            name: "Phong Dạ Hành (remix)",
            singer: "H-Kray",
            path: "assets/music/y2mate.com - PHONG DẠ HÀNH  BT x LVT REMIX  TREND TIKTOK 0000  NHẠC THỊNH HÀNH TIKTOK 2022.mp3",
            image:"assets/img/phongdahanh.jpg",
            lyrics: ">>>>>>>>>>>Không lời<<<<<<<<<<<<",
            genre: "Remix",
        },{
            name: "Hai Phút Hơn (remix)",
            singer: "Phao",
            path: "assets/music/y2mate.com - Phao  2 Phut Hon KAIZ Remix  TikTok Vietnamese Music 2020.mp3",
            image:
                "assets/img/haiphuthong.jpg",
            lyrics: "Tay em đang run run nhưng anh thì cứ rót đi<br>Anh mà không nể em là khi mà anh không hết l<br>Uống thêm vài ly vì đời chẳng mấy khi vu<br>Nốc thêm vài chai vì anh em chẳng mấy khi gặp lạ<br>Nơi đây đang xoay xoay, thế gian đang xoay vòn<br>Anh đang ở nơi đâu, biết anh có thay lòn<br>Đừng nói chi, mình uống đ<br>Một hai ba bốn hai ba mộ<br>Hình như anh nói anh say rồ<br>Một hai ba bốn hai ba mộ<br>Hình như anh nói anh yêu em rồ<br>Uống đi! Uốn<br>Để chuyện buồn được cuốn đ<br>Huống chi! V<br><br>Thời điểm này có mấy kh<br>Em hãy cứ vui như lần nà<br>Ánh mắt trao anh vẫn còn đầ<br>Chìm đắm men rượu trong tầm ta<br>Vì quãng đường chông ga<br>Đã làm cho ta hào mòn gầ<br>Hạ ly cạn ở trên ta<br>Mà không hay mình thêm sa<br>Ưu phiền ngày hôm na<br>Tất cả được quên nga<br>Để tâm tư bay lên mâ<br>Gối đầu yên vòng tay an<br>Mặc cho lòng say nhanh kệ trăng mọc trên câ<br>Giữ kỉ niệm và kí ức làm cho ta vô tư không còn thấy bí bứ<br>Thả lỏng cả trong ý thức đôi tay ôm dùng sức còn hơn cả lý đứ<br>Tận hưởng khi cặp mắt nhắ<br>Cảm nhận vị son còn gắt đắn<br>Chút khờ dại này thêm quen khi em nói rằng anh hãy ở lại bê<br>em<br>Một hai ba bốn hai ba một, hình như anh nói anh say rồ<br>Một hai ba bốn hai ba một, hình như anh nói anh yêu em rồi<br>Đừng nói chi, mình uống đi",
            genre: "Remix",
        },{
            name: "Thằng Điên",
            singer: "JUSTATEE x PHUONG LY - CRAZY MAN",
            path: "assets/music/y2mate.com - Thằng Điên    Justatee ft Phương Ly    Lyrics.mp3",
            image:"assets/img/thangdien.jpg",
            lyrics: " Giờ tôi lại lang thang<br>Tình yêu thì miên man<br>Ngày xanh cùng mây tung tăng tựa mình bên phím đàn<br>Nhìn em mình ngơ ngác<br>Lòng anh chợt hơi khác<br>Tình yêu này đến đúng lúc thấy ánh sáng vụt qua<br>Nụ cười tỏa hương nắng<br>Bình minh và mây trắng<br>Hình như đều kêu tôi ôi thôi tình yêu đến rồi!<br>Chẳng ai phải thắc mắc<br>Còn tôi thì đã chắc<br>Nàng ơi nàng hãy đến chiếm lấy tâm hồn tôi<br><br>Mỉm cười lòng chợt bâng khuâng tôi chẳng biết mơ hay thật<br>Đợi chờ dù ngày hay đêm anh chỉ cần nghĩ cũng thấy vui..<br><br>I'm in love<br>Màu nắng cuốn lấp chân mây mờ xa<br>I'm in love<br>Thành phố chỉ thấy mỗi riêng mình ta<br>I'm in love<br>Tựa đầu bên tình yêu mới thiết tha<br>Chỉ Crazy man fall in love<br>I'm in love<br>Hạnh phúc chỉ hết khi anh ngừng mơ<br>I'm in love<br>Cuộc sống vốn dĩ trôi như vần thơ<br>I'm in love<br>Ngả lưng bên cành cây lá xác xơ<br>Mờ sương đưa tay anh ôm lấy em..<br>Dẫu biết chỉ là mơ.. Dẫu biết chỉ là mơ<br>Crazy man fall in love..<br><br>Chơi vơi nơi mà loài người nhìn anh phiêu (như thằng điên)<br>Uh thì đâu ai muốn là người bình thường khi yêu (yêu thằng điên)<br><br>Anh đang mơ màng về bầu trời đầy trăng với sao, em như cô tiên, mình ca múa như 2 con điên trên đồi thảo nguyên (là la lá)<br>Here we are...em như Beyoncé hát hát<br>Here we are...anh như Jay-Z đang rap, rap về từng ngày nắng, về từng ngày gió, về từng ngày tháng có em<br>But i don't know who you are..<br><br>Mỉm cười lòng chợt bâng khuâng tôi chẳng biết mơ hay thật<br>Đợi chờ dù ngày hay đêm anh chỉ cần nghĩ cũng thấy vui ..<br><br>I'm in love<br>Màu nắng cuốn lấp chân mây mờ xa<br>I'm in love<br>Thành phố chỉ thấy mỗi riêng mình ta<br>I'm in love<br>Tựa đầu bên tình yêu mới thiết tha<br>Chỉ Crazy man fall in love<br>I'm in love<br>Hạnh phúc chỉ hết khi anh ngừng mơ<br>I'm in love<br>Cuộc sống vốn dĩ trôi như vần thơ<br>I'm in love<br>Ngả lưng bên cành cây lá xác xơ<br>Mờ sương đưa tay anh ôm lấy em..<br>Dẫu biết chỉ là mơ..",
            genre: "Rap",
        },{
            name: "Sau Tất Cả",
            singer: "ERIK ",
            path: "assets/music/y2mate.com - ERIK  SAU TẤT CẢ Official Audio.mp3",
            image:"assets/img/sautatca.jpg",
            lyrics: "1. Sau tất cả mình lại trở về với nhau<br>Tựa như chưa bắt đầu, tựa như ta vừa mới quen<br>Sau tất cả lòng chẳng hề đổi thay<br>Từng ngày xa lìa khiến con tim bồi hồi<br>Và ta lại gần nhau hơn nữa.<br><br>Có những lúc đôi ta giận hờn<br>Thầm trách nhau không một ai nói điều gì<br>Thời gian cứ chậm lại, từng giây phút sao quá dài<br>Để khiến anh nhận ra mình cần em hơn.<br><br>[ĐK:]<br>Tình yêu cứ thế đong đầy trong anh từng ngày<br>Vì quá yêu em nên không thể làm gì khác<br>Chỉ cần ta mãi luôn dành cho nhau những chân thành<br>Mọi khó khăn cũng chỉ là thử thách<br>Vì trái tim ta luôn luôn thuộc về nhau.<br><br>2. Sau tất cả mình lại chung lối đi<br>Đoạn đường ta có nhau, bàn tay nắm chặt bấy lâu<br>Sau tất cả mình cùng nhau sẻ chia<br>Muộn phiền không thể khiến đôi tim nhạt nhòa<br>Và ta lại gần nhau hơn nữa.<br><br>* Giữ chặt bàn tay mình cùng nhau<br>Đi hết bao tháng ngày<br>Mọi điều gian khó ta luôn vượt qua<br>Để khiến ta nhận ra mình gần nhau hơn.",
            genre: "Pop",
        },{
            name: "Một Đêm Say",
            singer: "Thịnh Suy",
            path: "assets/music/y2mate.com - Thịnh Suy  MỘT ĐÊM SAY X  Official Music Video.mp3",
            image:"assets/img/motdemsay.jpg",
            lyrics: "[Verse 1:]<br>Khi đôi môi em còn đỏ mọng, em muốn nói “em yêu anh”?<br>Khi men còn trong hơi thở, lại gần hôn anh đi.<br>Khi con tim không còn trên đầu, khi hai má em hây hây<br>Em nói em say tiếng đàn, vậy lại gần hôn anh đi.<br><br>[Chorus:]<br>Lại gần hôn anh, anh sẽ để em mặt trời<br>Lại gần hôn anh, hay em để anh chơi vơi<br>Giờ còn đôi ta, kia là núi đây là nhà<br>Giờ còn đôi ta, em có muốn đi thật xa?<br><br>[Verse 2:]<br>Ta chỉ sống một lần trên đời, suy nghĩ lắm chi em ơi<br>Bao nhiêu yêu thương trên đời, là vị ngọt trên đôi môi<br><br>[Chorus:]<br>Lại gần hôn anh, anh sẽ để em mặt trời<br>Lại gần hôn anh, hay em để anh chơi vơi<br>Giờ còn đôi ta, kia là núi đây là nhà<br>Giờ còn đôi ta, em có muốn đi thật xa?<br><br>[Outro:]<br>Khi đôi môi em còn đỏ mọng, khi anh nói “anh yêu em“<br>Khi anh ta còn say giấc nồng, lại gần hôn anh đi<br><br>Khi đôi môi em còn đỏ mọng, khi anh nói anh yêu em<br>Khi hai ta còn say giấc nồng, lại gần hôn anh đi",
            genre: "Indie",
        },{
            name: "Heroes tonight",
            singer: "janji",
            path: "assets/music/Janji - Heroes Tonight (feat. Johnning) - Progressive House - NCS - Copyright Free Music.mp3",
            image:"assets/img/heroes_tonight.jpg",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "hero",
            singer: "cash cash",
            path: "assets/music/Cash Cash - Hero feat. Christina Perri [Official Audio].mp3",
            image:"assets/img/hero_cash_cash.jpg",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "Leave the Door open",
            singer: "Bruno Mars, Anderson .Paak, Silk Sonic",
            path: "assets/music/Bruno Mars, Anderson .Paak, Silk Sonic - Leave the Door Open [Official Video].mp3",
            image:"assets/img/Leave_the_Door_open.jpg",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "Nevada",
            singer: "Vicetone",
            path: "assets/music/Vicetone - Nevada (ft. Cozi Zuehlsdorff).mp3",
            image:"assets/img/nevada.jpg",
            lyrics: "I've been painting every fence I know<br>Every color bleeds into the same<br>cause before you go and walk away<br>yeah, you better know where you're going<br>hey ya, hey ya<br>you're a wanderer,just like me<br>hey ya, hey ya<br>yeah, you better know where you're going<br>[music]<br>yeah, you better know where you're going<br>[music]<br>I've been painting every fence I know<br>Every color bleeds into the same<br>Cause before you go and walk away<br>yeah, you better know where you're going<br>hey ya, hey ya<br>you're a wanderer just like me<br>hey ya,hey ya<br>yeah, you better know where you're going<br>[music]<br>(you're a wanderer just like me)<br>[music]<br>yeah, you better know where you're going<br>hey ya, hey ya<br>you're a wanderer just like me<br>hey ya, hey ya<br>yeah, you better know where you're going<br>[music]<br>yeah, you better know where you're going<br>yeah, you better know where you're going<br>you're a wanderer just like me<br>yeah, you better know where you're going<br>you're a wanderer just like me<br>[music]<br>yeah, you better know where you're going<br>you're a wanderer just like me<br>",
            genre: "remix",
        },{
            name: "anh có muốn đưa em về không",
            singer: "",
            path: "assets/music/Anh Có Muốn Đưa Em Về Không (Orinn Remix) - Ngô Lan Hương - Nhạc Edm Hot Tik Tok Gây Nghiện 2021.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "Bán duyên",
            singer: "",
            path: "assets/music/Bán Duyên - Đình Dũng ( Htrol Remix Ft Phạm Thành ) - Nhạc gây nghiện 2019.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "rise and fall",
            singer: "",
            path: "assets/music/Camelot - Rise and fall (DJ Yaha Remix) TikTok Song - Chinese DJ 2019.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "On & On",
            singer: "",
            path: "assets/music/Cartoon, Jéja - On & On (feat. Daniel Levi) - Electronic Pop - NCS - Copyright Free Music.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "chạm khẽ tim anh một chút thôi",
            singer: "",
            path: "assets/music/Chạm Khẽ Tim Anh Một Chút Thôi - Noo Phước Thịnh - LYRIC VIDEO.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "chỉ bằng cái gật đầu",
            singer: "",
            path: "assets/music/Chỉ Bằng Cái Gật Đầu - Yan Nguyễn [MVOFFICIAL].mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "cupid",
            singer: "",
            path: "assets/music/FIFTY FIFTY - Cupid (Twin Version) (Lyrics).mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "some body that I used to know",
            singer: "",
            path: "assets/music/Gotye - Somebody That I Used To Know (feat. Kimbra) [Official Music Video].mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "cloud 9",
            singer: "",
            path: "assets/music/Itro & Tobu - Cloud 9.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "larg",
            singer: "",
            path: "assets/music/LARG - ELGIT DODA -- NHẠC HOT TIKTOK TRUNG -- Tik Tok --  MUSIC.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "someone you loved",
            singer: "",
            path: "assets/music/Lewis Capaldi - Someone You Loved.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "At my worst",
            singer: "",
            path: "assets/music/Pink Sweat$ - At My Worst (Official Video).mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "sai người sai thời điểm",
            singer: "",
            path: "assets/music/Sai Người Sai Thời Điểm - Thanh Hưng - Lyric Video.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "sao mình chưa nắm tay nhau",
            singer: "",
            path: "assets/music/SAO MÌNH CHƯA NẮM TAY NHAU - YAN NGUYỄN (OFFICIAL MUSIC) Vậy sao chưa cầm tay nhau để đông không còn.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "dancing with your ghost",
            singer: "",
            path: "assets/music/Sasha Alex Sloan - Dancing With Your Ghost (Lyric Video).mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "Love is Gone",
            singer: "",
            path: "assets/music/SLANDER - Love Is Gone ft. Dylan Matthew (Acoustic).mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "Cradles",
            singer: "",
            path: "assets/music/Sub Urban - Cradles (Lyrics).mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "thằng hầu",
            singer: "",
            path: "assets/music/Thằng Hầu (DinhLong Remix) - Nhật Phong - Bản Remix Cực Căng - Orinn Remix.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "fly away",
            singer: "",
            path: "assets/music/TheFatRat - Fly Away feat. Anjulie.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "Monody",
            singer: "",
            path: "assets/music/TheFatRat - Monody (feat. Laura Brehm) (Orchestral Remix by sJLs) (Lyrics Video).mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "never be Alone",
            singer: "",
            path: "assets/music/TheFatRat - Never Be Alone.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "Rise up",
            singer: "",
            path: "assets/music/TheFatRat - Rise Up.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "Close to the sun",
            singer: "",
            path: "assets/music/TheFatRat & Anjulie - Close To The Sun.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "tránh duyên",
            singer: "",
            path: "assets/music/Tránh Duyên ( Htrol Remix ) Đình Dũng - Nhạc Gây Nghiện 2019.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "trời giấu trời mang đi",
            singer: "",
            path: "assets/music/TRỜI GIẤU TRỜI MANG ĐI - AMEE x VIRUSS - Lyrics.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "thunder",
            singer: "",
            path: "assets/music/Vietsub - Thunder - Gabry Ponte, LUM!X, Prezioso - Nhạc hot TikTok - Lyrics Video.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "xomu - lanterns",
            singer: "",
            path: "assets/music/Xomu - Lanterns.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "you",
            singer: "",
            path: "assets/music/You - Approaching Nirvana.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "windy hill",
            singer: "",
            path: "assets/music/羽肿 - Windy Hill (BGM).mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        },{
            name: "",
            singer: "",
            path: "assets/music/.mp3",
            image:"assets/img/",
            lyrics: "không có lời",
            genre: "remix",
        }
    ],

    setConfig: function(key, value){
        this.config[key] = value;
        localStorage.setItem(PlAYER_STORAGE_KEY, JSON.stringify(this.config));
    },

    progressInput: function(item) {
        let sliderValue = item.value;
        item.style.background = `linear-gradient(to right, var(--color-theme) ${sliderValue}%, #4d4d4d ${sliderValue}%)`;
    },

    render: function(){
        const htmls = this.songs.map((song, index) =>{
            return `
                <div class="item ${index === this.currentIndex ? 'active' : ''}" data-index="${index}">
                    <div class="info">                     
                        <img src="${song.image}" alt="">
                        <div class="details">
                            <h5>${song.name}</h5>
                            <p>${song.singer}</p>
                        </div>
                    </div>
                    <div class="actions">
                        <div class="icon">
                            <i class='bx bx-play' data-index="${index}"></i>
                            <i class='bx bx-pause' data-index="${index}"></i>
                        </div>
                        <i class='bx bxs-plus-square'></i>
                    </div>
                </div>
            `
        })
        playlist.innerHTML = htmls.join('');
    },
    
    renderlistpop: function(){
        // Lọc danh sách các bài hát theo từng thể loại
        popSongs = this.songs.filter(song => song.genre === 'Pop');
    
        //Tạo HTML cho danh sách các bài hát theo từng thể loại
        const popHtmls = popSongs.map((song, index) =>{
            return `
                <div class="itemlist ${index === this.currentIndex ? 'active' : ''}" data-index="${index}">
                    <div class="info">                     
                        <img src="${song.image}" alt="">
                        <div class="details">
                            <h5>${song.name}</h5>
                            <p>${song.singer} - ${song.genre}</p>
                        </div>
                    </div>
                    <div class="actions">
                        <div class="icon">
                            <i class='bx bx-play' data-index="${index}"></i>
                            <i class='bx bx-pause' data-index="${index}"></i>
                        </div>
                    </div>
                </div>
            `;
        });
        if (popHtmls.length > 0) {
            poplist.innerHTML = popHtmls.join('');
        }else{
            poplist.innerHTML = '<p>No songs available</p>';
        }
    },

    renderlistbeat: function(){
        // Lọc danh sách các bài hát theo từng thể loại
        beatSongs = this.songs.filter(song => song.genre === 'Beat');
    
        //Tạo HTML cho danh sách các bài hát theo từng thể loại
        const beatHtmls = beatSongs.map((song, index) =>{
            // Tạo HTML cho danh sách các bài hát thể loại 'Beat'
            return `
                <div class="itemlist ${index === this.currentIndex ? 'active' : ''}" data-index="${index}">
                    <div class="info">                     
                        <img src="${song.image}" alt="">
                        <div class="details">
                            <h5>${song.name}</h5>
                            <p>${song.singer} - ${song.genre}</p>
                        </div>
                    </div>
                    <div class="actions">
                        <div class="icon">
                            <i class='bx bx-play' data-index="${index}"></i>
                            <i class='bx bx-pause' data-index="${index}"></i>
                        </div>
                    </div>
                </div>
            `;
        });
        // const beatlist = document.querySelector('.item.beat .music-items__list');
        if (beatHtmls.length > 0) {
            beatlist.innerHTML = beatHtmls.join('');
        }else{
            beatlist.innerHTML = '<p>No songs available</p>';
        }
        
    },

    renderlistremix: function(){
        // Lọc danh sách các bài hát theo từng thể loại
        remixSongs = this.songs.filter(song => song.genre === 'Remix');
    
        //Tạo HTML cho danh sách các bài hát theo từng thể loại
        const remixHtmls = remixSongs.map((song, index) =>{
            // Tạo HTML cho danh sách các bài hát thể loại 'Beat'
            return `
                <div class="itemlist ${index === this.currentIndex ? 'active' : ''}" data-index="${index}">
                    <div class="info">                     
                        <img src="${song.image}" alt="">
                        <div class="details">
                            <h5>${song.name}</h5>
                            <p>${song.singer} - ${song.genre}</p>
                        </div>
                    </div>
                    <div class="actions">
                        <div class="icon">
                            <i class='bx bx-play' data-index="${index}"></i>
                            <i class='bx bx-pause' data-index="${index}"></i>
                        </div>
                    </div>
                </div>
            `;
        });
        // const remixContainer = document.querySelector('.item.remix .music-items__list');
        if (remixHtmls.length > 0) {
            remixlist.innerHTML = remixHtmls.join('');
        }else{
            remixlist.innerHTML = '<p>No songs available</p>';
        }
    },

    renderlistrap: function(){
        // Lọc danh sách các bài hát theo từng thể loại
        rapSongs = this.songs.filter(song => song.genre === 'Rap');
    
        //Tạo HTML cho danh sách các bài hát theo từng thể loại
        const rapHtmls = rapSongs.map((song, index) =>{
            // Tạo HTML cho danh sách các bài hát thể loại 'Beat'
            return `
                <div class="itemlist ${index === this.currentIndex ? 'active' : ''}" data-index="${index}">
                    <div class="info">                     
                        <img src="${song.image}" alt="">
                        <div class="details">
                            <h5>${song.name}</h5>
                            <p>${song.singer} - ${song.genre}</p>
                        </div>
                    </div>
                    <div class="actions">
                        <div class="icon">
                            <i class='bx bx-play' data-index="${index}"></i>
                            <i class='bx bx-pause' data-index="${index}"></i>
                        </div>
                    </div>
                </div>
            `;
        });
        // const remixContainer = document.querySelector('.item.remix .music-items__list');
        if (rapHtmls.length > 0) {
            raplist.innerHTML = rapHtmls.join('');
        }else{
            raplist.innerHTML = '<p>No songs available</p>';
        }
    },

    renderlistindie: function(){
        // Lọc danh sách các bài hát theo từng thể loại
        indieSongs = this.songs.filter(song => song.genre === 'Indie');
    
        //Tạo HTML cho danh sách các bài hát theo từng thể loại
        const indieHtmls = indieSongs.map((song, index) =>{
            // Tạo HTML cho danh sách các bài hát thể loại 'Beat'
            return `
                <div class="itemlist ${index === this.currentIndex ? 'active' : ''}" data-index="${index}">
                    <div class="info">                     
                        <img src="${song.image}" alt="">
                        <div class="details">
                            <h5>${song.name}</h5>
                            <p>${song.singer} - ${song.genre}</p>
                        </div>
                    </div>
                    <div class="actions">
                        <div class="icon">
                            <i class='bx bx-play' data-index="${index}"></i>
                            <i class='bx bx-pause' data-index="${index}"></i>
                        </div>
                    </div>
                </div>
            `;
        });
        // const remixContainer = document.querySelector('.item.remix .music-items__list');
        if (indieHtmls.length > 0) {
            indielist.innerHTML = indieHtmls.join('');
        }else{
            indielist.innerHTML = '<p>No songs available</p>';
        }
    },

    renderlistperiod: function(){
        // Lọc danh sách các bài hát theo từng thể loại
        periodSongs = this.songs.filter(song => song.genre === 'Period');
    
        //Tạo HTML cho danh sách các bài hát theo từng thể loại
        const periodHtmls = periodSongs.map((song, index) =>{
            // Tạo HTML cho danh sách các bài hát thể loại 'Beat'
            return `
                <div class="itemlist ${index === this.currentIndex ? 'active' : ''}" data-index="${index}">
                    <div class="info">                     
                        <img src="${song.image}" alt="">
                        <div class="details">
                            <h5>${song.name}</h5>
                            <p>${song.singer} - ${song.genre}</p>
                        </div>
                    </div>
                    <div class="actions">
                        <div class="icon">
                            <i class='bx bx-play' data-index="${index}"></i>
                            <i class='bx bx-pause' data-index="${index}"></i>
                        </div>
                    </div>
                </div>
            `;
        });
        // const remixContainer = document.querySelector('.item.remix .music-items__list');
        if (periodHtmls.length > 0) {
            periodlist.innerHTML = periodHtmls.join('');
        }else{
            periodlist.innerHTML = '<p>No songs available</p>';
        }
    },

    defineProperties: function(){
        let _this = this;
        // Định nghĩa currentSong
        Object.defineProperty(this, 'currentSong', {
            get: function(){
                return this.songs[this.currentIndex]; 
            }
        });
    
        Object.defineProperty(this, 'currentSongBeat', {
            get: function(){
                return beatSongs[_this.currentIndex];
            }
        });

        Object.defineProperty(this, 'currentSongPop', {
            get: function(){
                return popSongs[_this.currentIndex];
            }
        });

        Object.defineProperty(this, 'currentSongRemix', {
            get: function(){
                return remixSongs[_this.currentIndex];
            }
        });

        Object.defineProperty(this, 'currentSongRap', {
            get: function(){
                return rapSongs[_this.currentIndex];
            }
        });

        Object.defineProperty(this, 'currentSongIndie', {
            get: function(){
                return indieSongs[_this.currentIndex];
            }
        });
        
        Object.defineProperty(this, 'currentSongPeriod', {
            get: function(){
                return periodSongs[_this.currentIndex];
            }
        });
    },
    
    // defineProperties: function(){
    //     Object.defineProperty(this,'currentSong',{
    //         get: function(){
    //             return this.songs[this.currentIndex];
    //         }
    //     });
    // },
    
    handleEvents: function(){
        let _this = this
        const cdWidth = cd.offsetWidth
        
        // Xử lý CD quay và dừng
        const cdThumbAnimate = cdThumb.animate([
            { transform: 'rotate(360deg)'}
        ], {
            duration: 10000, // 10 seconds
            iterations: Infinity
        });
        cdThumbAnimate.pause();

        //Xử lý phóng to / thu nhỏ
        document.onscroll = function(){
            const scrollTop = window.scrollY || document.documentElement.scrollTop
            const newcdWidth = cdWidth - scrollTop

            cd.style.width = newcdWidth > 0 ? newcdWidth + "px" : 0
            cd.style.opacity = newcdWidth / cdWidth

            // console.log(newcdWidth);
        }
        // Xử lý khi click vào cả hai nút play và listen
        function handlePlay() {
            if (_this.isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
        }

        playBtn.onclick = handlePlay;
        playlisten.onclick = handlePlay;
        
        //Khi hát được play 
        audio.onplay = function(){
            _this.isPlaying = true;
            player.classList.add('playing')
            if (window.innerWidth <= 600) {
                cdThumbAnimate.play();
            }else{
                cdThumbAnimate.pause();
            }
        }

        //Khi song bi pause
        audio.onpause = function(){
            _this.isPlaying = false;
            player.classList.remove('playing')
            cdThumbAnimate.pause()
        }

        //khi tiến độ bài hát thay đổi
        audio.ontimeupdate = function(){
            if(audio.duration){
                const progressPercent = Math.floor(audio.currentTime / audio.duration * 100)
                progress.value = progressPercent
            }
            updateUI();
        }

        //Xử lý khi tua song
        progress.oninput = function(e){
            const seekTime = audio.duration / 100 * e.target.value 
            audio.currentTime = seekTime
        }

        // Xử lý time audio
        // Xác định sự kiện "loadedmetadata"
        audio.addEventListener('loadedmetadata', function() {
            // Đặt thời gian hiện tại của audio là 0 (bắt đầu từ đầu)
            audio.currentTime = 0;

            // Cập nhật giao diện người dùng dựa trên thời gian hiện tại mới
            updateUI();
        });

        // Hàm cập nhật giao diện người dùng
        function updateUI() {
            progress.value = Math.floor(audio.currentTime);
            progress.max = Math.floor(audio.duration);

            let secondCurrent = Math.floor(audio.currentTime) % 60;
            let minuteCurrent = Math.floor(Math.floor(audio.currentTime) / 60);
            let secondLeft = (Math.floor(audio.duration) - Math.floor(audio.currentTime)) % 60;
            let minuteLeft = Math.floor((Math.floor(audio.duration) - Math.floor(audio.currentTime)) / 60);

            let currentDuration, durationLeft;

            currentDuration = secondCurrent < 10 ? `${minuteCurrent}:0${secondCurrent}` : `${minuteCurrent}:${secondCurrent}`;
            durationLeft = secondLeft < 10 ? `-${minuteLeft}:0${secondLeft}` : `-${minuteLeft}:${secondLeft}`;

            currentTime.innerText = currentDuration;
            duration.innerText = durationLeft;
            progress.style.background = `linear-gradient(to right, var(--color-theme) ${progress.value / progress.max * 100}%, #4d4d4d ${progress.value / progress.max * 100}%)`;
        }

        
        //khi next song
        nextBtn.onclick = function(){
            _this.isRandom ? _this.playRandomSong() : _this.nextSong();
            audio.play()
            _this.render()
            _this.scrollToActiveSong()
        }
        //khi prev song
        prevBtn.onclick = function(){
            if(_this.isRandom){
                _this.playRandomSong()
            } else{
                _this.prevSong()
            }
            audio.play()
        }

        // Khi Random xu ly
        randomBtn.onclick = function(e){
            _this.isRandom = !_this.isRandom
            _this.setConfig('isRandom', _this.isRandom)
            randomBtn.classList.toggle('active', _this.isRandom)
        }
        let clickCount = 0;
        // Xử lý lặp lại bài hát
        repeat.onclick = function(e) {
            clickCount++;
            if (clickCount === 1) {
                // Lặp lại một bài hát
                _this.isRepeat = true;
                _this.isatom = false;
                _this.setConfig('isRepeat', _this.isRepeat)
                repeat.classList.add('active')
                repeatBtn.classList.add('active', _this.isRepeat)
            } else if (clickCount === 2) {
                // Lặp lại tất cả bài hát
                _this.isRepeat = false;
                _this.isatom = true;
                _this.setConfig('isatom', _this.isatom)
                repeatBtn.classList.remove('active')
                atomBtn.classList.add('active', _this.isatom)
            } else {
                // Trở lại trạng thái ban đầu
                _this.isRepeat = false;
                _this.isatom = false;
                clickCount = 0;
                repeat.classList.remove('active')
                repeatBtn.classList.remove('active', _this.isRepeat)
                atomBtn.classList.remove('active', _this.isatom)
            }
        }

        //Xử lý next song khi radio ended
        audio.onended = function(){
            if(_this.isRepeat){
                audio.play()
            }else if(_this.isatom){
                _this.nextSong();
                audio.play();
                _this.render();
                _this.scrollToActiveSong();
            }else{
                audio.click()
            }
        }

        //Xử lý volumn
        progress.oninput = function(){
            let sliderValue = progress.value;
            progress.style.background = `linear-gradient(to right, var(--color-theme) ${sliderValue}%, #4d4d4d ${sliderValue}%)`;
            audio.currentTime = progress.value;
        }

        volume.oninput = function(){
            let sliderValue = volume.value;
            volume.style.background = `linear-gradient(to right, var(--color-theme) ${sliderValue}%, #4d4d4d ${sliderValue}%)`;
        }

        mute.onclick = function(){
            audio.volume = 0;
            $('.playbar__volumne').classList.add('mute');
            volumeProgress.value = 0;
            volumeProgress.style.background = `linear-gradient(to right, var(--color-theme) ${0}%, #4d4d4d ${0}%)`;
        }

        unmute.onclick = function(){
            audio.volume = _this.volumeAmount;
            $('.playbar__volumne').classList.remove('mute');
            volumeProgress.value = _this.volumeAmount * 100;
            volumeProgress.style.background = `linear-gradient(to right, var(--color-theme) ${_this.volumeAmount * 100}%, #4d4d4d ${_this.volumeAmount * 100}%)`;
        }

        volumeProgress.onchange = function(){
            audio.volume = volumeProgress.value / 100;

            if(volumeProgress.value == 0){
                if(!$('.playbar__volumne').classList.contains('mute')){
                    $('.playbar__volumne').classList.add('mute');
                }
            }else{
                _this.volumeAmount = volumeProgress.value / 100;
                if($('.playbar__volumne').classList.contains('mute')){
                    $('.playbar__volumne').classList.remove('mute');
                }         
            }
        }

        //Xử lý sự kiện click vào items pop
        pop.onclick = function(){
            if (!pop.classList.contains('active')) {
                _this.isgenre = true;
                _this.setConfig('isgenre', _this.isgenre);
                items.classList.add('active');
                pop.classList.add('active', _this.isgenre);
            }            
        }

        //Xử lý sự kiện click vào items beat
        beat.onclick = function(e){
            if (!beat.classList.contains('active')) {
                _this.isgenre = true;
                _this.setConfig('isgenre', _this.isgenre);
                items.classList.add('active');
                beat.classList.add('active', _this.isgenre);
            } 
        }

        //Xử lý sự kiện click vào items remix
        remix.onclick = function(e){
            if (!remix.classList.contains('active')) {
                _this.isgenre = true;
                _this.setConfig('isgenre', _this.isgenre);
                items.classList.add('active');
                remix.classList.add('active', _this.isgenre);
            } 
        }

        //Xử lý sự kiện click vào items rap
        rap.onclick = function(e){
            if (!rap.classList.contains('active')) {
                _this.isgenre = true;
                _this.setConfig('isgenre', _this.isgenre);
                items.classList.add('active');
                rap.classList.add('active', _this.isgenre);
            } 
        }

        //Xử lý sự kiện click vào items indie
        indie.onclick = function(e){
            if (!indie.classList.contains('active')) {
                _this.isgenre = true;
                _this.setConfig('isgenre', _this.isgenre);
                items.classList.add('active');
                indie.classList.add('active', _this.isgenre);
            } 
        }

        //Xử lý sự kiện click vào items period
        period.onclick = function(e){
            if (!period.classList.contains('active')) {
                _this.isgenre = true;
                _this.setConfig('isgenre', _this.isgenre);
                items.classList.add('active');
                period.classList.add('active', _this.isgenre);
            } 
        }

        // Xử lý sự kiện click see all
        seeall.onclick = function(){
            items.classList.remove('active')
            pop.classList.remove('active',_this.isgenre)
            beat.classList.remove('active',_this.isgenre)
            rap.classList.remove('active',_this.isgenre)
            remix.classList.remove('active',_this.isgenre)
            indie.classList.remove('active',_this.isgenre)
            period.classList.remove('active',_this.isgenre)
        }
       
        // Lắng nghe hành vi click vào playlist
        playlist.addEventListener('click', function(e) {
            islistSelected = true;
            const songNode = e.target.closest('.item:not(.active)');
            if (songNode || !e.target.closest('info')) { 
                //Xử lý click vào playlist
                if (songNode) {
                    _this.currentIndex = Number(songNode.dataset.index);
                    _this.loadCurrentSong();
                    _this.render();
                    audio.play();
                }
                // Xử lý khi click vào song option
                if (e.target.closest('.option')) {
                    // Code xử lý khi click vào song option
                }
            }
        });

        // Lắng nghe hành vi click vào listmusic pop
        poplist.addEventListener('click', function(e) {
            ispoplistSelected = true;
            islistSelected = false;
            isbeatlistSelected = false;
            isindielistSelected = false;
            isremixlistSelected = false;
            israplistSelected = false;
            isperiodlistSelected = false;
            const songpop = e.target.closest('.itemlist:not(.active)');
            if(songpop) {
                // Xử lý click vào danh sách pop
                const selectedIndex = Number(songpop.dataset.index);
                // Lấy bài hát từ danh sách pop đã lọc
                const selectedSong = popSongs[selectedIndex]; 
                _this.currentIndex = selectedIndex;
                _this.loadCurrentSong(selectedSong); 
                _this.renderlistpop();
                audio.play();
            }
        });
        
        // Lắng nghe hành vi click vào listmusic beat
        beatlist.addEventListener('click', function(e) {
            isbeatlistSelected = true;
            islistSelected = false;
            ispoplistSelected = false;
            isindielistSelected = false;
            isremixlistSelected = false;
            israplistSelected = false;
            isperiodlistSelected = false;
            const songbeat = e.target.closest('.itemlist:not(.active)');
            if (songbeat) { 
                //Xử lý click vào danh sách beat
                const selectedIndex = Number(songbeat.dataset.index);
                // Lấy bài hát từ danh sách beat đã lọc
                const selectedSong = beatSongs[selectedIndex];
                _this.currentIndex = selectedIndex;
                _this.loadCurrentSong(selectedSong);
                _this.renderlistbeat();
                audio.play();
            }
        });
        
        // Lắng nghe hành vi click vào listmusic remix
        remixlist.addEventListener('click', function(e) {
            isremixlistSelected = true;
            islistSelected = false;
            ispoplistSelected = false;
            isindielistSelected = false;
            isbeatlistSelected = false;
            israplistSelected = false;
            isperiodlistSelected = false;
            const songremix = e.target.closest('.itemlist:not(.active)');
            if (songremix) { 
                //Xử lý click vào danh sách pop
                const selectedIndex = Number(songremix.dataset.index);
                const selectedSong = remixSongs[selectedIndex];
                _this.currentIndex = selectedIndex;
                _this.loadCurrentSong(selectedSong);
                _this.renderlistremix();
                audio.play();
                
            }
        });

        // Lắng nghe hành vi click vào listmusic rap
        raplist.addEventListener('click', function(e) {
            israplistSelected = true;
            isbeatlistSelected = false;
            islistSelected = false;
            ispoplistSelected = false;
            isindielistSelected = false;
            isremixlistSelected = false;
            isperiodlistSelected = false;
            const songrap = e.target.closest('.itemlist:not(.active)');
            if (songrap) { 
                //Xử lý click vào danh sách pop
                const selectedIndex = Number(songrap.dataset.index);
                _this.currentIndex = selectedIndex;
                const selectedSong = rapSongs[selectedIndex];
                _this.loadCurrentSong(selectedSong);
                _this.renderlistrap();
                audio.play();
                
            }
        });

        // Lắng nghe hành vi click vào listmusic indie
        indielist.addEventListener('click', function(e) {
            isindielistSelected = true;
            isbeatlistSelected = false;
            islistSelected = false;
            ispoplistSelected = false;
            isremixlistSelected = false;
            israplistSelected = false;
            isperiodlistSelected = false;
            const songindie = e.target.closest('.itemlist:not(.active)');
            if (songindie) { 
                //Xử lý click vào danh sách pop
                const selectedIndex = Number(songindie.dataset.index);
                _this.currentIndex = selectedIndex;
                const selectedSong = indieSongs[selectedIndex];
                _this.loadCurrentSong(selectedSong);
                _this.renderlistindie();
                audio.play();
                
            }
        });

        // Lắng nghe hành vi click vào listmusic Period
        periodlist.addEventListener('click', function(e) {
            isperiodlistSelected = true;
            isbeatlistSelected = false;
            islistSelected = false;
            ispoplistSelected = false;
            isindielistSelected = false;
            isremixlistSelected = false;
            israplistSelected = false;
            const songperiod = e.target.closest('.itemlist:not(.active)');
            if (songperiod) { 
                //Xử lý click vào danh sách pop
                const selectedIndex = Number(songperiod.dataset.index);
                _this.currentIndex = selectedIndex;
                const selectedSong = periodSongs[selectedIndex];
                _this.loadCurrentSong(selectedSong);
                _this.renderlistperiod();
                audio.play();
                
            }
        });
    },

    // Kéo tới active song
    scrollToActiveSong: function(){
        setTimeout(() => {
            $('.song.active').scroollIntoView({
                behavior: 'smooth',
                block: 'end',
            })
        }, 500)      
    },
    
    loadCurrentSong: function(){
        let currentSon;
        currentSon = this.currentSong;
        // Load bài đầu tiên
        do{
            heading.textContent = currentSon.name;
            cdThumb.style.backgroundImage = `url('${currentSon.image}')`;
            audio.src = currentSon.path;
            righting.textContent = currentSon.name;
            leftimg.style.backgroundImage = `url('${currentSon.image}')`;
            songname.textContent = currentSon.name;
            lyricsong.innerHTML = currentSon.lyrics;
        }while(!currentSon);

        if (islistSelected) {
            currentSon = this.currentSong;
        }else if(isbeatlistSelected){
            currentSon = this.currentSongBeat;
        }else if(ispoplistSelected){
            currentSon = this.currentSongPop;
        }else if(isremixlistSelected){
            currentSon = this.currentSongRemix;
        }else if(israplistSelected){
            currentSon = this.currentSongRap;
        }else if(isindielistSelected){
            currentSon = this.currentSongIndie;
        }else if(isperiodlistSelected){
            currentSon = this.currentSongPeriod;
        } 
    
        heading.textContent = currentSon.name;
        cdThumb.style.backgroundImage = `url('${currentSon.image}')`;
        audio.src = currentSon.path;
        righting.textContent = currentSon.name;
        leftimg.style.backgroundImage = `url('${currentSon.image}')`;
        songname.textContent = currentSon.name;
        lyricsong.innerHTML = currentSon.lyrics;
    },

    loadConfig: function(){
        this.isRandom = this.config.isRandom
        this.isRepeat = this.config.isRepeat
        this.config.isgenre = this.config.isgenre
    },

    nextSong: function(){
        this.currentIndex++
        if(this.currentIndex >= this.songs.length){
            this.currentIndex = 0
        }
        this.loadCurrentSong()
    },

    prevSong: function(){
        this.currentIndex--
        if(this.currentIndex < 0){
            this.currentIndex = this.songs.length - 1
        }
        this.loadCurrentSong()
    },

    playRandomSong: function(){
        let newIndex
        do{
            newIndex = Math.floor(Math.random() * this.songs.length)
        }while(newIndex === this.currentIndex)

        this.currentIndex = newIndex
        this.loadCurrentSong()
    },

    start: function(){
        //Gán cấu hình vào config app
        this.loadConfig();

        // Định nghĩa thuộc tính cho Object
        this.defineProperties();
        
        // Lắng nghe sự kiện / Sử lý các sự kiện DOM events
        this.handleEvents();

        // Lấy ra bài hát
        this.render();
        
        // Lấy bài hát trong list music
        this.renderlistpop();
        this.renderlistbeat();
        this.renderlistremix();
        this.renderlistrap();
        this.renderlistindie();
        this.renderlistperiod();
        
        // Tải thông tin bài hát vào UI khi chạy ứng dụng
        this.loadCurrentSong();
        
        //Hiển thị trạng thái ban đầu của button repeat và random
        repeatBtn.classList.toggle('active', _this.isRepeat);
        randomBtn.classList.toggle('active', _this.isRandom);
        // itemsgenre.classList.toggle('active', _this.isgenre)
    }
}
app.start();