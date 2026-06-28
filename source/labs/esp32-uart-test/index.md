---
title: ESP32 UART Test
description: Lab note for testing UART communication between ESP32 and edge devices.
---

# ESP32 UART Test

- **Status:** Completed
- **Date:** 2026-06-24
- **Category:** Robotics / Embedded systems

## Purpose

Verify basic UART communication between an **ESP32** and an edge device before using it inside a larger Robotics or sensor workflow.

## Setup

- ESP32 development board
- USB serial monitor
- Jumper wires
- Basic UART TX / RX connection

## Steps

1. Confirm the baud rate and serial port.
2. Send a simple message from the ESP32.
3. Read the message on the receiving side.
4. Repeat the test with different payload lengths.

## Result

The test confirmed that the ESP32 can send predictable serial messages when wiring and baud rate are correct.

## Notes

Most issues came from wiring direction, baud rate mismatch, and unclear logging.

## Next Step

Add message framing and basic error handling.
