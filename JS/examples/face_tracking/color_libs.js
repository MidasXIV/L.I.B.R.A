(function exampleCode() {
	"use strict";

	brfv4Example.initCurrentExample = function(brfManager, resolution) {
		brfManager.init(resolution, resolution, brfv4Example.appId);
	};

	brfv4Example.updateCurrentExample = function(brfManager, imageData, draw) {

		brfManager.update(imageData);

		draw.clear();

		// Face detection results: a rough rectangle used to start the face tracking.

		draw.drawRects(brfManager.getAllDetectedFaces(),	false, 1.0, 0x00a1ff, 0.5);
		draw.drawRects(brfManager.getMergedDetectedFaces(),	false, 2.0, 0xffd200, 1.0);

		var faces = brfManager.getFaces(); // default: one face, only one element in that array.

		for(var i = 0; i < faces.length; i++) {

			var face = faces[i];

			if(		face.state === brfv4.BRFState.FACE_TRACKING_START ||
					face.state === brfv4.BRFState.FACE_TRACKING) {

				// Face tracking results: 68 facial feature points.
				//TRIANGLES
				draw.drawTriangles(	face.vertices, face.triangles, false, 1.0, 0x117864, 0.4);
				//JUST THE DOTS
				draw.drawVertices(	face.vertices, 2.0, false, 0x00FF00, 0.8);

				// Now just draw all the triangles of the mouth in a certain color.

				//draw.fillTriangles(	face.vertices, libTriangles, false, 0xff7900, 0.8);
				//draw.drawTriangles(	face.vertices, libTriangles2, false,1.0, 0xff7900, 0.8);
                // Yawn Detection - Or: How wide open is the mouth?

				setPoint(face.vertices, 39, p1); // left eye inner corner
				setPoint(face.vertices, 42, p0); // right eye outer corner

				var eyeDist = calcDistance(p0, p1);

				setPoint(face.vertices, 62, p0); // mouth upper inner lip
				setPoint(face.vertices, 66, p1); // mouth lower inner lip

				var mouthOpen = calcDistance(p0, p1);
				var yawnFactor = mouthOpen / eyeDist;

				yawnFactor -= 0.35; // remove smiling

				if(yawnFactor < 0) yawnFactor = 0;

				yawnFactor *= 2.0; // scale up a bit

				if(yawnFactor > 1.0) yawnFactor = 1.0;

				if(yawnFactor < 0.0) { yawnFactor = 0.0; }
				if(yawnFactor > 1.0) { yawnFactor = 1.0; }

				// Let the color show you how much you yawn.

				var color =
					(((0xff * (1.0 - yawnFactor) & 0xff) << 16)) +
					(((0xff * yawnFactor) & 0xff) << 8);

				// Face Tracking results: 68 facial feature points.

				draw.drawTriangles(	face.vertices, face.triangles, false, 1.0, color, 0.4);
				draw.drawVertices(	face.vertices, 2.0, false, color, 0.4);

				brfv4Example.dom.updateHeadline("BRFv4 - Advanced - A Simple Yawn Detection.\n" +
					"Detects how wide open the mouth is: " + (yawnFactor * 100).toFixed(0) + "%");
			}
		}
	};

	var libTriangles	= [
		48, 49, 60,
		48, 59, 60,
		49, 50, 61,
		49, 60, 61,
		50, 51, 62,
		50, 61, 62,
		51, 52, 62,
		52, 53, 63,
		52, 62, 63,
		53, 54, 64,
		53, 63, 64,
		54, 55, 64,
		55, 56, 65,
		55, 64, 65,
		56, 57, 66,
		56, 65, 66,
		57, 58, 66,
		58, 59, 67,
		58, 66, 67,
		59, 60, 67
		//,					// mouth whole
		// 60, 61, 67,
		// 61, 62, 66,
		// 61, 66, 67,
		// 62, 63, 66,
		// 63, 64, 65,
		// 63, 65, 66
	];
    
var libTriangles2	= [
		36, 37, 41,
 //       37, 40, 38,
//        37, 41, 38,
        38, 39, 40,
        42, 43, 47,
//        43, 44, 46,
//        43, 44, 47,
        44, 45, 46,
        21, 22, 27,
        48, 50, 54,
        48, 52, 54,
        48, 57, 8,
        57, 8, 54,
        27, 31, 35,
//        14, 2,  14,
        48, 30, 54,
        8, 54, 13,
        3, 48, 8,
        8, 54, 11,
        5, 48, 8,
        2, 48, 8,
        14, 54, 8,
 //       21, 38, 39,
		//,					// mouth whole
		// 60, 61, 67,
		// 61, 62, 66,
		// 61, 66, 67,
		// 62, 63, 66,
		// 63, 64, 65,
		// 63, 65, 66
	];

	var p0				= new brfv4.Point();
	var p1				= new brfv4.Point();

	var setPoint		= brfv4.BRFv4PointUtils.setPoint;
	var calcDistance	= brfv4.BRFv4PointUtils.calcDistance;
	//brfv4Example.dom.updateHeadline("BRFv4 - intermediate - face tracking - color libs.\n" +"Draws triangles with a certain fill color.");

	//brfv4Example.dom.updateCodeSnippet(exampleCode + "");
})();