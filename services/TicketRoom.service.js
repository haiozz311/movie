const { TicketRoom } = require("../models/TicketRoom.modal");
const { Seat } = require("../models/seat.modal");
module.exports.getTicketRoom = (req, res, next) => {
  return TicketRoom.find()
    .populate({
      path: "thongTinPhim",
    })
    .then((ticketRoom) => {
      return res.status(200).json(ticketRoom);
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
};
const SeatCodeArray = [
  {
    tenGhe: "A01",
    loaiGhe: "thuong",
    soThuTu: "01",
    taiKhoan: "nhanvien01",
    heThongId: "Galaxy",
  },
  {
    tenGhe: "A01",
    loaiGhe: "thuong",
    soThuTu: "01",
    taiKhoan: "nhanvien01",
    heThongId: "Galaxy",
  },
  {
    tenGhe: "A01",
    loaiGhe: "thuong",
    soThuTu: "01",
    taiKhoan: "nhanvien01",
    heThongId: "Galaxy",
  },
];
module.exports.createTicketRoom = (req, res, next) => {
  const { thongTinPhim } = req.body;

  const DanhSachGhe = SeatCodeArray.map((tenGhe) => {
    //console.log(tenGhe);
    return new Seat({
      tenGhe: tenGhe.tenGhe,
      loaiGhe: tenGhe.loaiGhe,
      soThuTu: tenGhe.soThuTu,
      taiKhoan: tenGhe.taiKhoan,
      heThongId: tenGhe.heThongId,
    });
  });
  const newTicKet = new TicketRoom({
    thongTinPhim,
    danhSachGhe: DanhSachGhe,
  });

  TicketRoom.create(newTicKet)
    .then((result) => {
      return res.status(200).json(result);
    })
    .catch((err) => res.status(500).json(err));

  //   TicketRoom.findById(movieId)
  //     .then((ticket) => {
  //       if (!ticket)
  //         return Promise.reject({ status: 404, message: "ticket not found" });

  //       return Promise.all([newTicKet.save(), ticket.save(),]);
  //     })
  //     .then((result) => {
  //       return res.status(200).json(result[0]);
  //     })
  //     .catch((err) => res.status(500).json(err));
};
