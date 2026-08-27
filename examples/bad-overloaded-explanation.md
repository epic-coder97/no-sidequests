# Example: Overloaded Explanation to Avoid

Topic: neural-network weights

## Bad pattern

> Neural networks consist of input, hidden, and output layers of artificial neurons that compute weighted sums followed by nonlinear activation functions. During supervised learning, an objective or loss function measures prediction error, which is differentiated using backpropagation and the chain rule. An optimizer such as SGD or Adam then updates weights according to gradients, learning rates, momentum, regularization, batch statistics, and other hyperparameters. Weights can be interpreted as parameters of affine transformations, though in deep networks individual weights are usually not semantically meaningful. Modern architectures may use convolution, recurrence, attention, normalization, residual connections, embeddings, and parameter sharing.

## Why it fails in Focus mode

The paragraph is not necessarily false. The problem is instructional sequencing.

It asks a novice to hold too many unresolved ideas at once:

```text
weights
+ neurons
+ layers
+ activation
+ loss
+ gradients
+ backpropagation
+ optimizer
+ hyperparameters
+ architecture families
```

The learner has not yet formed the core relationship: **a weight controls influence**.

## Repair

Teach that relationship first. Add training only after the learner can predict what stronger and weaker weights imply.
