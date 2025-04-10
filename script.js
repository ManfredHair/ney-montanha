function f(x) {
    return Math.sin(5 * x) * (1 - Math.tanh(x * x));
  }
  
  function vizinhanca(x) {
    return x + (Math.random() * 0.2 - 0.1); // ε ∈ [-0.1, 0.1]
  }
  
  function simulatedAnnealing() {
    let T = 1.0;
    const alpha = 0.95;
    const maxIter = 100;
    let x = Math.random() * 4 - 2; // x ∈ [-2, 2]
    let fx = f(x);
    const historico = [{ x, y: fx }];
  
    while (T > 0.0001) {
      for (let i = 0; i < maxIter; i++) {
        let x2 = vizinhanca(x);
        if (x2 < -2) x2 = -2;
        if (x2 > 2) x2 = 2;
  
        const fx2 = f(x2);
        const delta = fx2 - fx;
  
        if (delta > 0 || Math.random() < Math.exp(delta / T)) {
          x = x2;
          fx = fx2;
        }
  
        historico.push({ x, y: fx });
      }
      T *= alpha;
    }
  
    return { maxX: x, maxY: fx, historico };
  }
  
  function plot(historico) {
    const ctx = document.getElementById("chart").getContext("2d");
  
    const funcaoData = [];
    for (let x = -2; x <= 2; x += 0.01) {
      funcaoData.push({ x: x, y: f(x) });
    }
  
    const caminhoData = historico.map(ponto => ({ x: ponto.x, y: ponto.y }));
  
    new Chart(ctx, {
      type: "scatter",
      data: {
        datasets: [
          {
            label: "Função f(x)",
            data: funcaoData,
            showLine: true,
            borderColor: "blue",
            pointRadius: 0,
          },
          {
            label: "Caminho Simulated Annealing",
            data: caminhoData,
            borderColor: "red",
            backgroundColor: "red",
            showLine: true,
            pointRadius: 2,
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: "linear",
            min: -2,
            max: 2,
            title: {
              display: true,
              text: "x",
            },
          },
          y: {
            title: {
              display: true,
              text: "f(x)",
            },
          },
        },
      },
    });
  }
  
  function runAnnealing() {
    const resultado = simulatedAnnealing();
    plot(resultado.historico);
  
    document.getElementById("resultado").innerText =
      `Máximo aproximado encontrado: x = ${resultado.maxX.toFixed(4)}, f(x) = ${resultado.maxY.toFixed(4)}`;
  }
  