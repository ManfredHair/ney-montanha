# Inteligência Artificial

**Prof. Claudinei Dias (Ney)**  
**Atividade - Simulated Annealing**

## Problema 1

**Achar o melhor ponto de vista em uma montanha.**  
Aplicar o algoritmo de Simulated Annealing para encontrar o ponto mais alto (máximo) em um terreno simulado.

O terreno é representado por uma função matemática simples, com vários picos e vales.  
Considere que você é um drone explorador tentando encontrar o ponto mais alto em uma cadeia de montanhas fictícia.

---

## 🧭 Orientações

1. Considere a função abaixo:
   - O domínio da função é `x ∈ [-2, 2]`.
   - Essa função possui vários picos (máximos locais).
   - Seu objetivo é encontrar o ponto mais alto utilizando o algoritmo de Simulated Annealing.

2. Implemente o algoritmo de **Simulated Annealing** em **Python**.

3. Defina:
   - Temperatura inicial `T0 = 1.0`
   - Taxa de resfriamento `α = 0.95`
   - Número máximo de iterações por temperatura: `100`

4. Crie uma função de vizinhança:
   - Dado um ponto `x`, gere `x′ = x + ε`, onde `ε ∈ [-0.1, 0.1]`

5. Plote:
   - A função `f(x)`
   - O caminho percorrido pelo algoritmo (para visualizar a busca pelo máximo)

---

## 💡 Dicas

- Use `random.uniform(-0.1, 0.1)` para gerar `ε`
- Use `math.exp(-delta/T)` para a aceitação probabilística
- Guarde o histórico dos pontos visitados para plotar depois

---

## 🧠 Raciocínio Intuitivo

Imagine você em uma exploração de montanhas (função `f`) tentando achar o vale mais fundo (**mínimo global**).

- No início (alta temperatura), você aceita subir montanhas (soluções piores) porque está animado (com energia).
- Conforme “esfria” (T diminui), você se torna mais seletivo e só aceita descidas ou pequenas subidas.
- Assim, você evita cair em mínimos rasos (mínimos locais) e tem chance de achar o melhor caminho até o vale profundo (mínimo global).
