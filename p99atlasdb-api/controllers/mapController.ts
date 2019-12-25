import {Zone} from '../models/zone';

Zone.getMapByName  = (req, res) => {
    var zoneName = `^${String(req.params.zoneName)}$`;
    Zone.findOne({
        name: {$regex: new RegExp(zoneName, "i")}
        }, (err, zone) => {
        if (err) {
            res.status(err.status || 500);
            res.json({
            message: err.message,
            error: err
            });
        }
        else {
            var map = zone.maps.filter(map => map.name.toLowerCase() == req.params.mapName.toLowerCase())[0];
            res.status(200);
            res.json({
                message: "Record(s) received.",
                data: map
            });
        }
    });
}