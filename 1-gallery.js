import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{S as a}from"./assets/vendor-CgTBfC_f.js";const i=document.querySelector(".gallery");i.insertAdjacentHTML("beforeend",o(images));function o(e){return e.map(({preview:l,original:r,description:t})=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${r}">
      <img
        class="gallery-image"
        src="${l}"
        alt="${t}"
        />
      </a>
    </li>
    `).join("")}new a(".gallery a",{captionsData:"alt",captionDelay:250});console.log(a);
//# sourceMappingURL=1-gallery.js.map
