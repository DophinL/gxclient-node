export default {
	"____comment": "This file was generated by gxc-abigen. DO NOT EDIT - 2019-01-08T06:25:05",
	"version": "gxc::abi/1.0",
	"types": [],
	"structs": [{
		"name": "bet",
		"base": "",
		"fields": [{
			"name": "id",
			"type": "uint64"
		}, {
			"name": "bet_id",
			"type": "uint64"
		}, {
			"name": "bettor",
			"type": "uint64"
		}, {
			"name": "referrer",
			"type": "uint64"
		}, {
			"name": "bet_asset",
			"type": "contract_asset"
		}, {
			"name": "roll",
			"type": "uint64"
		}, {
			"name": "seed",
			"type": "checksum256"
		}, {
			"name": "bet_time",
			"type": "int64"
		}, {
			"name": "status",
			"type": "uint64"
		}]
	}, {
		"name": "betresult",
		"base": "",
		"fields": [{
			"name": "id",
			"type": "uint64"
		}, {
			"name": "bet_id",
			"type": "uint64"
		}, {
			"name": "bettor",
			"type": "uint64"
		}, {
			"name": "referrer",
			"type": "uint64"
		}, {
			"name": "bet_asset",
			"type": "contract_asset"
		}, {
			"name": "roll",
			"type": "uint64"
		}, {
			"name": "random",
			"type": "uint64"
		}, {
			"name": "bet_time",
			"type": "int64"
		}]
	}, {
		"name": "publickey",
		"base": "",
		"fields": [{
			"name": "id",
			"type": "uint64"
		}, {
			"name": "key",
			"type": "string"
		}]
	}, {
		"name": "globalvar",
		"base": "",
		"fields": [{
			"name": "id",
			"type": "uint64"
		}, {
			"name": "value",
			"type": "uint64"
		}]
	}, {
		"name": "listindex",
		"base": "",
		"fields": [{
			"name": "id",
			"type": "uint64"
		}, {
			"name": "used_size",
			"type": "uint64"
		}, {
			"name": "table_size",
			"type": "uint64"
		}]
	}, {
		"name": "rankrecord",
		"base": "",
		"fields": [{
			"name": "id",
			"type": "uint64"
		}, {
			"name": "account_list",
			"type": "string"
		}, {
			"name": "amt_list",
			"type": "string"
		}, {
			"name": "rank_pool",
			"type": "uint64"
		}, {
			"name": "asset",
			"type": "contract_asset"
		}, {
			"name": "status",
			"type": "uint64"
		}]
	}, {
		"name": "divirecord",
		"base": "",
		"fields": [{
			"name": "id",
			"type": "uint64"
		}, {
			"name": "asset",
			"type": "contract_asset"
		}]
	}, {
		"name": "diceinit",
		"base": "",
		"fields": [{
			"name": "pubkey",
			"type": "string"
		}]
	}, {
		"name": "diceuninit",
		"base": "",
		"fields": []
	}, {
		"name": "diceofferbet",
		"base": "",
		"fields": [{
			"name": "roll",
			"type": "uint64"
		}, {
			"name": "referrer",
			"type": "uint64"
		}, {
			"name": "custom_seed",
			"type": "string"
		}, {
			"name": "memo",
			"type": "string"
		}]
	}, {
		"name": "diceresolve",
		"base": "",
		"fields": [{
			"name": "table_index",
			"type": "uint64"
		}, {
			"name": "bet_id",
			"type": "uint64"
		}, {
			"name": "sig",
			"type": "signature"
		}, {
			"name": "hash_sig",
			"type": "checksum256"
		}]
	}, {
		"name": "dicepause",
		"base": "",
		"fields": []
	}, {
		"name": "dicestart",
		"base": "",
		"fields": []
	}, {
		"name": "dicerefund",
		"base": "",
		"fields": [{
			"name": "table_index",
			"type": "uint64"
		}, {
			"name": "bet_id",
			"type": "uint64"
		}, {
			"name": "memo",
			"type": "string"
		}]
	}, {
		"name": "rankbalance",
		"base": "",
		"fields": [{
			"name": "id",
			"type": "uint64"
		}, {
			"name": "namelist",
			"type": "string"
		}, {
			"name": "amtlist",
			"type": "string"
		}]
	}],
	"actions": [{
		"name": "diceinit",
		"type": "diceinit",
		"payable": false
	}, {
		"name": "diceuninit",
		"type": "diceuninit",
		"payable": false
	}, {
		"name": "diceofferbet",
		"type": "diceofferbet",
		"payable": true
	}, {
		"name": "diceresolve",
		"type": "diceresolve",
		"payable": false
	}, {
		"name": "dicepause",
		"type": "dicepause",
		"payable": false
	}, {
		"name": "dicestart",
		"type": "dicestart",
		"payable": false
	}, {
		"name": "dicerefund",
		"type": "dicerefund",
		"payable": false
	}, {
		"name": "rankbalance",
		"type": "rankbalance",
		"payable": false
	}],
	"tables": [{
		"name": "bet",
		"index_type": "i64",
		"key_names": ["id"],
		"key_types": ["uint64"],
		"type": "bet"
	}, {
		"name": "betresult",
		"index_type": "i64",
		"key_names": ["id"],
		"key_types": ["uint64"],
		"type": "betresult"
	}, {
		"name": "publickey",
		"index_type": "i64",
		"key_names": ["id"],
		"key_types": ["uint64"],
		"type": "publickey"
	}, {
		"name": "globalvar",
		"index_type": "i64",
		"key_names": ["id"],
		"key_types": ["uint64"],
		"type": "globalvar"
	}, {
		"name": "listindex",
		"index_type": "i64",
		"key_names": ["id"],
		"key_types": ["uint64"],
		"type": "listindex"
	}, {
		"name": "rankrecord",
		"index_type": "i64",
		"key_names": ["id"],
		"key_types": ["uint64"],
		"type": "rankrecord"
	}, {
		"name": "divirecord",
		"index_type": "i64",
		"key_names": ["id"],
		"key_types": ["uint64"],
		"type": "divirecord"
	}],
	"error_messages": [],
	"abi_extensions": []
}