class Jumbotron extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="mode">
            <button class="btn btn-outline-primary shadow rounded-1">
                <img src="https://cdn-icons-png.flaticon.com/512/1812/1812660.png" alt="M" width="20px" id="mode">
            </button>
        </div>
        <div class="container mt-5 p-3 mb-4">
            <div class="row justify-content-center align-item-center">
                <div class="col-12 text-center mb-5">
                    <img src="https://cdn-icons-png.flaticon.com/512/1829/1829415.png" alt="logos" width=50px>
                    <h1 class="fs-1 fw-bolder d-inline ms-2">Lorem Picsum</h1>
                    <h2 class="fw-normal">The Lorem Ipsum for Photos</h2>
                </div>
                <div class="col-12">
                    <img src="https://picsum.photos/650/384" alt="pic" class="img-fluid rounded mx-auto d-block shadow p-0 lozad" >
                </div>
            </div>
        </div>
        `;
  }
}

customElements.define("jumbotron-hero", Jumbotron);
