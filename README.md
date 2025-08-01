# Villagr
## The social media application for Minecraft villagers.

<p align="center">
  <img src="https://github.com/user-attachments/assets/2a1c73e1-0474-465b-a967-eb2d7969b1d3" width="360"/>
  <img src="https://github.com/user-attachments/assets/f352878c-2458-464c-a018-edcf775d60a8" width="360"/>
</p>

Deep underground Eltopia lies a village sheltered from the dangeous world. Villagers live their lives in a sheltered bubble and have developed a steady society and economy! Villagr is a social media/trade application used to assist with village transactions. While currently in an unfinished state, the final application will ultimately allow users to:

* Add new Villagers
* Add new Trades
* Browse all Villagers
* Browse all Villagers by Job
* Browse all Trades by Villager
* Update Villagers
* Update Trade bids, asks, and quantities
* Remove Villagers
* Remove Trade bids, asks, and quantities

## Getting Started

To use this project yourself:

1. In the directory where you want the application stored on your computer, clone this repository. In your terminal, enter these commands:

```
git clone https://github.com/ellewright/villagr
cd villagr
```

2. Move into the backend directory:

```
cd backend
```

3. Create a `.env` file in the root of the directory, and add the following variables:

* You can request to be given the variables by emailing me: <a href="mailto:elliewright055@gmail.com">elliewright055@gmail.com</a>.

```
MONGO_DATABASE=<database>
MONGO_USER=<username>
MONGO_PASSWORD=<password>
MONGO_CLUSTER=<cluster>
```

3. Open a new terminal, and from the root directory, use these commands to move to the frontend and install dependencies:

```
cd frontend
npm i
```

7. In the root of the frontend directory, create a `.env` file, and add:

```
VITE_API_URL="http://localhost:8080"
```

8. Run the frontend! In your terminal, type the command:

```
npm run dev
```
