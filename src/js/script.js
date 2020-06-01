document.addEventListener("readystatechange", function () {
	if (document.readyState === "complete") {
		let inputDesejado = document.getElementById("valorDesejado");
		let inputFrete = document.getElementById("valorFrete");
		let classico = document.getElementById("classico");
		let premium = document.getElementById("premium");

		localStorage.getItem("valorFrete")
			? (inputFrete.value = localStorage.getItem("valorFrete"))
			: (inputFrete.value = "");

		const calcular = (valorDesejado) => {};

		const salvarFrete = () => {
			localStorage.setItem("valorFrete", inputFrete.value);
		};

		inputDesejado.addEventListener("input", () => {
			valorDesejado = parseFloat(inputDesejado.value);
			if (valorDesejado > 120) {
				valorDesejado =
					valorDesejado + 5 + parseFloat(localStorage.getItem("valorFrete"));
			} else {
				valorDesejado = valorDesejado + 5;
			}
			let calculaClassico = (valorDesejado / 0.89).toFixed(2);
			let calculaPremium = (valorDesejado / 0.84).toFixed(2);

			classico.innerHTML = "Anúncio Clássico: R$" + calculaClassico;
			premium.innerHTML = "Anúncio Premium: R$" + calculaPremium;
		});
		inputFrete.addEventListener("input", salvarFrete);
	}
});
