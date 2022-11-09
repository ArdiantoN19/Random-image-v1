class RandomImage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="row m-0 justify-content-center align-item-center">
                <div class="col-lg-3 col-5">
                    <div class="input-group mb-3">
                    <span class="input-group-text bg-primary">W:</span>
                    <input type="text" class="form-control" placeholder="px" id="widthImage">
                    </div>
                </div>
                <div class="col-lg-3 col-5">
                    <div class="input-group mb-3">
                    <span class="input-group-text bg-primary">H:</span>
                    <input type="text" class="form-control" placeholder="px" id="heightImage">
                    </div>
                </div>
            </div>
            <div class="row m-0 justify-content-center">
                <button type="button" id="btnRandom" class="btn btn-primary col-lg-3 col-5 mt-2" data-bs-toggle="modal" data-bs-target="#exampleModal" title="click here for random image">
                    Random
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
                        <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
                        <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
                    </svg>
                </button>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content p-1" id="modal-content">
                           
                        </div>
                    </div> 
                </div>
            </div>
        `;
  }
}

customElements.define("random-image", RandomImage);
