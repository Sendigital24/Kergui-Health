import React from "react";
import { QRCodeCanvas } from "qrcode.react";

import waveLogo from "./assets/wave.png";
import orangeLogo from "./assets/orange.png";

const PaiementQRCode = () => {
  const numero = "77 888 35 51";
  const message = "Paiement consultation - Keurgui Health";

  const contenuQR = `
    Numéro : ${numero}
    Message : ${message}
    Moyens : Wave / Orange Money
  `;

  return (
    <div className="flex justify-end pr-10 mt-10">
      <div className="bg-white p-4 shadow-md rounded-lg text-center w-60">
        <h3 className="text-purple-600 font-semibold mb-2 text-sm">
          Scannez pour payer
        </h3>

        <QRCodeCanvas value={contenuQR} size={140} />

        <p className="text-sm text-gray-800 mt-2 font-semibold">{numero}</p>
        <p className="text-xs text-gray-600 mt-1">{message}</p>

        <div className="flex justify-center items-center gap-3 mt-2">
          <img src={waveLogo} alt="Wave" className="w-8 h-8" />
          <img src={orangeLogo} alt="Orange Money" className="w-8 h-8" />
        </div>

        <p className="text-xs text-gray-400 mt-2">
          À copier dans votre application Wave ou Orange
        </p>
      </div>
    </div>
  );
};

export default PaiementQRCode;
