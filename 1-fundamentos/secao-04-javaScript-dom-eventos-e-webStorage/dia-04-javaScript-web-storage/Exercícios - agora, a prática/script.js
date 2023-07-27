window.onload = () => {
    // restaura o as preferencias escolhidas do localStorage
    const restoreBackgroundColor = () => {
      if (localStorage.getItem('backgroudColor') !== null) {
        const restoreBackground = JSON.parse(localStorage.getItem('backgroudColor'));
        const constent = document.querySelector(".content");
        constent.style.backgroundColor = restoreBackground;
      }
    }
    restoreBackgroundColor();

    const restoreColor = () => {
      if (localStorage.getItem('color') !== null) {
        const restoreColor = JSON.parse(localStorage.getItem('color'));
        const constent = document.querySelector(".content");
        console.log(constent);
        constent.style.color = restoreColor;
      }
    }
    restoreColor();

    const restoreFontSize = () => {
      if (localStorage.getItem('FontSize') !== null) {
        const restoreFontSize = JSON.parse(localStorage.getItem('FontSize'));
        const constent = document.querySelector(".paragraph");
        constent.style.fontSize = restoreFontSize;
      }
    }
    restoreFontSize();

    const restorelineHeight = () => {
      if (localStorage.getItem('lineHeight') !== null) {
        const restorelineHeight = JSON.parse(localStorage.getItem('lineHeight'));
        const constent = document.querySelector(".paragraph");
        constent.style.lineHeight = restorelineHeight;
      }
    }
    restorelineHeight();

    const restoreFontFamily = () => {
      if (localStorage.getItem('FontFamily') !== null) {
        const restoreFontFamily = JSON.parse(localStorage.getItem('FontFamily'));
        const constent = document.querySelector(".paragraph");
        constent.style.fontFamily = restoreFontFamily;
      }
    }
    restoreFontFamily();

    // guarda o as preferencia escolhidas no localStorage
    
    const storageBackgroudColor = (backgroudColor) => {
      if (localStorage.getItem('backgroudColor') === null) {
        localStorage.setItem('backgroudColor', JSON.stringify(backgroudColor));
      } else if (backgroudColor !== Object.values(localStorage)) {
        localStorage.setItem('backgroudColor', JSON.stringify(backgroudColor));
      }
    }
    
    const storageColor = (color) => {
      if (localStorage.getItem('color') === null) {
        localStorage.setItem('color', JSON.stringify(color));
      } else if (color !== Object.values(localStorage)) {
        localStorage.setItem('color', JSON.stringify(color));
      }
    }

    const storageFontSize = (size) => {
      if (localStorage.getItem('FontSize') === null) {
        localStorage.setItem('FontSize', JSON.stringify(size));
      } else if (size !== Object.values(localStorage)) {
        localStorage.setItem('FontSize', JSON.stringify(size));
      }
    }

    const storagelineHeight = (height) => {
      if (localStorage.getItem('lineHeight') === null) {
        localStorage.setItem('lineHeight', JSON.stringify(height));
      } else if (height !== Object.values(localStorage)) {
        localStorage.setItem('lineHeight', JSON.stringify(height));
      }
    }

    const storageFontFamily = (family) => {
      if (localStorage.getItem('FontFamily') === null) {
        localStorage.setItem('FontFamily', JSON.stringify(family));
      } else if (family !== Object.values(localStorage)) {
        localStorage.setItem('FontFamily', JSON.stringify(family));
      }
    }

    // aplica a cor de fundo quando o evento do click do buton backgroundColor
    const setBackgroundColor = (color) => {
      let content = document.querySelector(".content")
      content.style.backgroundColor = color
    }

    // aplica cor no texto quando evento do click do buton color fonte
    const setFontColor = (color) => {
      let paragraphs = document.querySelectorAll(".paragraph")
      for (let index = 0; index < paragraphs.length; index += 1) {
        paragraphs[index].style.color = color
      }
    }
    // aplica tamanho da fonte
    const setFontSize = (size) => {
      let paragraphs = document.querySelectorAll(".paragraph")
      for (let index = 0; index < paragraphs.length; index += 1) {
        paragraphs[index].style.fontSize = size
      }
    }
    // aplica espaçamento entre as linhas
    const setLineHeight = (height) => {
      let paragraphs = document.querySelectorAll(".paragraph")
      for (let index = 0; index < paragraphs.length; index += 1) {
        paragraphs[index].style.lineHeight = height
      }
    }
    // aplica tipo de fonte
    const setFontFamily = (family) => {
      let paragraphs = document.querySelectorAll(".paragraph")
      for (let index = 0; index < paragraphs.length; index += 1) {
        paragraphs[index].style.fontFamily = family
      }
    }
  
    // Cor de fundo da tela;
    let backgroundColorButtons = document.querySelectorAll("#background-color>button")
    for (let index = 0; index < backgroundColorButtons.length; index += 1) {
      backgroundColorButtons[index].addEventListener("click", (event) => {
        setBackgroundColor(event.target.innerHTML)
        storageBackgroudColor(event.target.innerHTML)
      })
    }
  
    // Cor do texto;
    let fontColorButtons = document.querySelectorAll("#font-color>button")
    for (let index = 0; index < fontColorButtons.length; index += 1) {
      fontColorButtons[index].addEventListener("click", (event) => {
        setFontColor(event.target.innerHTML)
        storageColor(event.target.innerHTML)
      })
    }
  
    // Tamanho da fonte
    let fontSizeButtons = document.querySelectorAll("#font-size>button")
    for (let index = 0; index < fontSizeButtons.length; index += 1) {
      fontSizeButtons[index].addEventListener("click", (event) => {
        setFontSize(event.target.innerHTML)
        storageFontSize(event.target.innerHTML)
      })
    }
  
    // Espaçamento entre as linhas do texto;
    let lineHeightButtons = document.querySelectorAll("#line-height>button")
    for (let index = 0; index < lineHeightButtons.length; index += 1) {
      lineHeightButtons[index].addEventListener("click", (event) => {
        setLineHeight(event.target.innerHTML)
        storagelineHeight(event.target.innerHTML)
      })
    }
  
    // Tipo da fonte (_Font family_).
    let fontFamilyButtons = document.querySelectorAll("#font-family>button")
    for (let index = 0; index < fontFamilyButtons.length; index += 1) {
      fontFamilyButtons[index].addEventListener("click", (event) => {
        setFontFamily(event.target.innerHTML)
        storageFontFamily(event.target.innerHTML)
      })
    }
  }