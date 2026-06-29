---
title: ROS2 Topic Communication
description: 記錄 ROS2 publish / subscribe topic 通訊 的 Lab 筆記。
---

# ROS2 Topic Communication

- **狀態:** 進行中
- **Date:** 2026-06-20
- **Category:** Robotics

## Purpose

理解 **ROS2** nodes 如何透過 topics 溝通，並評估這個流程如何支援 autonomous robot prototype。

## Setup

- ROS2 environment
- Linux workstation 或 Raspberry Pi
- Example publisher node
- Example subscriber node

## Steps

1. 建立簡單 publisher。
2. 建立 subscriber 監聽 topic。
3. 檢查 topic list 與 message type。
4. 測試 message frequency 與 logging。

## Result

基本 publish / subscribe flow 可正常運作，也讓 sensors、control logic 與 robot state 的連接方式更清楚。

## 筆記

Topic 命名很重要。當 topic names 與 message types 不一致時，debug 會變得很困難。

## Next Step

把 topic flow 接到 sensor input 與 motor control 實驗。
