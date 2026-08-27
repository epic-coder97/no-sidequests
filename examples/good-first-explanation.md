# Example: Good First Explanation

Topic: neural-network weights

### What a neural network learns

A neural network learns **which signals should matter more** when producing an output.

Imagine several clues contributing to a decision. Some clues are useful; others barely help. During training, the network adjusts how strongly each clue influences what comes next.

**Key idea:** a **weight** represents how strongly one signal influences another calculation.

```text
signal A --strong influence--\
                            -> next calculation
signal B --weak influence--/
```

The network does not begin knowing the right influences. Training changes them based on how well its outputs match the learning objective.

**Check:** If a signal becomes less useful for predicting the correct output, what would you expect to happen to its influence during successful training?

[Stop. Do not introduce layers, backpropagation, gradients, activation functions, and loss functions yet.]
