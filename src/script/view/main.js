/* eslint-disable no-useless-return */
/* eslint-disable operator-linebreak */
import $ from "jquery";

function main() {
  const baseURL = "https://picsum.photos";

  const getPict = async (numPage) => {
    try {
      const listPicElement = document.getElementById("listPic");
      listPicElement.innerHTML = "";
      const response = await fetch(`${baseURL}/v2/list?page=${numPage}`);
      const responseJSON = await response.json();
      responseJSON.forEach((dataJSON) => {
        listPicElement.innerHTML += `
                    <div class="col-lg-5 col-md-10 col-sm-12">
                        <div class="card text-bg-dark border-0 m-md-3 m-lg-2">
                            <img src="${dataJSON.download_url}" data-src="${dataJSON.download_url}" class="card-img shadow lozad" data-placeholder-background="red" alt="${dataJSON.author}">
                            <div class="card-img-overlay">
                                <h5 class="card-title">${dataJSON.id}</h5>
                                <p class="card-text">${dataJSON.width} x ${dataJSON.height}</p>
                                <a href="${dataJSON.download_url}" class="btn btn-sm btn-light" download>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                `;
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getRandomImage = (width, height) => {
    const response = `${baseURL}/${width}/${height}`;
    return response;
  };

  const pageItem = document.querySelector("#page");
  const btnNext = document.querySelector(".next");
  const btnPrev = document.querySelector(".prev");
  $(document).ready(() => {
    $(btnNext).click(() => {
      pageItem.value += 1;
      pageItem.innerText = pageItem.value;
      getPict(pageItem.value);
    });
    $(btnPrev).click(() => {
      if (pageItem.innerText !== "1" && pageItem.value !== 1) {
        pageItem.value -= 1;
        pageItem.innerText = pageItem.value;
        getPict(pageItem.value);
      } else {
        return;
      }
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const btnRandom = document.getElementById("btnRandom");
    const widthImage = document.getElementById("widthImage");
    const heightImage = document.getElementById("heightImage");
    const modalContent = document.getElementById("modal-content");
    const mode = document.getElementById("mode");
    btnRandom.addEventListener("click", () => {
      const createImage = document.createElement("img");
      const random = getRandomImage(widthImage.value, heightImage.value);
      if (widthImage.value === "" && heightImage.value === "") {
        modalContent.innerText = "Nothing else";
      } else {
        createImage.setAttribute("src", random);
        createImage.classList.add("lozad");
        modalContent.innerHTML = "";
        modalContent.appendChild(createImage);
      }
    });
    mode.addEventListener("click", (event) => {
      event.preventDefault();
      if (
        mode.getAttribute("src") ===
        "https://cdn-icons-png.flaticon.com/512/1812/1812660.png"
      ) {
        mode.setAttribute(
          "src",
          "https://cdn-icons-png.flaticon.com/512/2698/2698194.png"
        );
        document.body.style.backgroundColor = "#061429";
        document.body.style.color = "white";
      } else {
        mode.setAttribute(
          "src",
          "https://cdn-icons-png.flaticon.com/512/1812/1812660.png"
        );
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
      }
    });
    getPict();
  });
}
export default main;
