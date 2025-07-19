FROM gitpod/workspace-full

USER gitpod

# Install the system libraries required for Electron to run in a headless environment
RUN sudo apt-get update && \
    sudo apt-get install -y libatk1.0-0 libatk-bridge2.0-0 libgtk-3-0 libasound2 libgbm1 libnss3 libxss1 libxtst6 && \
    sudo rm -rf /var/lib/apt/lists/*


