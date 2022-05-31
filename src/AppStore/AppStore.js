import { makeAutoObservable } from "mobx";

class AppStore {
  constructor() {
    makeAutoObservable(this);
  }

  locos = [];
  showUpdateModal = false;
  currentUpdateLoco = {};
  showMapModal = false;
  latLngInputs = {
    lat: "",
    lng: "",
  };
  updateLatLngInputs = {
    lat: "",
    lng: "",
  };
  setLat = (val) => {
    this.latLngInputs.lat = val;
  };
  setLng = (val) => {
    this.latLngInputs.lng = val;
  };
  setUpdateLat = (val) => {
    this.updateLatLngInputs.lat = val;
  };
  setUpdateLng = (val) => {
    this.updateLatLngInputs.lng = val;
  };
  mapPick = (coords) => {
    if (this.showUpdateModal) {
      this.setUpdateLat(coords.lat);
      this.setUpdateLng(coords.lng);
    } else {
      this.setLat(coords.lat);
      this.setLng(coords.lng);
    }
  };
  mapModalToggle = () => {
    this.showMapModal = !this.showMapModal;
  };
  modalOn = (loco) => {
    this.showUpdateModal = true;
    this.currentUpdateLoco = loco;
  };

  modalOff = () => {
    this.showUpdateModal = false;
    this.currentUpdateLoco = {};
    this.setUpdateLat("");
    this.setUpdateLng("");
  };

  addLoco = (loco) => {
    this.locos.push(loco);
  };

  deleteLoco = (id) => {
    this.locos = this.locos.filter((item) => item.id !== id);
  };

  updateLoco = (updatedLoco) => {
    const idx = this.locos.findIndex((item) => item.id === updatedLoco.id);
    this.locos[idx] = updatedLoco;
  };
}

const appStore = new AppStore();

export default appStore;
