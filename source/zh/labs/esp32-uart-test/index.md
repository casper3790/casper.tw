---
title: ESP32 UART Test
description: 測試 ESP32 與 edge devices 之間 UART communication 的 Lab 筆記。
---

# ESP32 UART Test

- **Status:** Completed
- **Date:** 2026-06-24
- **Category:** Robotics / Embedded systems

## Purpose

在把 **ESP32** 放進更大的 Robotics 或 sensor workflow 前，先確認基本 UART communication 是否穩定。

## Setup

- ESP32 development board
- USB serial monitor
- Jumper wires
- 基本 UART TX / RX connection

## Steps

1. 確認 baud rate 與 serial port。
2. 從 ESP32 傳送簡單訊息。
3. 在接收端讀取訊息。
4. 用不同 payload 長度重複測試。

## Result

當 wiring 與 baud rate 正確時，ESP32 可以送出可預期的 serial messages。

## Notes

主要問題通常來自 wiring 方向、baud rate 不一致，以及 log 不夠清楚。

## Next Step

加入 message framing 與基本 error handling。
