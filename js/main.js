("use strict");

{
  // summary要素を取得
  const summary = document.querySelectorAll("summary");
  summary.forEach((summary, index) => {
    summary.style.display = "none";
    summary.style.opacity = 0;
    summary.style.opacity = 1;
  });
  // ヘッダー、メニューのアニメーション
  const header = document.getElementById("header");
  const aside = document.querySelector("aside");

  header.animate([{ opacity: "0" }, { opacity: "1" }], 1500);
  aside.animate([{ opacity: "0" }, { opacity: "1" }], 1500);

  // NEWSここから
  function btn1() {
    const text = document.getElementById("text1");
    if (text.style.display === "block") {
      text.style.display = "none";
    } else {
      text.style.display = "block";
      summary.style.opacity = 1;
    }
    anime({
      targets: "#text1",
      translateY: 10,
      duration: 3000,
    });
  }
  // NEWSここまで

  // PROJECTSここから
  function btn2() {
    const text = document.getElementById("text2");
    if (text.style.display === "block") {
      text.style.display = "none";
    } else {
      text.style.display = "block";
    }
    anime({
      targets: "#text2",
      translateY: 10,
      duration: 3000,
    });
  }
  // PROJECTSここまで

  // ABOUTSここから
  function btn3() {
    const text = document.getElementById("text3");
    if (text.style.display === "block") {
      text.style.display = "none";
    } else {
      text.style.display = "block";
    }
    anime({
      targets: "#text3",
      translateY: 10,
      duration: 3000,
    });
  }
  // ABOUTSここまで

  // COLLECTIONSここから
  function btn4() {
    const text = document.getElementById("text4");
    if (text.style.display === "block") {
      text.style.display = "none";
    } else {
      text.style.display = "block";
    }
    anime({
      targets: "#text4",
      translateY: 10,
      duration: 3000,
    });
  }
  // COLLECTIONSここまで

  // CONTACTSここから
  function btn5() {
    const text = document.getElementById("text5");
    if (text.style.display === "block") {
      text.style.display = "none";
    } else {
      text.style.display = "block";
    }
    anime({
      targets: "#text5",
      translateY: 10,
      duration: 3000,
    });
  }
  // COLLECTIONSここまで

  // STOCKLISTSここから
  function btn6() {
    const text = document.getElementById("text6");
    if (text.style.display === "block") {
      text.style.display = "none";
    } else {
      text.style.display = "block";
    }
    anime({
      targets: "#text6",
      translateY: 10,
      duration: 3000,
    });
  }
  // STOCKLISTSここまで

  // モバイル（レスポンシブ）
  // アイコンクリックしてメニューを表示
  const icon = document.getElementById("mobileAside");
  const menu = document.querySelector("aside");

  icon.animate([{ opacity: "0" }, { opacity: "1" }], 2000);

  function iconBtn() {
    if (window.matchMedia("(min-width:768px)").matches) {
      // PC処理
      icon.style.display = "none";
    } else if (window.matchMedia("(max-width:767px)").matches) {
      // スマホ処理
      icon.style.display = "block";
      menu.style.display = "block";
      menu.animate([{ opacity: "0" }, { opacity: "1" }], 1500);
      icon.style.display = "none";
    }
  }
}
