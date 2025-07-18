FROM gitpod/workspace-full

USER gitpod

RUN sudo apt-get update && \
    sudo apt-get install -y libatk1.0-0 libatk-bridge2.0-0 libgtk-3-0 libasound2 libgbm1 && \
    sudo rm -rf /var/lib/apt/lists/*

