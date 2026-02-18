---
layout: page
title: ESTransformer
description: Hybrid Transformer and Holt-Winter's method for time series forecasting.
importance: 2
category: research
related_publications: true
---

At the [VNU-HCMUT AI Lab](https://www.hcmut.edu.vn/en), I developed ESTransformer, a hybrid forecasting model that combines Holt-Winter's exponential smoothing with transformer neural networks.

**Key contributions:**

- Combined Transformer neural networks with Holt-Winters statistical methods, reducing prediction error by 15% and improving training efficiency by 60% on complex seasonal datasets
- Led the full 9-month development cycle from problem analysis to publication as first author
- Published at the **Time Series for Health** workshop at **ICLR 2024** {% cite truong2024hybridtransformer %}

The model was evaluated on the M4 competition dataset containing 100,000 time series across six different frequencies (hourly to yearly), demonstrating comparable or improved performance compared to the state-of-the-art ESRNN model.
