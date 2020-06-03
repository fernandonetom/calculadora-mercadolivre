document.addEventListener("readystatechange", function () {
	if (document.readyState === "complete") {
		let inputDesejado = document.getElementById("valorDesejado");
		let inputFrete = document.getElementById("valorFrete");
		let classico = document.getElementById("classico");
		let premium = document.getElementById("premium");
		let valorCalculado = document.getElementById("valorCalculado");

		valorCalculado.style.display = "none";

		localStorage.getItem("valorFrete")
			? (inputFrete.value = parseFloat(
					localStorage.getItem("valorFrete").replace(",", ".")
			  )
					.toFixed(2)
					.replace(".", ","))
			: (inputFrete.value = "");

		const calcular = (valorDesejado) => {};

		const salvarFrete = () => {
			localStorage.setItem("valorFrete", inputFrete.value);
		};

		inputDesejado.addEventListener("input", () => {
			valorDesejado = parseFloat(inputDesejado.value.replace(",", "."));
			if (inputDesejado.value != "") {
				if (valorDesejado > 120) {
					valorDesejado =
						valorDesejado +
						5 +
						parseFloat(localStorage.getItem("valorFrete").replace(",", "."));
				} else {
					valorDesejado = valorDesejado + 5;
				}
				let calculaClassico = (valorDesejado / 0.89).toFixed(2);
				let calculaPremium = (valorDesejado / 0.84).toFixed(2);

				classico.innerHTML =
					"Anúncio Clássico: R$" + calculaClassico.replace(".", ",");
				premium.innerHTML =
					"Anúncio Premium: R$" + calculaPremium.replace(".", ",");

				valorCalculado.style.opacity = 0;
				valorCalculado.style.display = "flex";
				setTimeout(() => {
					valorCalculado.style.opacity = 1;
				}, 500);
			} else {
				valorCalculado.style.opacity = 0;
				setTimeout(() => {
					valorCalculado.style.display = "none";
				}, 500);
			}
		});
		inputFrete.addEventListener("input", salvarFrete);
	}
});
