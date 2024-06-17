function goIdx(sakuinId){
	top.headFrame.linkPath.hid.value = sakuinId;
	top.bodyFrame.document.location.href = "body.html";
	top.headFrame.document.all.item('headTreeForm').style.display = 'block';
}
function DTCsearch(){
	DTCMatch = 0;
	matchFlg = 0;
	DTCCode = top.document.location.search.split(',')[0].substring(1);
	inputData = DTCCode;
	SYSCode = top.document.location.search.split(',')[1];
	DTCId = ['11','12','13','14','15','16','21','22','23','24','25','26','27','28','29','31','32','33','34','35','36','37','38','41','42','43','44','45','46','47','51','52','53','54','55','56','57','61','62','63','64','65','66','71','72','73','74','76','81','85','P0011','P0021','P0030','P0031','P0032','P0037','P0038','P0101','P0102','P0103','P0107','P0108','P0112','P0113','P0117','P0118','P0122','P0123','P0125','P0130','P0131','P0132','P0133','P0134','P0137','P0138','P0139','P0140','P0171','P0172','P0222','P0223','P0230','P0244','P0245','P0246','P0301','P0302','P0303','P0304','P0327','P0328','P0335','P0340','P0345','P0400','P0410','P0413','P0414','P0418','P0420','P0458','P0459','P0462','P0463','P0502','P0503','P0512','P0513','P0519','P0562','P0563','P0600','P0604','P0605','P0607','P0638','P0691','P0692','P0700','P0705','P0712','P0713','P0715','P0719','P0720','P0724','P0725','P0731','P0732','P0733','P0734','P0736','P0741','P0743','P0748','P0753','P0758','P0763','P0768','P0801','P0851','P0852','P1137','P1160','P1410','P1418','P1492','P1493','P1494','P1495','P1496','P1497','P1498','P1499','P1518','P1521','P1560','P1570','P1571','P1572','P1574','P1576','P1577','P1706','P1707','P1718','P1817','P2004','P2005','P2006','P2007','P2008','P2009','P2011','P2012','P2016','P2017','P2021','P2022','P2088','P2089','P2092','P2093','P2100','P2101','P2102','P2103','P2109','P2111','P2122','P2123','P2127','P2128','P2135','P2138','P2228','P2229','P2432','P2433','P2440','P2441','P2444','P2503','P2504'];

	if(SYSCode == 'ABG'){
		var SYSArray = ['002'];
	}else if(SYSCode == 'ABS'){
		var SYSArray = ['006'];
	}else if(SYSCode == 'ADA'){
		var SYSArray = ['013'];
	}else if(SYSCode == 'APS'){
		var SYSArray = ['014'];
	}else if(SYSCode == 'BIU'){
		var SYSArray = ['010'];
	}else if(SYSCode == 'C-C'){
		var SYSArray = ['003','043'];
	}else if(SYSCode == 'ENG'){
		var SYSArray = ['008','018','028','038','048','058','068','078','088','098','0a8','0b8','0c8','000','019','020','030','040','050','060','070','080','090'];
	}else if(SYSCode == 'ODS'){
		var SYSArray = ['017'];
	}else if(SYSCode == 'T-M'){
		var SYSArray = ['004','044','011','015','012'];
	}else if(SYSCode == 'TPM'){
		var SYSArray = ['016'];
	}else if(SYSCode == 'VDC'){
		var SYSArray = ['005'];
	}else{
		var SYSArray = 'error';
	}

	for(i = 0; i < DTCId.length; i++){
		if(inputData == DTCId[i]){
			matchFlg = 1;
		}
	}

	if(matchFlg == 1){
		var trHidden = 'trHiddenArray';
		trLength = document.getElementById(DTCCode).all.tags('tr').length;
		SgoIdx = document.getElementById(DTCCode).all.tags('tr')[0].all.tags('td')[2].all.tags('a')[0].href;
		for(i = 0;i < trLength;i++){
			if(SYSArray != 'error'){
				for(j = 0;j < SYSArray.length;j++){
					if(document.getElementById(DTCCode).all.tags('tr')[i].all.tags('td')[2].all.tags('a')[0].href.substring(19,22) == SYSArray[j]){
						SgoIdx = document.getElementById(DTCCode).all.tags('tr')[i].all.tags('td')[2].all.tags('a')[0].href;
						DTCMatch += 1;
					}else{
						trHidden = trHidden + ',' + i;
					}
				}
			}
		}

		if(trLength == '1'){
			eval(SgoIdx);
		}else{
			if(DTCMatch == 1){
				eval(SgoIdx);
			}else if(DTCMatch == 0){
				document.all.item(inputData).style.display = 'block';
			}else{
				if(inputData.length == 2){
					document.all.item(inputData).style.display = 'block';
					for(i = 1;i < trHidden.split(',').length;i++){
						document.getElementById(DTCCode).all.tags('tr')[trHidden.split(',')[i]].style.display = 'none';
					}
				}else{
					document.all.item(inputData).style.display = 'block';
				}
			}
		}
	}else{
		document.all.item('head').style.display = 'none';
		document.all.item('etc').style.display = 'block';
		document.all.item('etc2').style.display = 'none';
	}

}
