const carouselItem=document.querySelectorAll(".carrossel-item"),previousButton=document.querySelector(".carrossel-botao.previous"),nextButton=document.querySelector(".carrossel-botao.next");let currentItem=0;function handleNextSlide(){currentItem<carouselItem.length-1&&(nextSlide(),document.querySelector(".seta-direita").src="build/images/arrow-right.svg",carouselItem[currentItem]===carouselItem[carouselItem.length-1]?(nextButton.setAttribute("disabled",!0),document.querySelector(".seta-direita").src="build/images/arrow-right-black.svg",previousButton.removeAttribute("disabled")):(nextButton.removeAttribute("disabled"),previousButton.removeAttribute("disabled"),document.querySelector(".seta").src="build/images/arrow-left-white.svg"))}function handlePreviousSlide(){0<currentItem&&(previousSlide(),carouselItem[currentItem]===carouselItem[0]?(previousButton.setAttribute("disabled",!0),nextButton.removeAttribute("disabled"),document.querySelector(".seta").src="build/images/arrow-left.svg"):(previousButton.removeAttribute("disabled"),nextButton.removeAttribute("disabled"),document.querySelector(".seta-esquerda").src="build/images/arrow-left-white.svg",document.querySelector(".seta-direita").src="build/images/arrow-right.svg"))}function nextSlide(){currentItem++,carouselItem.forEach(e=>{e.classList.remove("ativo")}),carouselItem[currentItem].classList.add("ativo"),carouselItem[currentItem].scrollIntoView({behavior:"smooth",inline:"start",block:"nearest"})}function previousSlide(){currentItem--,carouselItem.forEach(e=>{e.classList.remove("ativo")}),carouselItem[currentItem].classList.add("ativo"),carouselItem[currentItem].scrollIntoView({behavior:"smooth",inline:"start",block:"nearest"})}nextButton.addEventListener("click",handleNextSlide),previousButton.addEventListener("click",handlePreviousSlide);