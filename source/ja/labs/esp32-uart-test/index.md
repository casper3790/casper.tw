---
title: ESP32 UART Test
description: ESP32 と edge devices の UART communication を検証する Lab note。
---

# ESP32 UART Test

- **Status:** Completed
- **Date:** 2026-06-24
- **Category:** Robotics / Embedded systems

## Purpose

**ESP32** を大きな Robotics や sensor workflow に入れる前に、基本的な UART communication が安定しているか確認します。

## Setup

- ESP32 development board
- USB serial monitor
- Jumper wires
- Basic UART TX / RX connection

## Steps

1. baud rate と serial port を確認する。
2. ESP32 から簡単な message を送る。
3. 受信側で message を読む。
4. payload length を変えて再テストする。

## Result

wiring と baud rate が正しい場合、ESP32 は予測しやすい serial messages を送信できました。

## Notes

主な問題は wiring direction、baud rate mismatch、logging の不足でした。

## Next Step

message framing と basic error handling を追加します。
