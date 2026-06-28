---
title: ROS2 Topic Communication
description: Lab note for documenting ROS2 publish and subscribe topic communication.
---

# ROS2 Topic Communication

- **Status:** In Progress
- **Date:** 2026-06-20
- **Category:** Robotics

## Purpose

Understand how **ROS2** nodes communicate through topics and how that flow can support an autonomous robot prototype.

## Setup

- ROS2 environment
- Linux workstation or Raspberry Pi
- Example publisher node
- Example subscriber node

## Steps

1. Create a simple publisher.
2. Create a subscriber that listens to the topic.
3. Inspect the topic list and message type.
4. Test message frequency and logging.

## Result

The basic publish / subscribe flow works and gives a clearer model for connecting sensors, control logic, and robot state.

## Notes

Naming topics clearly matters. Debugging becomes harder when topic names and message types are inconsistent.

## Next Step

Connect the topic flow to sensor input and motor control experiments.
