# Example: Advanced Lesson Without Visual Overload

Topic: regularization in machine learning

### Regularization changes what counts as a good solution

Empirical risk minimization chooses parameters that perform well on the observed training data. Regularization modifies that objective so that fitting the data is not the only preference.

**Key idea:** instead of optimizing only training fit, we optimize training fit **plus a preference over solutions**.

```text
objective = data-fit term + λ × regularization term
```

`λ` controls the trade-off. Larger values make the regularization preference matter more relative to training fit.

For L2 regularization:

```text
J(θ) = L(θ) + λ ||θ||²
```

This discourages parameter vectors with large Euclidean norm. It does **not** directly say “make the model simple” in every possible sense; that interpretation depends on the parameterization and model class.

**Transfer check:** if you rescale the features but keep the same `λ`, why might the practical effect of L2 regularization change?

## Teaching note

The response is technically precise but still has one job: establish regularization as a modified optimization preference. Bayesian interpretations, weight decay implementation details, and generalization theory belong in later segments.
