const async_quitar = (id) => {
  const csrf = document.getElementById("_csrf").value;

  fetch("/delete", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "csrf-token": csrf,
    },
    body: JSON.stringify({ id: id }),
  })
    .then((result) => {
      console.log(result);
      return result.json(); //Regresa otra promesa
    })
    .then((data) => {
      let html = "";

      for (let disco of data.discos) {
        html += `<div class="columns">`;
        html +=
          `<div class="column">
                <div class="card">
                  <div class="card-content">
                    <div class="media">
                      <div class="media-left">
                        <figure class="image is-128x128">
                          <img src="public/uploads` + disco.imagend + `" alt="` + disco.nombre + `">
                          <button class="button is-dark" onclick=async_quitar("` + disco.id + `")>Quitar</button>
                        </figure>
                      </div>
                      <div class="media-content">
                        <p class="title is-4">` + disco.nombre + ` </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div> 
              `;
            }
      html += `</div>`;
      document.getElementById("discos").innerHTML = html;
    })
    .catch((err) => {
      console.log(err);
    });
};
