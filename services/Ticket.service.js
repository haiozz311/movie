const { Schema } = require("mongoose");
const { User } = require("../models/User.modal");
const { Ticket } = require("../models/Ticket.modal");
const { Seat } = require("../models/seat.modal");
const { TicketRoom } = require("../models/TicketRoom.modal");
module.exports.createTicket = (req, res, next) => {
  //   Ticket;
   seatcodes, seatid
  //userid => token
  const userId = req.user._id; // token
  console.log(userId);
  const { maLichChieu, danhSachVe,taiKhoan } = req.body;
  TicketRoom.findById(ticketRoom )
    .then((ticketRoom) => {
      if (!ticketRoom)
        return Promise.reject({
          status: 404,
          message: "ticketRoom Not Found",
        });
      const availableSeatCode = ticketRoom.danhSachGhe
        .filter((seat) => !ticketRoom.danhSachGhe.daDat)
        .map((seat) => seat.code);
        console.log(seat)
      // const errSeatCodes = [];
      // console.log("errSeatCodes", errSeatCodes);
      // seatCodes.forEach((code) => {
      //   if (availableSeatCode.indexOf(code) === -1) errSeatCodes.push(code);
      //});
      // if (errSeatCodes.length > 0)
      //   return Promise.reject({
      //     status: 400,
      //     message: `Seats ${errSeatCodes.join(",")} is/are not available`,
      //   });
      seatCodes.forEach((code) => {
        const index = trip.seats.findIndex((seat) => seat.code === code);
        trip.seats[index].isBooked = true;
      });
      return Promise.all([
        Ticket.create({
          tripId,
          userId,
          seats: seatCodes.map((code) => new Seat({ code, isBooked: true })),
          totalPrice: seatCodes.length * trip.price,
        }),
        trip.save(),
      ]);
    })
    .then((result) => {
      const [ticket, trip] = result; //destructoring for array
      sendBookTicketEmail();
      return res.status(200).json(ticket);
    })
    .catch((err) => res.json(err));
};
